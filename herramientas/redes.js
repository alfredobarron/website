// Imágenes para los perfiles externos (LinkedIn, GitHub, GitLab, Medium) y el
// Perfil de Empresa de Google, en docs/marca/redes/. No se publican con el
// sitio: se suben a mano a cada perfil (docs/MARKETING.md §4).
// Uso: cd herramientas && node redes.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { chromium } = require('playwright')
const mono = require('./monograma.json')
const es = require('./sitio/datos-es')

const RAIZ = path.join(__dirname, '..')
const SALIDA = path.join(RAIZ, 'docs/marca/redes')
const fuente = n => 'data:font/woff2;base64,' + fs.readFileSync(path.join(RAIZ, 'fonts/Funnel', n)).toString('base64')

const base = `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family: FD; src: url(${fuente('FunnelDisplay-Variable-latin.woff2')}); font-weight: 300 800; }
@font-face { font-family: FS; src: url(${fuente('FunnelSans-Variable-latin.woff2')}); font-weight: 300 800; }
* { box-sizing: border-box; margin: 0; }
body { background: #0E3B2E; color: #fff; font-family: FS; }
.logo { display: flex; align-items: center; gap: .5em; font: 600 1em/1 FD; letter-spacing: -.015em; }
.logo svg { width: 2em; fill: #fff; }
h1 { font-family: FD; font-weight: 700; line-height: 1.02; letter-spacing: -.035em; text-wrap: balance; }
.apoyo { color: #CFE3DA; }
.tramo { display: flex; align-items: center; }
.p { width: 2.2em; height: 2.2em; border-radius: 50%; display: grid; place-items: center; font: 700 1em/1 FD; }
.a { box-shadow: inset 0 0 0 .1em rgba(255,255,255,.45); color: #CFE3DA; }
.l { width: 5em; height: .1em; background: #19C37D; margin: 0 .35em; }
.b { background: #19C37D; color: #0A2A21; }
</style>`
const logo = `<div class="logo"><svg viewBox="0 0 ${mono.w} ${mono.h}"><path d="${mono.d}" fill-rule="evenodd"/></svg>Alfredo Barrón</div>`
const tramo = `<span class="tramo"><span class="p a">A</span><span class="l"></span><span class="p b">B</span></span>`

// Portada de LinkedIn (1584 × 396). La foto de perfil tapa la esquina
// inferior izquierda, así que el texto va a la derecha.
const linkedin = `${base}<style>
body { width: 1584px; height: 396px; padding: 0 96px 0 560px; display: grid; align-content: center; gap: 22px; }
h1 { font-size: 58px; max-width: 900px; }
.fila { display: flex; justify-content: space-between; align-items: center; font-size: 24px; }
.tramo { font-size: 19px; }
</style>
<h1>Software a la medida que lleva tu negocio de A a B</h1>
<div class="fila"><span class="apoyo">Sistemas web, apps móviles y sitios web · alfredobarron.com</span>${tramo}</div>`

// Portada del Perfil de Empresa de Google (16:9). Google recorta los bordes:
// todo va centrado y con margen.
const google = `${base}<style>
body { width: 1280px; height: 720px; padding: 110px 150px; display: grid; grid-template-rows: auto 1fr auto; }
.logo { font-size: 30px; }
h1 { align-self: center; font-size: 76px; max-width: 900px; }
.fila { display: flex; justify-content: space-between; align-items: center; font-size: 25px; }
.tramo { font-size: 20px; }
</style>
${logo}<h1>Software a la medida, apps móviles y sitios web</h1>
<div class="fila"><span class="apoyo">Monterrey, Nuevo León · alfredobarron.com</span>${tramo}</div>`

// Fotos del perfil de Google y publicaciones (4:3): una por servicio.
const servicio = s => `${base}<style>
body { width: 1200px; height: 900px; padding: 80px; display: grid; grid-template-rows: auto 1fr auto; }
.logo { font-size: 30px; }
h1 { align-self: center; font-size: 84px; max-width: 900px; }
.fila { display: flex; justify-content: space-between; align-items: center; font-size: 27px; }
.tramo { font-size: 21px; }
</style>
${logo}<h1>${s.nombre}</h1>
<div class="fila"><span class="apoyo">Monterrey y todo México · alfredobarron.com</span>${tramo}</div>`

const laminas = [
    ['linkedin-portada-1584x396', 1584, 396, linkedin],
    ['google-perfil-portada-1280x720', 1280, 720, google],
    ...es.servicios.map(s => [`google-perfil-foto-${s.clave}-1200x900`, 1200, 900, servicio(s)]),
]

;(async () => {
    fs.mkdirSync(SALIDA, { recursive: true })
    const navegador = await chromium.launch()
    for (const [nombre, ancho, alto, html] of laminas) {
        const pagina = await navegador.newPage({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 2 })
        await pagina.setContent(html)
        await pagina.evaluate(() => document.fonts.ready)
        await pagina.screenshot({ path: path.join(SALIDA, `${nombre}.png`) })
        await pagina.close()
        console.log(nombre)
    }
    await navegador.close()
    // Logo cuadrado (GitHub, GitLab, Medium y logo del perfil de Google) y la
    // foto con el tratamiento del sitio (LinkedIn).
    await sharp(path.join(RAIZ, 'docs/marca/png/ab-avatar.png')).resize(800, 800).png().toFile(path.join(SALIDA, 'logo-cuadrado-800.png'))
    await sharp(path.join(__dirname, 'fuentes/alfredo-barron.jpg')).grayscale().jpeg({ quality: 92 }).toFile(path.join(SALIDA, 'foto-perfil-400.jpg'))
    console.log('logo-cuadrado-800', 'foto-perfil-400')
})()
