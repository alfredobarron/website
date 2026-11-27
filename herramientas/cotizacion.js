// Cotización en PDF con la marca (docs/MARCA.md §8): tamaño carta, el tramo
// de A a B con el punto de partida y la meta, el alcance, las etapas con
// precio fijo y fecha, el total con IVA y las condiciones.
// Los datos de cada cotización van en un .json con la forma de
// formatos/cotizacion-ejemplo.json. Opcionales: el alcance en grupos
// ([{ "grupo": "…", "items": [[nombre, texto]] }]), un descuento (fracción,
// 0.2 = 20 %) que se resta antes del IVA, pagos ligados a entregas
// ([{ "nombre", "cuando", "porcentaje" }], sobre el total con IVA) y un
// mantenimiento aproximado ("aproximado": true en "mensual"). Las cotizaciones reales llevan datos de
// clientes: viven en ~/Datos-clientes/website/cotizaciones/, nunca en el repo.
// Uso: cd herramientas && node cotizacion.js <datos.json> [salida.pdf]
//      (sin salida, el PDF queda junto al .json con el mismo nombre)
//      node cotizacion.js            (regenera el ejemplo en docs/marca/formatos/)

const fs = require('fs')
const path = require('path')
const { chromium } = require('playwright')
const P = require('./sitio/plantilla')

const RAIZ = path.join(__dirname, '..')
const EJEMPLO = path.join(__dirname, 'formatos/cotizacion-ejemplo.json')
const fuente = n => 'data:font/woff2;base64,' + fs.readFileSync(path.join(RAIZ, 'fonts/Funnel', n)).toString('base64')
const logo = fs.readFileSync(path.join(RAIZ, 'docs/marca/ab-horizontal.svg'), 'utf8')

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const dia = iso => { const [a, m, d] = iso.split('-').map(Number); return `${d} de ${MESES[m - 1]} de ${a}` }
const sumarDias = (iso, n) => { const f = new Date(iso + 'T12:00:00Z'); f.setUTCDate(f.getUTCDate() + n); return f.toISOString().slice(0, 10) }
const semanas = n => `${n} ${n === 1 ? 'semana' : 'semanas'}`

function validar(d) {
    const faltan = ['folio', 'fecha', 'cliente', 'proyecto', 'resumen', 'alcance', 'etapas'].filter(k => !d[k])
    if (faltan.length) throw new Error(`Al .json le falta: ${faltan.join(', ')}`)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.fecha)) throw new Error('La fecha va como AAAA-MM-DD')
    for (const e of d.etapas) if (typeof e.precio !== 'number') throw new Error(`La etapa «${e.nombre}» no tiene precio en número`)
}

