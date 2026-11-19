// Firma de correo de la marca (docs/MARCA.md §8), en español y en inglés.
// Escribe docs/marca/formatos/firma-correo.html, una página con las dos firmas
// y un botón para copiarlas, y el logo que la firma carga desde el sitio
// (img/marca/firma-alfredo-barron.png: hay que publicarlo para que se vea en
// los correos). El logo va en blanco sobre un bloque pino y no en pino sobre
// transparente: Apple Mail y otros clientes en modo oscuro ponen el fondo
// negro y no tocan las imágenes, así que el logo pino desaparecía.
// img/marca/firma-logo.png es el anterior: se conserva porque lo cargan los
// correos ya enviados.
// El HTML de la firma va en tablas y con estilos en línea, que es lo que
// conservan Gmail y los demás clientes; la letra cae a Helvetica o Arial.
// Uso: cd herramientas && node firma.js
// Para ponerla: abrir el .html, «Copiar firma» y pegar en Gmail → Configuración
// → General → Firma.

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const P = require('./sitio/plantilla')

const RAIZ = path.join(__dirname, '..')
const SALIDA = path.join(RAIZ, 'docs/marca/formatos')
const ARCHIVO = 'img/marca/firma-alfredo-barron.png'
const LOGO = `${P.ORIGEN}/${ARCHIVO}`
// El bloque pino mide 172 × 44 y el logo dentro 140 px de ancho (el mínimo de la horizontal
// es 120); se guarda al triple para pantallas de alta densidad.
const ANCHO = 172
const ALTO = 44
const ANCHO_LOGO = 140
const ESCALA = 3

const FUENTE = `'Funnel Sans', Helvetica, Arial, sans-serif`

// La firma NO define colores: ni en el texto ni en las ligas. Apple Mail solo pasa a modo
// oscuro los correos sin colores propios; con uno solo, pinta el mensaje entero sobre blanco.
// Así el texto toma el color de cada cliente (negro en claro, blanco en oscuro) y la marca la
// lleva el logo. `src` solo cambia en la muestra de la página, que usa la copia local.
function firma(idioma, src = LOGO) {
    const es = idioma === 'es'
    const telefono = P.TELEFONO.replace(/\D/g, '')
    const inicio = `${P.ORIGEN}/${es ? '' : 'en/'}`
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FUENTE};font-size:14px;line-height:1.5;">
    <tr><td style="padding:0;">
        <a href="${inicio}"><img src="${src}" width="${ANCHO}" height="${ALTO}" alt="Alfredo Barrón" style="display:block;border:0;"></a>
    </td></tr>
    <tr><td style="padding:12px 0 0 0;">
        <b>${es ? 'Arquitecto de software' : 'Software architect'}</b><br>
        ${es ? 'Software a la medida, apps móviles y sitios web' : 'Custom software, mobile apps and websites'}
    </td></tr>
    <tr><td style="padding:8px 0 0 0;">
        <a href="https://wa.me/${telefono}">${P.TELEFONO}</a> &nbsp;·&nbsp; <a href="mailto:${P.CORREO}">${P.CORREO}</a><br>
        <a href="${inicio}">alfredobarron.com${es ? '' : '/en'}</a> &nbsp;·&nbsp; ${es ? 'Monterrey, Nuevo León' : 'Monterrey, Mexico'}
    </td></tr>
