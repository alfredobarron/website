// Plantilla común de alfredobarron.com: cabeza del documento, encabezado,
// pie y las piezas que se repiten (contacto, preguntas, migas). La usa
// ../construir.js; el contenido de cada página vive en ./paginas-*.js.

const mono = require('../monograma.json')

const ORIGEN = 'https://alfredobarron.com'
// ID de medición de Google Analytics 4 (propiedad 424908612).
const ANALITICA = 'G-H03GCQWQ13'
const VERSION = '20261113e'
const TELEFONO = '+52 81 1897 7886'
const CORREO = 'alfredobarronc@gmail.com'

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const whatsapp = mensaje => `https://wa.me/528118977886?text=${encodeURIComponent(mensaje)}`

const T = {
    es: {
        html: 'es-MX',
        og: 'es_MX',
        inicio: '/',
        saltar: 'Ir al contenido',
        nav: [
            ['/#servicios', 'Servicios'],
            ['/#proyectos', 'Proyectos'],
            ['/#como-trabajo', 'Cómo trabajo'],
            ['/#sobre-mi', 'Sobre mí'],
        ],
        menu: 'Menú',
        otroIdioma: ['/en/', 'English', 'en'],
        cta: 'Cotizar por WhatsApp',
        mensaje: 'Hola Alfredo, quiero cotizar un proyecto.',
        pie: {
            frase: 'Software a la medida, apps móviles y sitios web. Monterrey, Nuevo León.',
            servicios: 'Servicios',
            proyectos: 'Proyectos',
            contacto: 'Contacto',
            derechos: 'Alfredo Barrón. Todos los derechos reservados.',
            hecho: 'Hecho en Monterrey.',
        },
        contacto: {
            titulo: 'Cuéntame dónde está tu negocio hoy',
            bajada: 'Escríbeme qué necesitas y a dónde quieres llegar. La primera llamada no tiene costo y sales de ella con los siguientes pasos.',
            correo: 'Escribir un correo',
            datos: [['WhatsApp y teléfono', TELEFONO], ['Correo', CORREO], ['Ubicación', 'Monterrey, Nuevo León, México']],
        },
    },
    en: {
        html: 'en',
        og: 'en_US',
        inicio: '/en/',
        saltar: 'Skip to content',
        nav: [
            ['/en/#services', 'Services'],
            ['/en/#work', 'Work'],
            ['/en/#process', 'How I work'],
            ['/en/#about', 'About'],
        ],
        menu: 'Menu',
        otroIdioma: ['/', 'Español', 'es-MX'],
        cta: 'Message me on WhatsApp',
        mensaje: 'Hi Alfredo, I would like a quote for a project.',
        pie: {
            frase: 'Custom software, mobile apps and websites. Monterrey, Mexico.',
            servicios: 'Services',
            proyectos: 'Work',
            contacto: 'Contact',
            derechos: 'Alfredo Barrón. All rights reserved.',
            hecho: 'Made in Monterrey.',
        },
        contacto: {
            titulo: 'Tell me where your business is today',
            bajada: 'Write to me about what you need and where you want to get. The first call is free and you leave it with clear next steps.',
            correo: 'Send an email',
            datos: [['WhatsApp and phone', TELEFONO], ['Email', CORREO], ['Location', 'Monterrey, Nuevo León, Mexico']],
        },
    },
}

const simbolo = `<svg viewBox="0 0 ${mono.w} ${mono.h}" aria-hidden="true"><path d="${mono.d}" fill-rule="evenodd"/></svg>`

const iconoWhatsapp = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24ZM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.47-.01Z"/></svg>'

// Persona, negocio y sitio: van en todas las páginas con los mismos @id para
// que los buscadores (y los modelos) los lean como una sola entidad.
function entidad(idioma) {
    const es = idioma === 'es'
    return [
        {
            '@type': 'WebSite',
            '@id': `${ORIGEN}/#sitio`,
            url: `${ORIGEN}/`,
            name: 'Alfredo Barrón',
            inLanguage: ['es-MX', 'en'],
            publisher: { '@id': `${ORIGEN}/#negocio` },
        },
        {
            '@type': 'ProfessionalService',
            '@id': `${ORIGEN}/#negocio`,
            name: es ? 'Alfredo Barrón, desarrollo de software' : 'Alfredo Barrón, software development',
            url: `${ORIGEN}/`,
            logo: `${ORIGEN}/img/marca/logo-512.png`,
            image: `${ORIGEN}/img/og/inicio-${idioma}.png`,
            description: es
                ? 'Desarrollo de software a la medida, apps móviles para iOS y Android, sitios web y consultoría técnica para empresas, desde Monterrey para todo México y Estados Unidos.'
                : 'Custom software, iOS and Android apps, websites and technical consulting for businesses, from Monterrey for Mexico and the United States.',
            telephone: '+528118977886',
            email: CORREO,
            priceRange: '$$',
            address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' },
            areaServed: [{ '@type': 'Country', name: 'México' }, { '@type': 'Country', name: 'United States' }],
            knowsLanguage: ['es', 'en'],
            founder: { '@id': `${ORIGEN}/#persona` },
        },
        {
            '@type': 'Person',
            '@id': `${ORIGEN}/#persona`,
            name: 'Alfredo Barrón',
            jobTitle: es ? 'Arquitecto de software' : 'Software architect',
            url: `${ORIGEN}/`,
            image: `${ORIGEN}/img/marca/alfredo-barron.webp`,
            worksFor: { '@id': `${ORIGEN}/#negocio` },
            address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' },
            knowsAbout: ['Laravel', 'Vue.js', 'React Native', 'Expo', 'Python', 'Amazon Web Services', es ? 'Inteligencia artificial' : 'Artificial intelligence', es ? 'Arquitectura de software' : 'Software architecture'],
            sameAs: ['https://github.com/alfredobarron', 'https://gitlab.com/alfredobarron', 'https://www.linkedin.com/in/alfredobarron', 'https://alfredobarron.medium.com/', 'https://www.google.com/maps?cid=16262215527281852045'],
        },
    ]
}