function html(d) {
    const moneda = d.moneda || 'MXN'
    const dinero = n => '$' + n.toLocaleString('es-MX', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })
    const centavos = n => Math.round(n * 100) / 100
    const precioLista = d.etapas.reduce((s, e) => s + e.precio, 0)
    const descuento = d.descuento ? centavos(precioLista * d.descuento) : 0
    const subtotal = precioLista - descuento
    const tasa = d.iva ?? 0.16
    const iva = centavos(subtotal * tasa)
    const total = centavos(subtotal + iva)
    // Cada pago es su porcentaje del total; el último se queda con los centavos que sobren.
    const pagos = (d.pagos || []).map(p => ({ ...p, monto: centavos(total * p.porcentaje) }))
    if (pagos.length) pagos[pagos.length - 1].monto = centavos(total - pagos.slice(0, -1).reduce((s, p) => s + p.monto, 0))
    const filete = items => `<ul class="filete">${items.map(([n, t]) => `<li><strong>${P.esc(n)}</strong><span>${P.esc(t)}</span></li>`).join('')}</ul>`
    const plazo = d.etapas.reduce((s, e) => s + (e.semanas || 0), 0)
    const lista = (titulo, items) => items && items.length ? `
    <section class="bloque bloque--junto">
        <h2>${titulo}</h2>
        <ul class="puntos">${items.map(x => `<li>${P.esc(x)}</li>`).join('')}</ul>
    </section>` : ''

    return `<!doctype html><html lang="es-MX"><meta charset="utf-8"><title>Cotización ${P.esc(d.folio)}</title><style>
@font-face { font-family: 'Funnel Display'; src: url(${fuente('FunnelDisplay-Variable-latin.woff2')}); font-weight: 300 800; }
@font-face { font-family: 'Funnel Sans'; src: url(${fuente('FunnelSans-Variable-latin.woff2')}); font-weight: 300 800; }
@page { size: Letter; margin: 16mm 18mm 20mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font: 400 10.5pt/1.55 'Funnel Sans', sans-serif; color: #33473F; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3 { font-family: 'Funnel Display', sans-serif; color: #0A2A21; letter-spacing: -.02em; }
ul, ol { list-style: none; }
.cabeza { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 9mm; }
.cabeza svg { width: 46mm; height: auto; display: block; }
.cabeza svg path { fill: #0E3B2E; }
.folio { text-align: right; font-size: 9.5pt; color: #5A6B63; }
.folio strong { display: block; font: 600 13pt/1.2 'Funnel Display', sans-serif; color: #0A2A21; }
.para { font-size: 9.5pt; color: #5A6B63; }
.para strong { display: block; color: #0A2A21; font-size: 11pt; font-weight: 600; }
h1 { font-size: 27pt; line-height: 1.04; letter-spacing: -.035em; margin: 6mm 0 3mm; max-width: 150mm; text-wrap: balance; }
.resumen { font-size: 12pt; line-height: 1.5; max-width: 150mm; }
.bloque { margin-top: 9mm; }
/* Las listas cortas (qué no incluye, condiciones) no se parten entre dos páginas. */
.bloque--junto { break-inside: avoid; }
h2 { font-size: 14pt; line-height: 1.15; margin-bottom: 3mm; break-after: avoid; }
.grupo { font-size: 11pt; margin: 5mm 0 2mm; break-after: avoid; }
.grupo:first-of-type { margin-top: 0; }

/* De A a B: el punto de partida en gris, la meta en pino con el punto jade. */
.tramo { margin-top: 8mm; display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; break-inside: avoid; }
.tramo > div { border-radius: 16px; padding: 6mm; }
.tramo__a { background: #F2F4F0; }
.tramo__b { background: #0E3B2E; color: #CFE3DA; }
.tramo h3 { display: flex; align-items: center; gap: 2.5mm; font-size: 11.5pt; margin-bottom: 3mm; }
.tramo__b h3 { color: #fff; }
.letra { width: 7mm; height: 7mm; border-radius: 50%; display: grid; place-items: center; font: 700 9pt/1 'Funnel Display', sans-serif; flex: none; }
.letra--a { box-shadow: inset 0 0 0 1.5px #8B9891; color: #5A6B63; }
.letra--b { background: #19C37D; color: #0A2A21; }
.tramo li { position: relative; padding-left: 4.5mm; font-size: 9.8pt; }
.tramo li + li { margin-top: 1.6mm; }
.tramo li::before { content: '–'; position: absolute; left: 0; }

/* Listas con filete, como «Qué incluye» en el sitio. */
.filete { border-top: 1.5px solid #0A2A21; }
.filete > li { display: grid; grid-template-columns: 46mm 1fr; gap: 5mm; padding: 2.6mm 0; border-bottom: 1px solid #D9DFD8; break-inside: avoid; }
.filete strong { color: #0A2A21; font-weight: 600; }

table { width: 100%; border-collapse: collapse; border-top: 1.5px solid #0A2A21; }
th { text-align: left; font-weight: 400; font-size: 9pt; color: #5A6B63; padding: 2.2mm 0; border-bottom: 1px solid #D9DFD8; }
td { padding: 2.8mm 0; border-bottom: 1px solid #D9DFD8; vertical-align: top; }
tr { break-inside: avoid; }
.n { width: 8mm; font: 700 10.5pt/1.55 'Funnel Display', sans-serif; color: #0A2A21; }
.etapa strong { display: block; color: #0A2A21; font-weight: 600; }
.etapa span { font-size: 9.5pt; }
.plazo { width: 24mm; white-space: nowrap; padding-left: 4mm; }
.precio { width: 30mm; text-align: right; white-space: nowrap; color: #0A2A21; font-variant-numeric: tabular-nums; }
th.precio, th.plazo { color: #5A6B63; }
.totales { margin: 3mm 0 0 auto; width: 78mm; break-inside: avoid; }
.totales div { display: flex; justify-content: space-between; padding: 1.4mm 0; font-variant-numeric: tabular-nums; }
.totales .total { margin-top: 1.5mm; padding: 3mm 0 0; border-top: 1.5px solid #0A2A21; color: #0A2A21; font: 700 15pt/1.2 'Funnel Display', sans-serif; }
.mensual { margin-top: 5mm; background: #F2F4F0; border-radius: 16px; padding: 5mm 6mm; display: flex; justify-content: space-between; gap: 8mm; align-items: center; break-inside: avoid; }
.mensual p { max-width: 115mm; font-size: 9.8pt; }
.mensual strong { color: #0A2A21; white-space: nowrap; font: 600 12pt/1.2 'Funnel Display', sans-serif; }
.mensual small { display: block; font: 400 8.5pt/1.3 'Funnel Sans', sans-serif; color: #5A6B63; text-align: right; }

.puntos li { position: relative; padding-left: 5.5mm; max-width: 160mm; break-inside: avoid; }
.puntos li + li { margin-top: 1.8mm; }
.puntos li::before { content: ''; position: absolute; left: .5mm; top: .62em; width: 2mm; height: 2mm; border-radius: 50%; background: #19C37D; }

.cierre { margin-top: 10mm; background: #0E3B2E; color: #CFE3DA; border-radius: 16px; padding: 7mm; break-inside: avoid; }
.cierre h2 { color: #fff; margin-bottom: 2mm; }
.cierre p + p { margin-top: 3mm; color: #fff; font-weight: 500; }
</style>
<header class="cabeza">
    ${logo}
    <p class="folio"><strong>Cotización ${P.esc(d.folio)}</strong>${dia(d.fecha)}${d.vigenciaDias ? `<br>Vigente hasta el ${dia(sumarDias(d.fecha, d.vigenciaDias))}` : ''}</p>
</header>
<p class="para">Para<strong>${P.esc(d.cliente.empresa)}</strong>${[d.cliente.contacto, d.cliente.puesto].filter(Boolean).map(P.esc).join(', ')}</p>
<h1>${P.esc(d.proyecto)}</h1>
<p class="resumen">${P.esc(d.resumen)}</p>
${d.a && d.b ? `<div class="tramo">
    <div class="tramo__a"><h3><span class="letra letra--a">A</span>El punto de partida</h3><ul>${d.a.map(x => `<li>${P.esc(x)}</li>`).join('')}</ul></div>
    <div class="tramo__b"><h3><span class="letra letra--b">B</span>A dónde llegamos</h3><ul>${d.b.map(x => `<li>${P.esc(x)}</li>`).join('')}</ul></div>
