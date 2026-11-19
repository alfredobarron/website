// Firma de correo de la marca (docs/MARCA.md §8), en español y en inglés.
// Escribe docs/marca/formatos/firma-correo.html, una página con las dos firmas
// y un botón para copiarlas, y el logo que la firma carga desde el sitio
// (img/marca/firma-logo.png: hay que publicarlo para que se vea en los correos).
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
const LOGO = `${P.ORIGEN}/img/marca/firma-logo.png`
// El logo se muestra a 150 px (el mínimo de la horizontal es 120) y se guarda al triple.
const ANCHO = 150
const ALTO = Math.round(ANCHO * 102 / 845)

const FUENTE = `'Funnel Sans', Helvetica, Arial, sans-serif`
const enlace = (href, texto) =>
    `<a href="${href}" style="color:#0A2A21;text-decoration:underline;text-decoration-color:#19C37D;">${texto}</a>`

function firma(idioma) {
    const es = idioma === 'es'
    const telefono = P.TELEFONO.replace(/\D/g, '')
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FUENTE};color:#33473F;font-size:14px;line-height:1.5;">
    <tr><td style="padding:0 0 12px 0;">
        <a href="${P.ORIGEN}/${es ? '' : 'en/'}"><img src="${LOGO}" width="${ANCHO}" height="${ALTO}" alt="Alfredo Barrón" style="display:block;border:0;"></a>
    </td></tr>
    <tr><td style="padding:10px 0 0 0;border-top:1.5px solid #0A2A21;">
        <span style="color:#0A2A21;font-weight:600;">${es ? 'Arquitecto de software' : 'Software architect'}</span><br>
        <span style="color:#5A6B63;">${es ? 'Software a la medida, apps móviles y sitios web' : 'Custom software, mobile apps and websites'}</span>
    </td></tr>
    <tr><td style="padding:8px 0 0 0;">
        ${enlace(`https://wa.me/${telefono}`, P.TELEFONO)} &nbsp;·&nbsp; ${enlace(`mailto:${P.CORREO}`, P.CORREO)}<br>
        ${enlace(`${P.ORIGEN}/${es ? '' : 'en/'}`, `alfredobarron.com${es ? '' : '/en'}`)} &nbsp;·&nbsp; <span style="color:#5A6B63;">${es ? 'Monterrey, Nuevo León' : 'Monterrey, Mexico'}</span>
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
    await sharp(path.join(RAIZ, 'docs/marca/ab-horizontal.svg'), { density: 600 })
        .resize({ width: ANCHO * 3 }).png().toFile(path.join(RAIZ, 'img/marca/firma-logo.png'))
    fs.writeFileSync(path.join(SALIDA, 'firma-correo.html'), pagina)
    console.log('img/marca/firma-logo.png\ndocs/marca/formatos/firma-correo.html')
})()
