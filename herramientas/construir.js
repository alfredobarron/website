// Genera el sitio estático de alfredobarron.com en la raíz del repo: las
// páginas (HTML), sitemap.xml, robots.txt, llms.txt y manifest.webmanifest.
// El contenido vive en sitio/datos-es.js y sitio/datos-en.js; la plantilla y
// las secciones, en sitio/plantilla.js y sitio/secciones.js.
// GitHub Pages sirve los archivos tal cual: el HTML generado se commitea.
// Uso: cd herramientas && node construir.js

const fs = require('fs')
const path = require('path')
const P = require('./sitio/plantilla')
const S = require('./sitio/secciones')
const es = require('./sitio/datos-es')
const en = require('./sitio/datos-en')
const { articulos, indice } = require('./sitio/articulos-es')

const RAIZ = path.join(__dirname, '..')
const HOY = new Date().toISOString().slice(0, 10)
const escritos = []

function escribir(ruta, contenido) {
    const archivo = path.join(RAIZ, ruta.endsWith('/') ? ruta + 'index.html' : ruta)
    fs.mkdirSync(path.dirname(archivo), { recursive: true })
    fs.writeFileSync(archivo, contenido)
    escritos.push(path.relative(RAIZ, archivo))
}

// ── Inicio (es y en) ────────────────────────────────────────────────────
function inicio(d, idioma, columnas) {
    const cuerpo = [
        S.portada(d.portada, idioma),
        S.ruta(d.ruta_ab),
        S.clientes(d.clientes),
        S.servicios(d.servicios),
        S.proyectos(d.proyectos),
        S.pasos(d.pasos),
        S.sobre(d.sobre),
        d.articulos && S.articulos(d.articulos),
        S.seccionPreguntas(d.preguntas),
        P.contacto(idioma),
    ].filter(Boolean).join('\n')
    escribir(d.ruta, P.documento({ ...d, idioma, cuerpo, columnas, guion: true, ld: [P.preguntasLd(d.preguntas.lista)] }))
}
// El inicio en español lista los tres artículos más nuevos.
inicio({ ...es.inicio, articulos: { id: 'articulos', titulo: 'Artículos', bajada: indice.respuesta, lista: articulos.slice(0, 3) } }, 'es', es.columnas)
inicio(en.inicio, 'en', en.columnas)

// ── Servicios y proyectos (es y en) ─────────────────────────────────────
// Cada página existe en los dos idiomas con la misma `clave`: de ahí salen el hreflang y la
// liga del cambio de idioma.
const IDIOMAS = [['es', es, 'es-MX'], ['en', en, 'en']]
const alternosDe = (grupo, clave) => ({
    'es-MX': es[grupo].find(x => x.clave === clave).ruta,
    en: en[grupo].find(x => x.clave === clave).ruta,
})

for (const [idioma, d, lengua] of IDIOMAS) {
    const m = P.T[idioma].pagina.migas

    for (const s of d.servicios) {
        const migas = [m.inicio, m.servicios, [s.ruta, s.nombre]]
        const datos = { ...s, migas, casos: { ...s.casos, lista: s.casos.lista.map(k => d.CASOS[k]) } }
        escribir(s.ruta, P.documento({
            ...s, idioma, columnas: d.columnas, tituloOg: s.h1, alternos: alternosDe('servicios', s.clave),
            cuerpo: S.paginaServicio(datos, idioma),
            ld: [
                {
                    '@type': 'Service',
                    '@id': `${P.ORIGEN}${s.ruta}#servicio`,
                    name: s.nombre,
                    serviceType: s.tipoServicio,
                    description: s.descripcion,
                    url: P.ORIGEN + s.ruta,
                    inLanguage: lengua,
                    provider: { '@id': `${P.ORIGEN}/#negocio` },
                    areaServed: idioma === 'es'
                        ? [{ '@type': 'City', name: 'Monterrey' }, { '@type': 'Country', name: 'México' }]
                        : [{ '@type': 'Country', name: 'Mexico' }, { '@type': 'Country', name: 'United States' }],
                },
                P.migasLd(migas),
                P.preguntasLd(s.preguntas),
            ],
        }))
    }

    for (const p of d.proyectos) {
        const migas = [m.inicio, m.proyectos, [p.ruta, p.nombre]]
        escribir(p.ruta, P.documento({
            ...p, idioma, columnas: d.columnas, tituloOg: p.h1, tipoOg: 'article', alternos: alternosDe('proyectos', p.clave),
            cuerpo: S.paginaProyecto({ ...p, migas }, idioma),
            ld: [
                {
                    '@type': 'CreativeWork',
                    '@id': `${P.ORIGEN}${p.ruta}#proyecto`,
                    name: p.nombre,
                    headline: p.h1,
                    description: p.descripcion,
                    url: P.ORIGEN + p.ruta,
                    image: `${P.ORIGEN}/img/og/${p.og}.png`,
                    inLanguage: lengua,
                    creator: { '@id': `${P.ORIGEN}/#persona` },
                },
                P.migasLd(migas),
            ],
        }))
    }
}

