# Marketing — que te encuentren y te escriban

> Plan para traer prospectos a alfredobarron.com (escrito el 2026-11-13, junto con la marca v1 de
> [MARCA.md](MARCA.md)). Objetivo: **conversaciones por WhatsApp con dueños de negocio y
> directores**, no visitas ni seguidores. Lo que falta por hacer de aquí vive en
> [PENDIENTES.md](PENDIENTES.md).

---

## 1. Diagnóstico (2026-11-13)

**El sitio anterior** ya traía lo básico de SEO (títulos, descripciones, `hreflang`, datos
estructurados, sitemap, Search Console desde el 2026-10-07), pero:

- Era **una sola página** por idioma: no había nada que posicionar para «apps móviles Monterrey»
  o «diseño de páginas web», ni casos que un prospecto pudiera leer.
- Hablaba a programadores (terminal, arte ASCII, barras de habilidades) y no a quien paga.
- Las cifras («3 premios», «+10 clientes», «+23 proyectos», «+100 módulos») no tenían respaldo
  escrito en ningún lado; se quitaron.
- El portafolio eran capturas sin explicación y la sección de artículos mostraba seis textos en
  inglés de 2020 a 2024.
- Cargaba Font Awesome completo (cuatro hojas de estilo) y dos fuentes en TTF para una sola página.

**Perfiles externos** (lo que se ve sin iniciar sesión):

