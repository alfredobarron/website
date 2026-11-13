// Toma capturas del sitio local para revisarlo a ojo.
// Uso: python3 -m http.server 8137 (en la raíz) y luego
//      node revisar.js <carpeta-salida> <ruta> [movil|escritorio] [alto]
const { chromium } = require('playwright')
;(async () => {
    const [salida, ruta, modo = 'escritorio', alto] = process.argv.slice(2)
    const movil = modo === 'movil'
    const b = await chromium.launch()
    const c = await b.newContext({ viewport: movil ? { width: 390, height: 844 } : { width: 1360, height: 900 }, deviceScaleFactor: movil ? 2 : 1, isMobile: movil })
    const p = await c.newPage()
    const errores = []
    p.on('console', m => m.type() === 'error' && errores.push(m.text()))
    p.on('requestfailed', r => errores.push('falló ' + r.url()))
    p.on('response', r => r.status() >= 400 && errores.push(r.status() + ' ' + r.url()))
    await p.goto('http://localhost:8137' + ruta, { waitUntil: 'networkidle' })
    await p.waitForTimeout(900)
    const nombre = (ruta.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'inicio') + '-' + modo
    // Recorre la página para que carguen las imágenes diferidas.
    await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) } window.scrollTo(0, 0) })
    await p.waitForTimeout(600)
    const total = await p.evaluate(() => document.documentElement.scrollHeight)
    const paso = Number(alto) || (movil ? 2600 : 2400)
    let n = 0
    for (let y = 0; y < total; y += paso) {
        await p.screenshot({ path: `${salida}/${nombre}-${++n}.png`, fullPage: true, clip: { x: 0, y, width: movil ? 390 : 1360, height: Math.min(paso, total - y) } })
    }
    const desborde = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    console.log(nombre, 'alto', total, 'partes', n, 'desborde horizontal', desborde, errores.length ? errores : 'sin errores')
    await b.close()
})()