// ── Artículos (solo en español) ─────────────────────────────────────────
{
    const m = P.T.es.pagina.migas
    const migasIndice = [m.inicio, [indice.ruta, 'Artículos']]
    escribir(indice.ruta, P.documento({
        ...indice, idioma: 'es', columnas: es.columnas, tituloOg: 'Artículos sobre software para empresas',
        cuerpo: S.paginaArticulos({ ...indice, migas: migasIndice, lista: articulos }, 'es'),
        ld: [
            { '@type': 'Blog', '@id': `${P.ORIGEN}${indice.ruta}#blog`, name: 'Artículos de Alfredo Barrón', url: P.ORIGEN + indice.ruta, inLanguage: 'es-MX', publisher: { '@id': `${P.ORIGEN}/#negocio` } },
            P.migasLd(migasIndice),
        ],
    }))
    for (const a of articulos) {
        const migas = [m.inicio, [indice.ruta, 'Artículos'], [a.ruta, a.h1]]
        // Minutos de lectura a 200 palabras por minuto, contando solo el texto del cuerpo.
        const palabras = JSON.stringify(a.cuerpo).replace(/<[^>]+>/g, ' ').split(/\s+/).length
        const datos = { ...a, migas, minutos: Math.max(1, Math.round(palabras / 200)), casos: (a.casos || []).map(k => es.CASOS[k]) }
        escribir(a.ruta, P.documento({
            ...a, idioma: 'es', columnas: es.columnas, tituloOg: a.h1, tipoOg: 'article',
            cuerpo: S.paginaArticulo(datos, 'es'),
            ld: [
                {
                    '@type': 'BlogPosting',
                    '@id': `${P.ORIGEN}${a.ruta}#articulo`,
                    headline: a.h1,
                    description: a.descripcion,
                    url: P.ORIGEN + a.ruta,
                    mainEntityOfPage: P.ORIGEN + a.ruta,
                    image: `${P.ORIGEN}/img/og/${a.og}.png`,
                    datePublished: a.fecha,
                    dateModified: a.actualizado || a.fecha,
                    inLanguage: 'es-MX',
                    author: { '@id': `${P.ORIGEN}/#persona` },
                    publisher: { '@id': `${P.ORIGEN}/#negocio` },
                    isPartOf: { '@id': `${P.ORIGEN}${indice.ruta}#blog` },
                },
                P.migasLd(migas),
                ...(a.preguntas ? [P.preguntasLd(a.preguntas)] : []),
            ],
        }))
    }
}

// ── 404 ─────────────────────────────────────────────────────────────────
const n = es.noExiste
escribir(n.ruta, P.documento({
    ...n, idioma: 'es', columnas: es.columnas, noindex: true,
    cuerpo: `        <section class="ab-vacio"><div class="ab-ancho"><h1>${n.h1}</h1><p>${n.texto}</p><a class="ab-boton" href="/">${n.boton}</a></div></section>`,
}))

