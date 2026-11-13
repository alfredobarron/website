// Las secciones del sitio como funciones: reciben los datos de ./datos-*.js y
// devuelven HTML. Las clases (ab-*) están en /css/sitio.css.

const { esc, whatsapp, iconoWhatsapp, migas, preguntas, contacto, T } = require('./plantilla')

const img = (nombre, alt, ancho, alto, extra = '') =>
    `<img src="/img/proyectos/${nombre}.webp" alt="${esc(alt)}" width="${ancho}" height="${alto}" ${extra}>`

// ── Inicio ──────────────────────────────────────────────────────────────

function portada(d, idioma) {
    return `        <section class="ab-portada">
            <div class="ab-ancho">
                <h1>${d.titulo}</h1>
                <p class="ab-portada__bajada">${d.bajada}</p>
                <div class="ab-portada__acciones">
                    <a class="ab-boton" href="${whatsapp(T[idioma].mensaje)}" data-evento="whatsapp">${iconoWhatsapp}${T[idioma].cta}</a>
                    <a class="ab-enlace" href="${d.enlace[0]}">${d.enlace[1]}</a>
                </div>
            </div>
        </section>`
}

// De A a B: un caso por pestaña. Sin JavaScript se ven todos, uno debajo de otro.
function ruta(d) {
    const pestanas = d.casos.map((c, i) =>
        `<button class="ab-ruta__pestana" role="tab" id="ruta-pestana-${i}" aria-controls="ruta-panel-${i}" aria-selected="${i === 0}" ${i ? 'tabindex="-1"' : ''}>${c.pestana}</button>`).join('')
    const paneles = d.casos.map((c, i) => `
                    <div class="ab-ruta__panel" role="tabpanel" id="ruta-panel-${i}" aria-labelledby="ruta-pestana-${i}">
                        <div class="ab-tramo">
                            <span class="ab-tramo__punto ab-tramo__punto--a" aria-hidden="true">A</span>
                            <div class="ab-tramo__texto ab-tramo__texto--a">
                                <p class="ab-tramo__rotulo">${d.rotuloA}</p>
                                <p>${c.a}</p>
                            </div>
                            <span class="ab-tramo__linea" aria-hidden="true"></span>
                            <span class="ab-tramo__punto ab-tramo__punto--b" aria-hidden="true">B</span>
                            <div class="ab-tramo__texto ab-tramo__texto--b">
                                <p class="ab-tramo__rotulo">${d.rotuloB}</p>
                                <h3>${c.b}</h3>
                                <p>${c.texto}</p>
                                <ul class="ab-tramo__datos">${c.datos.map(x => `<li>${x}</li>`).join('')}</ul>
                                <a class="ab-tramo__mas" href="${c.enlace[0]}">${c.enlace[1]}</a>
                            </div>
                        </div>
                        <div class="ab-ruta__captura">${img(c.imagen, c.alt, 600, 1200, i ? 'loading="lazy"' : 'fetchpriority="high"')}</div>
                    </div>`).join('')
    return `        <section class="ab-seccion ab-seccion--pegada ab-seccion--ruta" aria-label="${d.etiqueta}">
            <div class="ab-ancho">
                <div class="ab-ruta" data-ruta>
                    <div class="ab-ruta__pestanas" role="tablist" aria-label="${d.etiqueta}">${pestanas}</div>${paneles}
                </div>
            </div>
        </section>`
}

function clientes(d) {
    return `        <section class="ab-clientes">
            <div class="ab-ancho">
                <p>${d.titulo}</p>
                <ul>${d.lista.map(x => `<li>${x}</li>`).join('')}</ul>
            </div>
        </section>`
}

function cabezaSeccion(titulo, bajada) {
    return `<div class="ab-seccion__cabeza"><h2>${titulo}</h2>${bajada ? `<p>${bajada}</p>` : ''}</div>`
}

function servicios(d) {
    return `        <section id="${d.id}" class="ab-seccion ab-seccion--blanca">
            <div class="ab-ancho">
                ${cabezaSeccion(d.titulo, d.bajada)}
                <div class="ab-servicios">${d.lista.map(s => `
                    <article class="ab-servicio">
                        <div>
                            <h3>${s.url ? `<a href="${s.url}">${s.nombre}</a>` : s.nombre}</h3>
                            <p class="ab-servicio__de">${s.para}</p>
                        </div>
                        <div class="ab-servicio__cuerpo">
                            <p>${s.texto}</p>
                            ${s.url ? `<a class="ab-enlace" href="${s.url}">${s.enlace}</a>` : ''}
                        </div>
                    </article>`).join('')}
                </div>
            </div>
        </section>`
}