function migasLd(migas) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: migas.map(([url, nombre], i) => ({ '@type': 'ListItem', position: i + 1, name: nombre, item: ORIGEN + url })),
    }
}

function preguntasLd(preguntas) {
    return {
        '@type': 'FAQPage',
        mainEntity: preguntas.map(([p, r]) => ({ '@type': 'Question', name: p, acceptedAnswer: { '@type': 'Answer', text: [].concat(r).join(' ') } })),
    }
}

function migas(lista) {
    return `<nav aria-label="Ruta"><ol class="ab-migas">${lista.map(([url, nombre], i) =>
        i === lista.length - 1 ? `<li aria-current="page">${esc(nombre)}</li>` : `<li><a href="${url}">${esc(nombre)}</a></li>`).join('')}</ol></nav>`
}

function preguntas(lista) {
    return `<div class="ab-preguntas">${lista.map(([p, r]) =>
        `<details><summary>${esc(p)}</summary><div>${[].concat(r).map(x => `<p>${x}</p>`).join('')}</div></details>`).join('')}</div>`
}

function contacto(idioma, opciones = {}) {
    const t = T[idioma], c = t.contacto
    const mensaje = opciones.mensaje || t.mensaje
    const filas = c.datos.map(([rotulo, valor]) => {
        const liga = valor === TELEFONO ? whatsapp(mensaje) : valor === CORREO ? `mailto:${CORREO}` : null
        return `<li><span>${rotulo}</span>${liga ? `<a href="${liga}">${valor}</a>` : `<strong>${valor}</strong>`}</li>`
    }).join('')
    return `<section id="${idioma === 'es' ? 'contacto' : 'contact'}" class="ab-seccion">
        <div class="ab-ancho">
            <div class="ab-contacto">
                <div>
                    <h2>${opciones.titulo || c.titulo}</h2>
                    <p class="ab-contacto__bajada">${opciones.bajada || c.bajada}</p>
                    <div class="ab-contacto__acciones">
                        <a class="ab-boton ab-boton--claro" href="${whatsapp(mensaje)}" data-evento="whatsapp">${iconoWhatsapp}${t.cta}</a>
                        <a class="ab-boton ab-boton--linea" href="mailto:${CORREO}" data-evento="correo">${c.correo}</a>
                    </div>
                </div>
                <ul class="ab-contacto__datos">${filas}</ul>
            </div>
        </div>
    </section>`
}

function cabeza(idioma, actual) {
    const t = T[idioma]
    const enlaces = t.nav.map(([url, nombre]) => `<a href="${url}"${actual === url ? ' aria-current="page"' : ''}>${nombre}</a>`).join('')
    const [urlOtro, nombreOtro, langOtro] = t.otroIdioma
    return `<a class="ab-saltar" href="#contenido">${t.saltar}</a>
    <header class="ab-cabeza">
        <div class="ab-ancho ab-cabeza__fila">
            <a class="ab-logo" href="${t.inicio}" aria-label="Alfredo Barrón, ${idioma === 'es' ? 'inicio' : 'home'}">${simbolo}<span>Alfredo Barrón</span></a>
            <nav class="ab-nav" aria-label="${idioma === 'es' ? 'Principal' : 'Main'}">
                ${enlaces}
                <a class="ab-idioma" href="${urlOtro}" hreflang="${langOtro}" lang="${langOtro}">${nombreOtro}</a>
                <a class="ab-boton ab-boton--chico" href="${whatsapp(t.mensaje)}" data-evento="whatsapp">${t.cta}</a>
            </nav>
            <details class="ab-menu">
                <summary>${t.menu}</summary>
                <div class="ab-menu__lista">
                    ${enlaces}
                    <a href="${urlOtro}" hreflang="${langOtro}" lang="${langOtro}">${nombreOtro}</a>
                    <a class="ab-boton" href="${whatsapp(t.mensaje)}" data-evento="whatsapp">${iconoWhatsapp}${t.cta}</a>
                </div>
            </details>
        </div>
    </header>`
}