</div>` : ''}
<section class="bloque">
    <h2>Qué incluye</h2>
    ${d.alcance[0].grupo ? d.alcance.map(g => `<h3 class="grupo">${P.esc(g.grupo)}</h3>${filete(g.items)}`).join('') : filete(d.alcance)}
</section>
<section class="bloque">
    <h2>Etapas, fechas y precio</h2>
    <table>
        <thead><tr><th class="n"></th><th>Etapa y lo que recibes</th><th class="plazo">Duración</th><th class="precio">Precio (${moneda})</th></tr></thead>
        <tbody>${d.etapas.map((e, i) => `
            <tr><td class="n">${i + 1}</td><td class="etapa"><strong>${P.esc(e.nombre)}</strong><span>${P.esc(e.entrega || '')}</span></td><td class="plazo">${e.semanas ? semanas(e.semanas) : ''}</td><td class="precio">${dinero(e.precio)}</td></tr>`).join('')}
        </tbody>
    </table>
    <div class="totales">
        ${plazo ? `<div><span>Duración total</span><span>${semanas(plazo)}</span></div>` : ''}
        ${descuento ? `<div><span>Precio de lista</span><span>${dinero(precioLista)}</span></div>
        <div><span>Descuento (${Math.round(d.descuento * 100)} %)</span><span>−${dinero(descuento)}</span></div>` : ''}
        <div><span>Subtotal</span><span>${dinero(subtotal)}</span></div>
        <div><span>IVA (${Math.round(tasa * 100)} %)</span><span>${dinero(iva)}</span></div>
        <div class="total"><span>Total</span><span>${dinero(total)} ${moneda}</span></div>
    </div>
    ${d.mensual ? `<div class="mensual"><p>${P.esc(d.mensual.concepto)}</p><strong>${d.mensual.aproximado ? '~' : ''}${dinero(d.mensual.precio)} ${moneda}<small>${d.mensual.aproximado ? 'aprox. al mes, más IVA' : 'al mes, más IVA'}</small></strong></div>` : ''}
</section>
${pagos.length ? `<section class="bloque bloque--junto">
    <h2>Forma de pago</h2>
    <table>
        <thead><tr><th class="n"></th><th>Pago y cuándo</th><th class="plazo"></th><th class="precio">Monto con IVA</th></tr></thead>
        <tbody>${pagos.map((p, i) => `
            <tr><td class="n">${i + 1}</td><td class="etapa"><strong>${P.esc(p.nombre)}</strong><span>${P.esc(p.cuando)}</span></td><td class="plazo">${Math.round(p.porcentaje * 100)} %</td><td class="precio">${dinero(p.monto)}</td></tr>`).join('')}
        </tbody>
    </table>