function tarjetaCaso(c, d) {
    return `
                    <article class="ab-caso">
                        <div>
                            <p class="ab-caso__tipo">${c.tipo}</p>
                            <h3><a href="${c.url}">${c.nombre}</a></h3>
                            <ul class="ab-caso__ab">
                                <li><span class="ab-letra ab-letra--a" aria-label="${d.rotuloA}">A</span><p>${c.a}</p></li>
                                <li><span class="ab-letra ab-letra--b" aria-label="${d.rotuloB}">B</span><p>${c.b}</p></li>
                            </ul>
                            <div class="ab-caso__pie"><a class="ab-enlace" href="${c.url}">${c.enlace}</a></div>
                        </div>
                        <div class="ab-caso__imagen${c.movil ? ' ab-caso__imagen--movil' : ''}">${img(c.imagen, c.alt, c.movil ? 600 : 1280, c.movil ? 1200 : 960, 'loading="lazy"')}</div>
                    </article>`
}

function proyectos(d) {
    return `        <section id="${d.id}" class="ab-seccion">
            <div class="ab-ancho">
                ${cabezaSeccion(d.titulo, d.bajada)}
                <div class="ab-casos">${d.casos.map(c => tarjetaCaso(c, d)).join('')}
                </div>
                <div class="ab-otros">
                    <h3>${d.otros.titulo}</h3>
                    <ul>${d.otros.lista.map(([url, nombre, que]) => `<li><a href="${url}"${url.startsWith('/') ? '' : ' rel="noopener"'}>${nombre}</a><span>${que}</span></li>`).join('')}</ul>
                </div>
            </div>
        </section>`
}

function pasos(d) {
    return `        <section id="${d.id}" class="ab-seccion ab-seccion--blanca">
            <div class="ab-ancho">
                ${cabezaSeccion(d.titulo, d.bajada)}
                <ol class="ab-pasos">${d.lista.map(([nombre, texto]) => `
                    <li class="ab-paso"><h3>${nombre}</h3><p>${texto}</p></li>`).join('')}
                </ol>
            </div>
        </section>`
}

function sobre(d) {
    return `        <section id="${d.id}" class="ab-seccion">
            <div class="ab-ancho ab-sobre">
                <div class="ab-sobre__texto">
                    <img class="ab-sobre__foto" src="/img/marca/alfredo-barron.webp" alt="${esc(d.foto)}" width="400" height="400" loading="lazy">
                    <h2>${d.titulo}</h2>
                    ${d.parrafos.map(p => `<p>${p}</p>`).join('\n                    ')}
                </div>
                <ul class="ab-hechos">${d.hechos.map(([dato, contexto]) => `<li><strong>${dato}</strong><span>${contexto}</span></li>`).join('')}</ul>
            </div>
            <div class="ab-ancho ab-trayectoria">
                <h3>${d.trayectoria.titulo}</h3>
                <ol>${d.trayectoria.lista.map(([anos, empresa, puesto, texto]) => `<li><span class="ab-trayectoria__anos">${anos}</span><div><strong>${empresa}</strong><span class="ab-trayectoria__puesto">${puesto}</span><p>${texto}</p></div></li>`).join('')}</ol>
            </div>
        </section>`
}

function seccionPreguntas(d, blanca = true) {
    return `        <section id="${d.id}" class="ab-seccion${blanca ? ' ab-seccion--blanca' : ''}">
            <div class="ab-ancho">
                ${cabezaSeccion(d.titulo, d.bajada)}
                ${preguntas(d.lista)}
            </div>
        </section>`
}

// Capturas: [imagen, pie, ancho, alto, enlace]. Las de teléfono no llevan medidas.
function galeria(lista) {
    const anchas = lista.filter(x => x[2]).length
    const soloAnchas = anchas === lista.length
    // Dos pantallas de computadora apiladas junto a dos de teléfono.
    const piezas = anchas === 2 && lista.length === 4
    return `<div class="ab-galeria${soloAnchas ? ' ab-galeria--sitios' : ''}${piezas ? ' ab-galeria--piezas' : ''}">${lista.map(([nombre, pie, ancho, alto, enlace]) =>
        `<figure${ancho && !soloAnchas ? ' class="ab-galeria__ancha"' : ''}>${img(nombre, pie, ancho || 600, alto || 1200, 'loading="lazy"')}<figcaption>${enlace ? `<a href="${enlace}" rel="noopener">${pie}</a>` : pie}</figcaption></figure>`).join('')}</div>`
}

// ── Página de servicio ──────────────────────────────────────────────────