</table>`
}

const pagina = `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>Firma de correo | Alfredo Barrón</title>
<style>
    body { margin: 0; padding: 40px 24px; background: #F2F4F0; color: #33473F; font: 16px/1.6 'Funnel Sans', Helvetica, Arial, sans-serif; }
    main { max-width: 640px; margin: 0 auto; }
    h1 { font-size: 28px; line-height: 1.1; color: #0A2A21; margin: 0 0 8px; }
    h2 { font-size: 18px; color: #0A2A21; margin: 40px 0 12px; }
    ol { padding-left: 20px; }
    .firma { background: #fff; border: 1px solid #D9DFD8; border-radius: 16px; padding: 28px; }
    button { margin-top: 14px; font: inherit; font-weight: 600; color: #fff; background: #0E3B2E; border: 0; border-radius: 999px; padding: 10px 20px; cursor: pointer; }
    button:active { transform: scale(.97); }
    .aviso { color: #5A6B63; font-size: 15px; }
    .firma { color: #000; }
    .muestra { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px; }
    .muestra > div { padding: 20px; border-radius: 16px; background: #fff; color: #000; border: 1px solid #D9DFD8; }
    .muestra .oscuro { background: #1E1E1E; border-color: #1E1E1E; color: #fff; }
    .muestra .oscuro a { color: #8AB4F8; }
    @media (max-width: 640px) { .muestra { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<main>
    <h1>Firma de correo</h1>
    <p class="aviso">Se genera con <code>node firma.js</code>. No edites este archivo a mano.</p>
    <ol>
        <li>Da clic en «Copiar firma».</li>
        <li>En Gmail: Configuración → General → Firma → Crear nueva, y pega.</li>
        <li>Elígela para <strong>${P.CORREO}</strong> en «Valores predeterminados de la firma».</li>
    </ol>
    <p class="aviso">El logo se carga desde ${LOGO}: se ve en los correos cuando ese archivo ya está publicado en el sitio.</p>

    <p class="aviso">Así se ve en un correo claro y en uno oscuro. Es solo una muestra con la copia local del logo: la que se copia es la de abajo.</p>
    <div class="muestra"><div>${firma('es', `../../../${ARCHIVO}`)}</div><div class="oscuro">${firma('es', `../../../${ARCHIVO}`)}</div></div>

    <h2>Español</h2>
    <div class="firma" id="firma-es">${firma('es')}</div>
    <button data-copiar="firma-es">Copiar firma</button>

    <h2>English</h2>
    <div class="firma" id="firma-en">${firma('en')}</div>
    <button data-copiar="firma-en">Copiar firma</button>
</main>
<script>
    // Copia la firma con su formato (no como texto plano), que es lo que Gmail espera al pegar.
    for (const boton of document.querySelectorAll('[data-copiar]')) {
        boton.addEventListener('click', async () => {
            const html = document.getElementById(boton.dataset.copiar).innerHTML
            try {
                await navigator.clipboard.write([new ClipboardItem({
                    'text/html': new Blob([html], { type: 'text/html' }),
                    'text/plain': new Blob([document.getElementById(boton.dataset.copiar).innerText], { type: 'text/plain' }),
                })])
            } catch {
                const rango = document.createRange()
                rango.selectNodeContents(document.getElementById(boton.dataset.copiar))
                const s = getSelection(); s.removeAllRanges(); s.addRange(rango)
                document.execCommand('copy'); s.removeAllRanges()
            }
            const antes = boton.textContent
            boton.textContent = 'Copiada'
            setTimeout(() => { boton.textContent = antes }, 1600)
        })
    }
</script>
</body>
</html>
`

;(async () => {
    fs.mkdirSync(SALIDA, { recursive: true })
    const w = ANCHO * ESCALA, h = ALTO * ESCALA
    const logo = await sharp(path.join(RAIZ, 'docs/marca/ab-horizontal-blanco.svg'), { density: 600 })
        .resize({ width: ANCHO_LOGO * ESCALA }).png().toBuffer({ resolveWithObject: true })
    const bloque = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${8 * ESCALA}" fill="#0E3B2E"/></svg>`)
    await sharp(bloque)
        .composite([{ input: logo.data, left: Math.round((w - logo.info.width) / 2), top: Math.round((h - logo.info.height) / 2) }])
        .png().toFile(path.join(RAIZ, ARCHIVO))
    fs.writeFileSync(path.join(SALIDA, 'firma-correo.html'), pagina)
    console.log(`${ARCHIVO}\ndocs/marca/formatos/firma-correo.html`)
})()