</section>` : ''}
${lista('Qué no incluye', d.noIncluye)}
${lista('Condiciones', d.condiciones)}
<section class="cierre">
    <h2>El siguiente paso</h2>
    <p>${P.esc(d.siguiente || 'Si estás de acuerdo, respóndeme este correo o escríbeme por WhatsApp y agendamos el arranque.')}</p>
    <p>Alfredo Barrón &nbsp;·&nbsp; ${P.TELEFONO} &nbsp;·&nbsp; ${P.CORREO} &nbsp;·&nbsp; alfredobarron.com</p>
</section>
</html>`
}

;(async () => {
    const [entrada, salidaArg] = process.argv.slice(2)
    const origen = path.resolve(entrada || EJEMPLO)
    const d = JSON.parse(fs.readFileSync(origen, 'utf8'))
    validar(d)
    const salida = salidaArg
        ? path.resolve(salidaArg)
        : entrada ? origen.replace(/\.json$/, '') + '.pdf' : path.join(RAIZ, 'docs/marca/formatos/cotizacion-ejemplo.pdf')
    fs.mkdirSync(path.dirname(salida), { recursive: true })

    const navegador = await chromium.launch()
    const pagina = await navegador.newPage()
    await pagina.setContent(html(d))
    await pagina.evaluate(() => document.fonts.ready)
    await pagina.pdf({
        path: salida, format: 'Letter', printBackground: true, preferCSSPageSize: true,
        displayHeaderFooter: true, headerTemplate: '<span></span>',
        footerTemplate: `<div style="width:100%;padding:0 18mm;font:8px Helvetica,Arial,sans-serif;color:#5A6B63;display:flex;justify-content:space-between;"><span>Cotización ${P.esc(d.folio)} · ${P.esc(d.cliente.empresa)}</span><span>Página <span class="pageNumber"></span> de <span class="totalPages"></span></span></div>`,
    })
    await navegador.close()
    console.log(salida)
})().catch(e => { console.error(e.message); process.exit(1) })