function paginaServicio(s, idioma) {
    return `        <section class="ab-portada ab-portada--interior">
            <div class="ab-ancho">
                ${migas(s.migas)}
                <h1>${s.h1}</h1>
                <p class="ab-respuesta">${s.respuesta}</p>
                <div class="ab-portada__acciones">
                    <a class="ab-boton" href="${whatsapp(s.mensaje)}" data-evento="whatsapp">${iconoWhatsapp}${T[idioma].cta}</a>
                    <a class="ab-enlace" href="#casos">Ver proyectos de este tipo</a>
                </div>
            </div>
        </section>
        <section class="ab-seccion ab-seccion--blanca">
            <div class="ab-ancho ab-dos">
                <h2>${s.incluye.titulo}</h2>
                <ul class="ab-lista">${s.incluye.lista.map(([n, t]) => `<li><h3>${n}</h3><p>${t}</p></li>`).join('')}</ul>
            </div>
        </section>
        <section class="ab-seccion">
            <div class="ab-ancho ab-dos">
                <h2>${s.conviene.titulo}</h2>
                <div class="ab-prosa">
                    ${s.conviene.parrafos.map(p => `<p>${p}</p>`).join('\n                    ')}
                    <ul>${s.conviene.lista.map(x => `<li>${x}</li>`).join('')}</ul>
                    ${(s.conviene.cierre || []).map(p => `<p>${p}</p>`).join('\n                    ')}
                </div>
            </div>
        </section>
        <section id="casos" class="ab-seccion ab-seccion--blanca">
            <div class="ab-ancho">
                ${cabezaSeccion(s.casos.titulo, s.casos.bajada)}
                <div class="ab-casos">${s.casos.lista.map(c => tarjetaCaso(c, { rotuloA: 'Antes', rotuloB: 'Hoy' })).join('')}
                </div>
            </div>
        </section>
${s.muestra ? `        <section class="ab-seccion">
            <div class="ab-ancho">
                ${cabezaSeccion(s.muestra.titulo, s.muestra.bajada)}
                ${galeria(s.muestra.lista)}
            </div>
        </section>
` : ''}        <section class="ab-seccion${s.muestra ? ' ab-seccion--blanca' : ''}">
            <div class="ab-ancho ab-dos">
                <h2>${s.precio.titulo}</h2>
                <div class="ab-prosa">${s.precio.parrafos.map(p => `<p>${p}</p>`).join('')}</div>
            </div>
        </section>
${seccionPreguntas({ id: 'preguntas', titulo: 'Preguntas frecuentes', lista: s.preguntas }, !s.muestra)}
${contacto(idioma, { mensaje: s.mensaje, titulo: s.cierre })}`
}

// ── Página de proyecto ──────────────────────────────────────────────────

function paginaProyecto(p, idioma) {
    return `        <section class="ab-portada ab-portada--interior">
            <div class="ab-ancho">
                ${migas(p.migas)}
                <h1>${p.h1}</h1>
                <p class="ab-respuesta">${p.respuesta}</p>
            </div>
        </section>
        <section class="ab-seccion ab-seccion--pegada">
            <div class="ab-ancho ab-antes-hoy">
                <div class="ab-antes-hoy__a">
                    <h3><span class="ab-letra ab-letra--a" aria-hidden="true">A</span>${p.antes.titulo}</h3>
                    <ul>${p.antes.lista.map(x => `<li>${x}</li>`).join('')}</ul>
                </div>
                <div class="ab-antes-hoy__b">
                    <h3><span class="ab-letra ab-letra--b" aria-hidden="true">B</span>${p.hoy.titulo}</h3>
                    <ul>${p.hoy.lista.map(x => `<li>${x}</li>`).join('')}</ul>
                </div>
            </div>
        </section>
        <section class="ab-seccion ab-seccion--blanca">
            <div class="ab-ancho ab-dos">
                <h2>Ficha del proyecto</h2>
                <dl class="ab-ficha">${p.ficha.map(([dt, dd]) => `<div><dt>${dt}</dt><dd>${dd}</dd></div>`).join('')}</dl>
            </div>
        </section>
        <section class="ab-seccion">
            <div class="ab-ancho ab-dos">
                <h2>Lo que construí</h2>
                <ul class="ab-lista">${p.construi.map(([n, t]) => `<li><h3>${n}</h3><p>${t}</p></li>`).join('')}</ul>
            </div>
        </section>
        <section class="ab-seccion ab-seccion--blanca">
            <div class="ab-ancho">
                ${cabezaSeccion('Así se ve', p.galeria.bajada)}
                ${galeria(p.galeria.lista)}
            </div>
        </section>
${contacto(idioma, { mensaje: p.mensaje, titulo: p.cierre })}`
}

module.exports = { portada, ruta, clientes, servicios, proyectos, pasos, sobre, seccionPreguntas, paginaServicio, paginaProyecto }