// ── sitemap.xml ─────────────────────────────────────────────────────────
const hreflang = a => [
    `<xhtml:link rel="alternate" hreflang="es-MX" href="${P.ORIGEN}${a['es-MX']}"/>`,
    `<xhtml:link rel="alternate" hreflang="en" href="${P.ORIGEN}${a.en}"/>`,
    `<xhtml:link rel="alternate" hreflang="x-default" href="${P.ORIGEN}${a['es-MX']}"/>`,
]
const pares = [
    es.inicio.alternos,
    ...es.servicios.map(s => alternosDe('servicios', s.clave)),
    ...es.proyectos.map(p => alternosDe('proyectos', p.clave)),
]
const urls = [
    ...pares.flatMap(a => [[a['es-MX'], hreflang(a)], [a.en, hreflang(a)]]),
    [indice.ruta], ...articulos.map(a => [a.ruta, null, a.actualizado || a.fecha]),
    ['/reportr/privacidad.html'],
]
escribir('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(([ruta, alternos, fecha]) => `    <url>
        <loc>${P.ORIGEN}${ruta}</loc>
        <lastmod>${fecha || (ruta === '/reportr/privacidad.html' ? '2026-11-04' : HOY)}</lastmod>${alternos ? '\n        ' + alternos.join('\n        ') : ''}
    </url>`).join('\n')}
</urlset>
`)

// ── robots.txt ──────────────────────────────────────────────────────────
// Se nombran los rastreadores de los buscadores con IA para dejar explícito
// que pueden leer y citar el sitio (GEO).
escribir('robots.txt', `User-agent: *
Allow: /

User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
Allow: /

Sitemap: ${P.ORIGEN}/sitemap.xml
`)

// ── llms.txt ────────────────────────────────────────────────────────────
const i = es.inicio
escribir('llms.txt', `# Alfredo Barrón

> Alfredo Barrón es arquitecto de software y desarrollador full stack en Monterrey, Nuevo León, México. Diseña, construye y opera software a la medida, apps móviles para iOS y Android y sitios web para empresas de todo México y Estados Unidos, con más de 15 años de experiencia. Es fundador de Tráeme (app de entregas a domicilio) y creador de Privada (software para fraccionamientos).

## Servicios

${es.servicios.map(s => `- [${s.nombre}](${P.ORIGEN}${s.ruta}): ${s.respuesta}`).join('\n')}

## Proyectos

${es.proyectos.map(p => `- [${p.nombre}](${P.ORIGEN}${p.ruta}): ${p.respuesta}`).join('\n')}

## Artículos

${articulos.map(a => `- [${a.h1}](${P.ORIGEN}${a.ruta}): ${a.respuesta}`).join('\n')}

## In English

${en.servicios.map(x => `- [${x.nombre}](${P.ORIGEN}${x.ruta}): ${x.respuesta}`).join('\n')}
${en.proyectos.map(x => `- [${x.nombre}](${P.ORIGEN}${x.ruta}): ${x.respuesta}`).join('\n')}

## Cómo trabaja

${i.pasos.lista.map(([nombre, texto], k) => `${k + 1}. **${nombre}.** ${texto}`).join('\n')}

## Preguntas frecuentes

${i.preguntas.lista.map(([p, r]) => `- **${p}** ${r}`).join('\n')}

## Datos clave

- Ubicación: Monterrey, Nuevo León, México. Trabaja de forma remota con empresas de todo México y Estados Unidos, y en persona en el área metropolitana de Monterrey.
- Idiomas: español e inglés.
- Tecnologías: Laravel (PHP), Vue, React Native con Expo, Python con FastAPI y Amazon Web Services.
- Forma de cotizar: precio fijo por etapas, después de una primera llamada sin costo.

## Contacto

- WhatsApp y teléfono: ${P.TELEFONO}
- Correo: ${P.CORREO}
- Sitio: ${P.ORIGEN}/ (español) y ${P.ORIGEN}/en/ (inglés)
- LinkedIn: https://www.linkedin.com/in/alfredobarron
- GitHub: https://github.com/alfredobarron
`)

// ── manifest.webmanifest ────────────────────────────────────────────────
escribir('manifest.webmanifest', JSON.stringify({
    name: 'Alfredo Barrón',
    short_name: 'Alfredo Barrón',
    description: 'Software a la medida, apps móviles y sitios web. Monterrey, México.',
    start_url: '/',
    display: 'browser',
    background_color: '#F2F4F0',
    theme_color: '#0E3B2E',
    icons: [
        { src: '/img/marca/icono-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/img/marca/icono-512.png', sizes: '512x512', type: 'image/png' },
    ],
}, null, 4) + '\n')

console.log(escritos.join('\n'))