| Perfil | Qué dice hoy | Problema |
|---|---|---|
| LinkedIn | «Full Stack Web Developer / Founder at #Tráeme», San Pedro Garza García, 363 contactos; la actividad visible más nueva tiene unos 2 años | Titular viejo y distinto al de los demás perfiles; experiencia sin fechas ni cargos; no menciona Privada ni los servicios |
| GitHub | «Software Architect, Founder at Tráeme», 64 seguidores, liga al sitio; fijados `smoke` (383 estrellas) y `laravel-scaffold` (154) | Sin README de perfil; los repos con actividad reciente son forks y pruebas viejas |
| GitLab | «Software Architect, creator of modulr and smokejs…», liga al sitio | Bio en inglés y de otra época |
| Medium | 10 artículos en inglés, el último del 2024-03-05 | Parado desde hace más de dos años; habla a programadores, no a clientes |
| Google | Hay Perfil de Empresa (<https://www.google.com/maps?cid=16262215527281852045>; no se revisó su contenido) | Falta ponerlo al día con la marca y los servicios nuevos, y pedir reseñas |

**Competencia en «desarrollo de software a la medida Monterrey»**: agencias y fábricas de software
con páginas por ciudad y blog. Compiten con equipo y volumen; Alfredo compite con **productos
propios en producción, casos explicados y trato directo**, y por las búsquedas más específicas.

## 2. SEO: lo que ya quedó en el sitio

| Página | Búsqueda a la que apunta |
|---|---|
| `/` | desarrollo de software a la medida en Monterrey; desarrollador de software Monterrey |
| `/desarrollo-de-software-a-la-medida/` | software a la medida para empresas; sistemas a la medida |
| `/desarrollo-de-apps-moviles/` | desarrollo de apps móviles iOS y Android Monterrey |
| `/diseno-de-paginas-web/` | diseño de páginas web Monterrey |
| `/consultoria-de-software/` | consultoría de software; arquitecto de software; consultoría AWS |
| `/proyectos/…` (4 casos) | el nombre de cada proyecto y su tipo (app de entregas, software para fraccionamientos…) |
| `/en/` | custom software developer Mexico (nearshore) |

- Un `h1` por página con la búsqueda principal; títulos de menos de 65 caracteres y descripciones
  propias por página.
- Datos estructurados en todas: `ProfessionalService`, `Person` y `WebSite` con el mismo `@id`;
  además `Service`, `FAQPage` y `BreadcrumbList` en los servicios y `CreativeWork` en los casos.
- Enlaces internos: inicio → servicios → casos → contacto, y el pie con todo.
- Rendimiento: sin frameworks ni librerías; una hoja de estilos, un script de 2 KB, dos fuentes
  variables precargadas e imágenes en WebP con carga diferida.
- `sitemap.xml` con las 12 URL y `404.html` propio.

**Cada mes** (10 minutos): en Search Console, ver consultas con impresiones y pocos clics (ajustar
título y descripción) y consultas donde el sitio sale en la posición 8 a 20 (ampliar esa página o
escribir un artículo).

## 3. GEO: que los asistentes de IA te citen

Los asistentes (ChatGPT, Claude, Perplexity, los resúmenes de Google) citan páginas que responden
directo, con datos concretos y que pueden rastrear. No hay un truco técnico que lo garantice: lo
que pesa es el contenido. Lo que quedó hecho:

- **Respuesta directa arriba** en cada página de servicio («El software a la medida es…») y
  preguntas frecuentes redactadas como las haría una persona.
- **`llms.txt`** con el resumen del sitio en texto plano (se genera solo desde el contenido). Es
  higiene barata: ningún buscador grande se ha comprometido a usarlo.
- **`robots.txt`** permite de forma explícita a los rastreadores de IA.
- **Una sola entidad**: mismo nombre, ciudad, teléfono y descripción en el sitio y, cuando se
  actualicen, en los perfiles (§4). La consistencia es lo que permite que un modelo junte las
  piezas.

Lo que más mueve la aguja y falta (en este orden): reseñas en Google, casos con cifras
autorizadas, y artículos en español que respondan preguntas de compra (§5).

## 4. Perfiles: textos listos para pegar

**Una sola descripción en todos lados.** Foto de perfil: `docs/marca/png/ab-avatar.png` (o una
foto tuya de frente, con fondo liso, que además hace falta para «Sobre mí»).

**Imágenes listas** en `docs/marca/redes/` (las genera `herramientas/redes.js`):

| Archivo | Dónde va |
|---|---|
| `linkedin-portada-1584x396.png` | Portada de LinkedIn (el texto va a la derecha porque la foto tapa la esquina izquierda) |
| `foto-perfil-400.jpg` | Foto de perfil de LinkedIn |
| `logo-cuadrado-800.png` | Avatar de GitHub, GitLab y Medium, y logotipo del Perfil de Empresa de Google |
| `google-perfil-portada-1280x720.png` | Foto de portada del Perfil de Empresa de Google |
| `google-perfil-foto-{software,apps,web,consultoria}-1200x900.png` | Fotos y publicaciones del Perfil de Empresa, una por servicio |


**Titular (LinkedIn, GitHub, GitLab)**

> Arquitecto de software · Software a la medida, apps móviles y sitios web para empresas ·
> Fundador de Tráeme y creador de Privada

**Acerca de (LinkedIn)**

> Llevo más de 15 años construyendo software para empresas: sistemas web, apps para iOS y
> Android y la infraestructura en la nube que los sostiene.
>
> Trabajo directamente con dueños de negocio y directores. Me cuentan cómo trabaja hoy su
> operación (el punto A) y a dónde quieren llegar (el punto B); yo diseño, construyo y opero el
> sistema que recorre ese tramo.
>
> Además de trabajar para clientes, he creado mis propios productos:
> • Tráeme, una app de entregas a domicilio con apps para cliente, repartidor y operación.
> • Privada, un sistema para fraccionamientos con control de acceso por QR, cobranza de cuotas y
>   un equipo en la caseta que funciona sin internet.
>
> Trabajo con Laravel, Vue, React Native, Python, AWS e inteligencia artificial, desde Monterrey para todo México y Estados Unidos.
>
> ¿Tienes un proceso que hoy se hace a mano? Escríbeme: alfredobarron.com

LinkedIn, además: ubicación «Monterrey, Nuevo León»; en Experiencia, cada puesto con cargo y
fechas; en Destacados, el sitio y los casos de Tráeme y Privada; sitio web `https://alfredobarron.com`.

**Bio corta (GitHub, GitLab, Medium, 160 caracteres)**

> Arquitecto de software en Monterrey. Software a la medida, apps móviles y sitios web. Fundador
> de Tráeme y creador de Privada. alfredobarron.com

GitHub, además: crear el repo `alfredobarron/alfredobarron` con un README de perfil (quién eres,
qué construyes, liga al sitio y a los casos) y fijar `smoke`, `laravel-scaffold` y `website`.

**Firma de correo**

> Alfredo Barrón
> Arquitecto de software
> +52 81 1897 7886 · alfredobarron.com

**Perfil de Empresa de Google** (el pendiente con más efecto en búsquedas locales)

- Nombre: `Alfredo Barrón` (sin palabras clave pegadas: Google suspende perfiles por eso).
- Tipo: negocio de servicio, sin dirección visible. Área: Monterrey, San Pedro Garza García, San
  Nicolás, Guadalupe, Apodaca, Escobedo y Santa Catarina.
- Categoría principal: «Empresa de software». Secundarias: «Diseñador de sitios web» y
  «Consultor informático» (los nombres exactos se eligen de la lista de Google).
- Sitio, teléfono y WhatsApp del sitio; horario de lunes a viernes.
- Servicios: los cuatro del sitio, con su liga.
- Descripción:

> Desarrollo de software a la medida, apps móviles para iOS y Android y sitios web para empresas.
> Soy Alfredo Barrón, arquitecto de software en Monterrey con más de 15 años de experiencia.
> Diseño, construyo y opero cada sistema, de la primera idea a la operación diaria.
> La primera llamada no tiene costo.

- Fotos: el logo, la imagen para compartir del sitio y capturas de los proyectos.
- **Reseñas**: pedirlas a clientes que puedan hablar del trabajo (Mora Car Care, Tamales Lolita,
  Universidad Construrama) con la liga directa de reseña. Cinco reseñas reales valen más que
  cualquier otra cosa de este documento.

## 5. Contenido: un artículo al mes, en español, para quien compra

Los artículos viven en el sitio (`/articulos/…`), no en Medium: así posicionan al dominio y los
asistentes citan a alfredobarron.com. Cada uno responde una pregunta que hace un prospecto antes
de contratar, con ejemplos de los proyectos propios. Orden sugerido:

1. ¿Cuánto cuesta desarrollar una app en México? (con rangos reales, cuando decidas publicarlos)
2. Software a la medida o software comercial: cómo decidir.
3. Cómo publicar una app en App Store y Google Play: pasos, tiempos y costos (lo viviste con Privada).
4. Qué preguntarle a un desarrollador antes de contratarlo.
5. Cómo funciona un control de acceso con QR que no depende del internet (el caso de Privada Box).

Cada artículo se comparte en LinkedIn con dos o tres frases y la liga. Los artículos técnicos en
inglés de Medium se quedan donde están, sin liga desde el inicio.

## 6. Medición

Hay Search Console y **Google Analytics 4** (propiedad 424908612, ID de medición `G-H03GCQWQ13`,
cargado en `herramientas/sitio/plantilla.js` desde el 2026-11-13). Cada clic a WhatsApp y a correo
se manda como el evento `contacto`, con el medio y la página (`data-evento`, en `js/sitio.js`).
Indicadores: clics a WhatsApp por mes, consultas e impresiones en Search
Console, y de qué página salió cada contacto.
