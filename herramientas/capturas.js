// Toma las capturas de los sitios en vivo y convierte las de las apps para
// img/proyectos/. Las de las apps salen de los docs de cada proyecto
// (~/Dev/privada/docs/tienda/capturas, ~/Dev/reportr/docs/tienda/capturas).
// Uso: cd herramientas && node capturas.js [nombre…]   (sin nombres, todas)
// `privada-panel` entra al panel con la cuenta de la Privada Demo.

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { chromium } = require('playwright')

const SALIDA = path.join(__dirname, '../img/proyectos')
const DEV = path.join(__dirname, '../..')

const SITIOS = {
    'traeme-web': 'https://traeme.app',
    'privada-web': 'https://privada.mx',
    'uconstrurama-web': 'https://uconstrurama.com',
    'autovision-web': 'https://autovision.mx',
    'moracarcare-web': 'https://moracarcare.com',
    'tamaleslolita-web': 'https://tamaleslolita.com',
    'insequi-web': 'https://insequi.com.mx',
}

const APPS = {
    // Recorte de una captura de la ficha de Tráeme en Google Play (app.traeme.client).
    'traeme-app-pedido': 'website/herramientas/fuentes/traeme-app-pedido.png',
    'privada-app-inicio': 'privada/docs/tienda/capturas/clients-iphone/01-inicio.png',
    'privada-caseta-inicio': 'privada/docs/tienda/capturas/guards-iphone/01-inicio.png',
    'reportr-reportes': 'reportr/docs/tienda/capturas/app/01-tickets.png',
    'reportr-asignar': 'reportr/docs/tienda/capturas/app/02-asignar.png',
    'reportr-seguimiento': 'reportr/docs/tienda/capturas/app/04-seguimiento.png',
}

async function main() {
    fs.mkdirSync(SALIDA, { recursive: true })
    const pedidos = process.argv.slice(2)
    const toca = n => !pedidos.length || pedidos.includes(n)

    for (const [nombre, origen] of Object.entries(APPS)) {
        if (!toca(nombre)) continue
        await sharp(path.join(DEV, origen)).resize({ width: 600 }).webp({ quality: 82 }).toFile(path.join(SALIDA, `${nombre}.webp`))
        console.log('app  ', nombre)
    }

    const navegador = await chromium.launch()
    for (const [nombre, url] of Object.entries(SITIOS)) {
        if (!toca(nombre)) continue
        for (const [sufijo, vista, ancho] of [['movil', { width: 390, height: 780 }, 600], ['escritorio', { width: 1280, height: 960 }, 1280]]) {
            const contexto = await navegador.newContext({ viewport: vista, deviceScaleFactor: 2, isMobile: sufijo === 'movil', locale: 'es-MX' })
            const pagina = await contexto.newPage()
            try {
                await pagina.goto(url, { waitUntil: 'networkidle', timeout: 45000 })
            } catch (e) {
                console.log('aviso', nombre, sufijo, e.message.split('\n')[0])
            }
            await pagina.waitForTimeout(1500)
            const png = await pagina.screenshot()
            await sharp(png).resize({ width: ancho }).webp({ quality: 80 }).toFile(path.join(SALIDA, `${nombre}-${sufijo}.webp`))
            await contexto.close()
            console.log('sitio', nombre, sufijo)
        }
    }
    // Panel de Privada con la privada de demostración (solo lectura). La
    // contraseña se lee de privada-api/.env y no se guarda en este repo.
    if (toca('privada-panel')) {
        const env = fs.readFileSync(path.join(DEV, 'privada/privada-api/.env'), 'utf8')
        const clave = (env.match(/^DEMO_PASSWORD=(.*)$/m) || [])[1].replace(/^["']|["']$/g, '')
        const contexto = await navegador.newContext({ viewport: { width: 1280, height: 960 }, deviceScaleFactor: 2, colorScheme: 'dark', locale: 'es-MX' })
        const pagina = await contexto.newPage()
        await pagina.goto('https://app.privada.mx/login')
        await pagina.fill('input[type=email]', 'admin@demo.privada.mx')
        await pagina.fill('input[type=password]', clave)
        await pagina.click('button[type=submit]')
        await pagina.waitForURL(u => !u.pathname.startsWith('/login'), { timeout: 30000 })
        await pagina.goto('https://app.privada.mx' + (process.env.PANEL_RUTA || '/'))
        await pagina.waitForLoadState('networkidle')
        await pagina.waitForTimeout(2500)
        await sharp(await pagina.screenshot()).resize({ width: 1280 }).webp({ quality: 80 }).toFile(path.join(SALIDA, 'privada-panel-escritorio.webp'))
        await contexto.close()
        console.log('panel privada-panel')
    }
    await navegador.close()
}

main()
