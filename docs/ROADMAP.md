# Roadmap — website (alfredobarron.com)

La historia del sitio: lo hecho y lo decidido, con su porqué. Lo abierto vive en
[PENDIENTES.md](PENDIENTES.md).

## 2026-11-13 · Marca v1 y sitio nuevo

Publicado en `master` el 2026-11-13 (commit `e44491c`).

Se rehízo el sitio completo sobre una marca nueva ([MARCA.md](MARCA.md)), con el método que se
siguió en Privada: primero la idea y la identidad, después las páginas.

- **Por qué**: el sitio era una sola página negra con verde neón, letra de terminal y arte ASCII,
  que hablaba a programadores y no a quien contrata; no había páginas que posicionar por servicio
  ni casos que leer.
- **La idea**: «De A a B», del proceso que hoy se hace a mano al sistema funcionando. Sale del
  monograma «ab», que se conservó y se vectorizó del PNG original.
- **Identidad**: verde pino sobre papel claro con un solo acento jade; Funnel Display y Funnel
  Sans; una sola animación (la línea que se traza de A a B).
- **Páginas** (antes 2, ahora 12): inicio en español e inglés, cuatro servicios (software a la
  medida, apps móviles, páginas web, consultoría), cinco casos (Universidad Construrama, Auto
  Vision, Tráeme, Privada y Reportr) y 404. Con esto se cierran los pendientes «una página por servicio»,
  «casos de éxito» y «agregar Reportr al portafolio».
- **Cómo se arma**: generador en Node (`herramientas/`) que escribe el HTML ya construido; CSS a
  mano. Se quitaron Tailwind, Font Awesome y las fuentes anteriores. GitHub Pages sigue sirviendo
  los archivos tal cual.
- **Orden de los proyectos** (decisión de Alfredo, 2026-11-13): Universidad Construrama, Auto
  Vision, Tráeme y Privada. En el inicio las tarjetas llevan la captura del sitio de cada uno;
  Reportr va en «También he construido», en el lugar de las invitaciones de Privada, que se
  quitaron. Las páginas de apps y de sitios web llevan además una galería de capturas.
- **Decisiones de Alfredo sobre los textos** (2026-11-13): no se promete que el código, los
  servidores y las cuentas quedan a nombre del cliente; Reportr es un encargo; Auto Vision se
  cuenta desde 2018 (el primer repo), con MercadoLibre y sus muchas tiendas; Tráeme ya no opera
  en Tenosique; Master Muñoz y AS Comediantes se quedan en la lista de clientes; «Quién
  construye tu software» lleva foto y la trayectoria del sitio anterior, más Doble Dígito
  (arquitecto de software, desde noviembre de 2025). Las demás promesas (llamada sin costo,
  precio fijo por etapas, dos a cuatro meses, mantenimiento mensual, acuerdo de
  confidencialidad, especialistas de confianza) quedaron confirmadas.
- **Galerías cortas**: Alfredo pidió pocas capturas por caso. Privada lleva cuatro, una por
  pieza (sitio, panel, app de residentes y app de caseta); el panel se captura con la cuenta de
  la Privada Demo desde `herramientas/capturas.js`, en modo oscuro. Reportr lleva tres y liga a
  Google Play. La página de apps se quedó sin galería aparte: no convenció y las tarjetas de
  caso ya muestran las apps.
- **Analítica**: Google Analytics 4 (`G-H03GCQWQ13`) en todas las páginas; `js/sitio.js` se
  carga también en servicios y casos para contar ahí los clics de contacto.
- **Imágenes para los perfiles**: portada de LinkedIn, portada y fotos del Perfil de Empresa de
  Google, logo cuadrado y foto, en `docs/marca/redes/` (`herramientas/redes.js`).
- **SEO y GEO**: datos estructurados por página, sitemap de 12 URL, `llms.txt`, `robots.txt` con
  los rastreadores de IA y una respuesta directa al inicio de cada servicio
  ([MARKETING.md](MARKETING.md)).
- **Se quitó**: las cifras sin respaldo («3 premios», «+10 clientes», «+23 proyectos», «+100
  módulos»), las barras de habilidades, el carrusel infinito de logos, la sección de artículos de
  Medium (en inglés, el último de marzo de 2024) y el ícono `icon-consulting-white.svg`, que
  seguía pendiente de cambiarse.
- **Regla de contenido**: de cada proyecto solo se publica lo que ya es público en su sitio o en
  las tiendas; nada de cifras internas ni nombres de clientes de Privada.

## 2026-11-13 · Perfiles externos al día con la marca

Con el sitio nuevo publicado, se actualizaron los perfiles con los textos y las imágenes de
[MARKETING.md](MARKETING.md) §4, para que digan lo mismo que el sitio.

- **GitHub**: nombre con acento, bio corta, empresa «Tráeme», sitio y `website` fijado junto a
  `smoke` y `laravel-scaffold`. Se creó el repo `alfredobarron/alfredobarron` con el README de
  perfil. Verificado por la API de GitHub; el avatar lo subió Alfredo.
- **LinkedIn, GitLab, Medium, Perfil de Empresa de Google y ChatGPT Business**: los actualizó
  Alfredo a mano (confirmado por él el 2026-11-13; no se revisaron desde fuera). En Google se
  incluyen la información, las fotos y la petición de las primeras reseñas. Para ChatGPT Business
  se generó una portada de 1200 × 400 (`chatgpt-portada-1200x400.png`).
- **Trayectoria** (decisión de Alfredo, 2026-11-13): Gericare es «Líder de tecnología», Vialux
  «Líder de desarrollo full stack» y el Tec de Monterrey «Desarrollador full stack sénior»; el
  sitio y LinkedIn llevan los mismos cargos, años y descripciones. El proyecto de Mora Car Care
  en Estados Unidos no va en la experiencia porque fue un cliente, no un empleo.
- **Firma de correo**: el texto está en MARKETING.md §4; la versión en HTML sigue en
  [PENDIENTES.md](PENDIENTES.md) («Aplicaciones de la marca»).

## 2026-11-06 a 2026-11-07

- Se creó `docs/PENDIENTES.md` (movido desde `~/Dev/ops/PENDIENTES.md`) y se excluyó `docs/` de
  GitHub Pages.
- Se quitaron del repo las copias completas de Font Awesome: con ~4,350 archivos, Pages fallaba
  por tiempo de espera.

## 2026-10-07 · SEO de base

Versiones en español e inglés con `hreflang`, datos estructurados, botón de WhatsApp, imágenes
para compartir y alta en Search Console con el sitemap.