function pie(idioma, columnas) {
    const t = T[idioma], p = t.pie
    const col = (titulo, enlaces) => `<div><h2>${titulo}</h2><ul>${enlaces.map(([url, nombre, fuera]) => `<li><a href="${url}"${fuera ? ' target="_blank" rel="noopener"' : ''}>${nombre}</a></li>`).join('')}</ul></div>`
    return `<footer class="ab-pie">
        <div class="ab-ancho">
            <div class="ab-pie__fila">
                <div class="ab-pie__marca">
                    <a class="ab-logo" href="${t.inicio}">${simbolo}<span>Alfredo Barrón</span></a>
                    <p>${p.frase}</p>
                </div>
                ${col(p.servicios, columnas.servicios)}
                ${col(p.proyectos, columnas.proyectos)}
                ${col(p.contacto, [
                    [whatsapp(t.mensaje), 'WhatsApp'],
                    [`mailto:${CORREO}`, CORREO],
                    ['https://www.linkedin.com/in/alfredobarron', 'LinkedIn', true],
                    ['https://github.com/alfredobarron', 'GitHub', true],
                ])}
            </div>
            <div class="ab-pie__legal">
                <p>© ${new Date().getFullYear()} ${p.derechos}</p>
                <p>${p.hecho}</p>
            </div>
        </div>
    </footer>`
}

// Las ligas que salen del sitio (WhatsApp, sitios de clientes, perfiles) abren en otra pestaña,
// para que quien las sigue no pierda la página desde la que iba a escribir.
const fuera = html => html.replace(/<a\b([^>]*\bhref="https?:\/\/(?!alfredobarron\.com)[^"]*"[^>]*)>/g, (_, attrs) => {
    if (!/\btarget=/.test(attrs)) attrs += ' target="_blank"'
    if (!/\brel=/.test(attrs)) attrs += ' rel="noopener"'
    return `<a${attrs}>`
})

// pagina.alternos = { 'es-MX': '/ruta/', en: '/en/ruta/' } (opcional)
function documento(pagina) {
    const { idioma, ruta, titulo, descripcion, cuerpo, columnas } = pagina
    const t = T[idioma]
    const url = ORIGEN + ruta
    const imagen = `${ORIGEN}/img/og/${pagina.og || `inicio-${idioma}`}.png`
    const alternos = pagina.alternos
        ? Object.entries(pagina.alternos).map(([l, r]) => `<link rel="alternate" hreflang="${l}" href="${ORIGEN}${r}">`).join('\n    ') +
          `\n    <link rel="alternate" hreflang="x-default" href="${ORIGEN}${pagina.alternos['es-MX']}">`
        : ''
    const ld = { '@context': 'https://schema.org', '@graph': [...entidad(idioma), ...(pagina.ld || [])] }
    return `<!doctype html>
<html lang="${t.html}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(titulo)}</title>
    <meta name="description" content="${esc(descripcion)}">
    <meta name="robots" content="${pagina.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1'}">
    <meta name="author" content="Alfredo Barrón">
    <link rel="canonical" href="${url}">
    ${alternos}

    <meta property="og:site_name" content="Alfredo Barrón">
    <meta property="og:type" content="${pagina.tipoOg || 'website'}">
    <meta property="og:locale" content="${t.og}">
    <meta property="og:title" content="${esc(pagina.tituloOg || titulo)}">
    <meta property="og:description" content="${esc(descripcion)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${imagen}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${esc(pagina.altOg || pagina.tituloOg || titulo)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(pagina.tituloOg || titulo)}">
    <meta name="twitter:description" content="${esc(descripcion)}">
    <meta name="twitter:image" content="${imagen}">

    <link rel="icon" href="/favicon.ico" sizes="48x48">
    <link rel="icon" type="image/svg+xml" href="/img/marca/favicon.svg">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/marca/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.webmanifest">
    <meta name="theme-color" content="#F2F4F0">

    <link rel="preload" href="/fonts/Funnel/FunnelDisplay-Variable-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/Funnel/FunnelSans-Variable-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link href="/css/sitio.css?v=${VERSION}" rel="stylesheet">

    <script type="application/ld+json">${JSON.stringify(ld)}</script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=${ANALITICA}"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments) } gtag('js', new Date()); gtag('config', '${ANALITICA}')</script>
</head>
<body>
    ${fuera(cabeza(idioma, pagina.actual))}
    <main id="contenido">
${fuera(cuerpo)}
    </main>
    ${fuera(pie(idioma, columnas))}
    <script src="/js/sitio.js?v=${VERSION}" defer></script>
</body>
</html>
`
}

module.exports = { ORIGEN, TELEFONO, CORREO, T, esc, whatsapp, simbolo, iconoWhatsapp, migas, migasLd, preguntas, preguntasLd, contacto, documento }
