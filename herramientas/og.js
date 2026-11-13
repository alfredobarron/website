// Genera las imágenes para compartir (1200 × 630) de cada página en img/og/.
// El título sale de sitio/datos-*.js; la composición es la de la marca: el
// logo, el titular y el tramo de A a B.
// Uso: cd herramientas && node og.js

const fs = require('fs')
const path = require('path')
const { chromium } = require('playwright')
const mono = require('./monograma.json')
const es = require('./sitio/datos-es')
const en = require('./sitio/datos-en')

const RAIZ = path.join(__dirname, '..')
const SALIDA = path.join(RAIZ, 'img/og')
const fuente = n => 'data:font/woff2;base64,' + fs.readFileSync(path.join(RAIZ, 'fonts/Funnel', n)).toString('base64')

const laminas = [
    ['inicio-es', 'Software a la medida que lleva tu negocio de A a B', 'Sistemas web, apps móviles y sitios web. Monterrey, México'],
    ['inicio-en', 'Custom software that takes your business from A to B', 'Web platforms, mobile apps and websites. Monterrey, Mexico'],
    ...es.servicios.map(s => [s.og, s.h1, 'Alfredo Barrón, arquitecto de software en Monterrey']),
    ...es.proyectos.map(p => [p.og, p.h1, 'Un proyecto de Alfredo Barrón']),
]

const html = (titulo, pie) => `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family: FD; src: url(${fuente('FunnelDisplay-Variable-latin.woff2')}); font-weight: 300 800; }
@font-face { font-family: FS; src: url(${fuente('FunnelSans-Variable-latin.woff2')}); font-weight: 300 800; }
* { box-sizing: border-box; margin: 0; }
body { width: 1200px; height: 630px; background: #0E3B2E; color: #fff; font-family: FS; padding: 64px 72px; display: grid; grid-template-rows: auto 1fr auto; }
.logo { display: flex; align-items: center; gap: 16px; font: 600 30px/1 FD; letter-spacing: -.015em; }
.logo svg { width: 62px; fill: #fff; }
h1 { align-self: center; font: 700 ${titulo.length > 52 ? 62 : 74}px/1.02 FD; letter-spacing: -.035em; max-width: 940px; text-wrap: balance; }
.pie { display: flex; justify-content: space-between; align-items: center; font-size: 25px; color: #CFE3DA; }
.tramo { display: flex; align-items: center; }
.p { width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; font: 700 23px/1 FD; }
.a { box-shadow: inset 0 0 0 2.5px rgba(255,255,255,.45); color: #CFE3DA; }
.l { width: 120px; height: 2.5px; background: #19C37D; margin: 0 8px; }
.b { background: #19C37D; color: #0A2A21; }
</style>
<div class="logo"><svg viewBox="0 0 ${mono.w} ${mono.h}"><path d="${mono.d}" fill-rule="evenodd"/></svg>Alfredo Barrón</div>
<h1>${titulo}</h1>
<div class="pie"><span>${pie}</span><span class="tramo"><span class="p a">A</span><span class="l"></span><span class="p b">B</span></span></div>`

;(async () => {
    fs.mkdirSync(SALIDA, { recursive: true })
    const navegador = await chromium.launch()
    const pagina = await navegador.newPage({ viewport: { width: 1200, height: 630 } })
    for (const [nombre, titulo, pie] of laminas) {
        await pagina.setContent(html(titulo, pie))
        await pagina.evaluate(() => document.fonts.ready)
        await pagina.screenshot({ path: path.join(SALIDA, `${nombre}.png`) })
        console.log(nombre)
    }
    await navegador.close()
})()
