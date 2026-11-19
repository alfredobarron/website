# alfredobarron.com

Sitio personal y comercial de Alfredo Barrón. HTML estático generado con Node,
CSS a mano (sin compilar) y publicado en GitHub Pages desde `master`.

La marca (logo, color, tipografía, voz) está en [docs/MARCA.md](docs/MARCA.md);
el plan de SEO, GEO y perfiles externos, en [docs/MARKETING.md](docs/MARKETING.md);
lo abierto, en [docs/PENDIENTES.md](docs/PENDIENTES.md).

## Cambiar algo

Los `.html`, `sitemap.xml`, `robots.txt`, `llms.txt` y `manifest.webmanifest`
de la raíz **se generan**: no se editan a mano (salvo `reportr/privacidad.html`,
que es independiente).

```bash
cd herramientas
npm install            # la primera vez; npx playwright install chromium si falta
node construir.js      # regenera las páginas
```

| Qué | Dónde |
|---|---|
| Textos en español (inicio, servicios, proyectos, preguntas) | `herramientas/sitio/datos-es.js` |
| Textos en inglés (inicio, servicios, proyectos); cada página se empareja con la de español por su `clave` | `herramientas/sitio/datos-en.js` |
| Encabezado, pie, metadatos, datos estructurados y los rótulos fijos de cada idioma (`T`) | `herramientas/sitio/plantilla.js` |
| El HTML de cada sección | `herramientas/sitio/secciones.js` |
| Estilos | `css/sitio.css` (al cambiarlo, subir `VERSION` en `plantilla.js`) |
| Pestañas de «De A a B» y eventos de contacto | `js/sitio.js` |

## Generadores

| Comando (en `herramientas/`) | Qué hace |
|---|---|
| `node construir.js` | Páginas, sitemap, robots, llms.txt y manifest |
| `node marca.js` | Logo, avatar, favicon e íconos (`docs/marca/`, `img/marca/`) |
| `node og.js` | Imágenes para compartir de cada página (`img/og/`) |
| `node firma.js` | Firma de correo en HTML y su logo (`docs/marca/formatos/`, `img/marca/firma-logo.png`) |
| `node cotizacion.js <datos.json>` | Cotización en PDF a partir de un `.json` como `formatos/cotizacion-ejemplo.json`; sin argumento regenera el ejemplo |
| `node redes.js` | Imágenes para LinkedIn, GitHub y el Perfil de Empresa de Google (`docs/marca/redes/`) |
| `node capturas.js [nombre…]` | Capturas de los sitios en vivo y de las apps (`img/proyectos/`) |
| `node revisar.js <carpeta> <ruta> [movil\|escritorio]` | Capturas del sitio local para revisarlo |

## Hacer una cotización

Las cotizaciones reales llevan datos de clientes y no van en este repo: viven en
`~/Datos-clientes/website/cotizaciones/`.

```bash
cp herramientas/formatos/cotizacion-ejemplo.json ~/Datos-clientes/website/cotizaciones/2026-001-cliente.json
# editar el .json: cliente, proyecto, etapas y precios
cd herramientas && node cotizacion.js ~/Datos-clientes/website/cotizaciones/2026-001-cliente.json
```

El PDF queda junto al `.json`. El subtotal, el IVA, el total, la duración y la fecha de
vigencia se calculan solos; `a`/`b`, `mensual`, `noIncluye` y `condiciones` son opcionales.

## Verlo en local

```bash
python3 -m http.server 8137    # en la raíz del repo
```

Abre <http://localhost:8137>. Las rutas son absolutas (`/css/…`), así que hay
que servirlo desde la raíz; abrir el archivo con doble clic no carga los estilos.

## Agregar una página

- **Servicio o proyecto**: agregar su objeto en `datos-es.js` (listas
  `servicios` o `proyectos`), su captura con `capturas.js`, y correr
  `construir.js` y `og.js`. El sitemap, el pie y `llms.txt` se actualizan solos.
- GitHub Pages falla si el repo tiene miles de archivos: `node_modules` no se
  versiona y `_config.yml` excluye `docs/` y `herramientas/` de la publicación.
