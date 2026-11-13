// Genera los archivos de la marca de Alfredo Barrón (docs/MARCA.md §2):
// el monograma «ab» vectorizado del original (fuentes/ab-original.png), el
// logo horizontal con el nombre en Funnel Display seminegrita convertido a
// trazos, el avatar para redes y los íconos del sitio.
// La instancia estática de la fuente sale de la variable de Google Fonts con
// `fonttools varLib.instancer FunnelDisplay[wght].ttf wght=600`.
// Uso: cd herramientas && node marca.js

const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')
const sharp = require('sharp')
const potrace = require('potrace')
const opentype = require('opentype.js')

const RAIZ = path.join(__dirname, '..')
const DOCS = path.join(RAIZ, 'docs/marca')
const SITIO = path.join(RAIZ, 'img/marca')
const C = { pino: '#0E3B2E', blanco: '#FFFFFF', jade: '#19C37D' }

const svg = (w, h, inner, vb) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${vb || `0 0 ${w} ${h}`}">${inner}</svg>\n`

function trazar(buf) {
    return new Promise((ok, mal) => potrace.trace(buf, { turdSize: 50, optTolerance: 0.6, threshold: 128 }, (e, s) => e ? mal(e) : ok(s)))
}

// Redondea las coordenadas del trazo a un decimal: el archivo baja de 56 KB a ~2 KB.
const compacto = d => d.replace(/-?\d+\.\d+/g, n => String(Math.round(parseFloat(n) * 10) / 10)).replace(/\s+/g, ' ').replace(/ ?, ?/g, ' ').trim()

async function main() {
    for (const d of [DOCS, path.join(DOCS, 'png'), SITIO]) fs.mkdirSync(d, { recursive: true })

    // ── Símbolo ─────────────────────────────────────────────────────────
    const recorte = await sharp(path.join(__dirname, 'fuentes/ab-original.png'))
        .flatten({ background: '#fff' }).trim().png().toBuffer({ resolveWithObject: true })
    const S = { w: recorte.info.width, h: recorte.info.height }
    const trazo = await trazar(recorte.data)
    const D = compacto(trazo.match(/ d="([^"]+)"/)[1])
    const simbolo = color => `<path d="${D}" fill="${color}" fill-rule="evenodd"/>`
    const simboloSvg = color => svg(S.w / 10, S.h / 10, simbolo(color), `0 0 ${S.w} ${S.h}`)

    // ── Nombre ──────────────────────────────────────────────────────────
    const fuente = opentype.loadSync(path.join(__dirname, 'fuentes/FunnelDisplay-SemiBold.ttf'))
    const p = fuente.getPath('Alfredo Barrón', 0, 0, 100, { letterSpacing: -0.015 })
    const bb = p.getBoundingBox()
    const alta = fuente.getPath('A', 0, 0, 100).getBoundingBox()
    const mayus = -alta.y1                                  // alto de la mayúscula

    // Horizontal: el símbolo mide 1.5 veces la mayúscula y va centrado con
    // ella; la separación es media mayúscula.
    function horizontal(color) {
        const sh = mayus * 1.5, k = sh / S.h, sw = S.w * k
        const sep = mayus * 0.5
        const arriba = Math.max(sh, mayus + Math.max(0, -bb.y1 - mayus)) // el acento de la ó sube
        const base = (arriba + mayus) / 2                               // línea base del nombre
        const sy = base - mayus / 2 - sh / 2
        const tx = sw + sep - bb.x1
        const W = Math.ceil(tx + bb.x2), H = Math.ceil(Math.max(arriba, base + bb.y2))
        return svg(W, H,
            `<g transform="translate(0 ${sy.toFixed(2)}) scale(${k.toFixed(5)})">${simbolo(color)}</g>` +
            `<path transform="translate(${tx.toFixed(2)} ${base.toFixed(2)})" d="${p.toPathData(1)}" fill="${color}"/>`)
    }

    // Avatar: cuadro completo pino, símbolo blanco al 58 % del ancho (redes lo recortan en círculo).
    function avatar(lado, radio) {
        const k = lado * 0.58 / S.w
        const x = (lado - S.w * k) / 2, y = (lado - S.h * k) / 2
        return svg(lado, lado,
            `<rect width="${lado}" height="${lado}" rx="${radio}" fill="${C.pino}"/>` +
            `<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${k.toFixed(5)})">${simbolo(C.blanco)}</g>`)
    }

    const archivos = {
        'ab-simbolo.svg': simboloSvg(C.pino),
        'ab-simbolo-blanco.svg': simboloSvg(C.blanco),
        'ab-horizontal.svg': horizontal(C.pino),
        'ab-horizontal-blanco.svg': horizontal(C.blanco),
        'ab-avatar.svg': avatar(512, 0),
    }
    for (const [n, s] of Object.entries(archivos)) fs.writeFileSync(path.join(DOCS, n), s)

    const png = async (origen, destino, ancho, fondo) => {
        let img = sharp(Buffer.from(origen), { density: 600 }).resize({ width: ancho })
        if (fondo) img = img.flatten({ background: fondo })
        await img.png().toFile(destino)
    }
    await png(archivos['ab-simbolo.svg'], path.join(DOCS, 'png/ab-simbolo.png'), 1024)
    await png(archivos['ab-simbolo-blanco.svg'], path.join(DOCS, 'png/ab-simbolo-blanco.png'), 1024)
    await png(archivos['ab-horizontal.svg'], path.join(DOCS, 'png/ab-horizontal.png'), 1600)
    await png(archivos['ab-horizontal-blanco.svg'], path.join(DOCS, 'png/ab-horizontal-blanco.png'), 1600)
    await png(archivos['ab-avatar.svg'], path.join(DOCS, 'png/ab-avatar.png'), 1024)

    // ── Sitio ───────────────────────────────────────────────────────────
    // El favicon lleva las esquinas redondeadas; los íconos de la PWA y el de
    // Apple van a cuadro completo (el sistema recorta).
    fs.writeFileSync(path.join(SITIO, 'favicon.svg'), avatar(64, 14))
    fs.writeFileSync(path.join(SITIO, 'ab-simbolo.svg'), archivos['ab-simbolo.svg'])
    await png(avatar(512, 0), path.join(SITIO, 'apple-touch-icon.png'), 180)
    await png(avatar(512, 0), path.join(SITIO, 'icono-192.png'), 192)
    await png(avatar(512, 0), path.join(SITIO, 'icono-512.png'), 512)
    await png(avatar(512, 0), path.join(SITIO, 'logo-512.png'), 512)
    const tmp = path.join(SITIO, '_48.png')
    await png(avatar(64, 14), tmp, 48)
    execFileSync('magick', [tmp, path.join(RAIZ, 'favicon.ico')])
    fs.unlinkSync(tmp)

    // El trazo del símbolo, para incrustarlo en el HTML (construir.js lo lee).
    fs.writeFileSync(path.join(__dirname, 'monograma.json'), JSON.stringify({ w: S.w, h: S.h, d: D }) + '\n')
    console.log(`símbolo ${S.w}×${S.h}, trazo de ${D.length} caracteres`)
}

main()
