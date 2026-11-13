# Marca

> La identidad de Alfredo Barrón, **versión 1.0** (2026-11-13). Sustituye al sitio negro con verde
> neón, letra de terminal y arte ASCII. Los valores exactos viven en
> [marca/tokens.json](marca/tokens.json) y los archivos del logo en [marca/](marca/); este
> documento dice **cuándo y para qué** se usa cada uno. El sitio la aplica completa
> (`css/sitio.css`).

---

## 1. La idea

**De A a B.** Un negocio llega con un proceso que hoy se hace a mano (el punto A) y quiere un
sistema funcionando (el punto B). Alfredo recorre ese tramo completo: diseña, construye, publica y
opera. La idea sale del propio monograma, que une la «a» y la «b» en un solo trazo.

- **Qué es**: un arquitecto de software en Monterrey que construye software a la medida, apps
  móviles y sitios web para empresas, y que se queda a operarlos.
- **Lo que lo distingue** (todo comprobable): tiene productos propios en producción y en las
  tiendas (Tráeme, Privada); hace el camino completo, hasta el hardware y los servidores; el
  cliente trata con quien diseña y programa.
- **A quién le habla**: dueños de negocio y directores que no son técnicos. No a otros
  programadores: por eso se fueron la terminal, el arte ASCII y las barras de «95 % Backend».
- **Personalidad**: claro, directo, serio sin ser solemne. Nunca jerga de startup, ni «soluciones
  integrales», ni promesas sin dato.
- **Frente a las agencias de Monterrey** (fábricas de software con equipos grandes): una sola
  persona con experiencia, responsable de principio a fin.

## 2. Logo

El **monograma «ab»** de siempre, vectorizado del original, **en un solo color**: pino sobre claro,
blanco sobre pino. El nombre va en Funnel Display seminegrita, convertido a trazos.

| Archivo ([marca/](marca/), PNG en `marca/png/`) | Uso |
|---|---|
| `ab-horizontal.svg` / `-blanco` | **El logo.** Sitio, cotizaciones, documentos, firma de correo |
| `ab-simbolo.svg` / `-blanco` | Donde no cabe el nombre |
| `ab-avatar.svg` | Foto de perfil de GitHub, GitLab, Medium, WhatsApp Business y Google |

- **Espacio libre**: el alto de la «b» a cada lado. **Mínimo**: 20 px el símbolo, 120 px la horizontal.
- **Nunca**: en jade ni en otro color, con degradado, con sombra, girado ni dentro de un círculo.
- **Se regeneran** con `cd herramientas && node marca.js` (también el favicon y los íconos del sitio).

## 3. Color

**Pino, papel y un solo acento.** Un verde profundo en lugar del negro, sobre un papel claro; el
jade marca lo que llegó a B.

| Token | Valor | Uso |
|---|---|---|
| pino | `#0E3B2E` | logo, botón principal, bloques de marca (De A a B, contacto) |
| pino-900 | `#0A2A21` | títulos y texto fuerte (13.9:1 sobre papel) |
| jade | `#19C37D` | **único acento**: el punto B, el trazo de A a B, el subrayado de los enlaces |
| jade-tinta | `#0B7A4B` | enlaces en texto sobre claro (4.9:1) |
| menta-50 | `#E3F4EB` | hover del botón claro |
| papel / blanco / línea | `#F2F4F0` / `#FFFFFF` / `#D9DFD8` | fondo, secciones alternas y tarjetas, filetes |
| cuerpo / apoyo | `#33473F` / `#5A6B63` | párrafos (9.0:1) / rótulos y contexto (5.1:1) |
| gris-a | `#8B9891` | el punto A: lo de antes va sin color |

- **El jade nunca va como texto sobre claro** (2.1:1): sobre claro es relleno, punto o subrayado.
  Como texto solo sobre pino.
- **A va en gris y B en jade**, siempre. El color cuenta la historia: lo que importa es B.
- Sin degradados y sin sombras de adorno. La única sombra es la de la captura dentro del bloque pino.
- El verde de WhatsApp no se usa: el botón de contacto es pino, con el ícono de WhatsApp en blanco.

## 4. Tipografía

**Funnel** (Google Fonts, OFL), en dos cortes de la misma familia: **Funnel Display** para títulos,
geométrica y ancha como el monograma, y **Funnel Sans** para lectura. Archivos variables en
`fonts/Funnel/`, servidos desde el propio sitio.

| Rol | Tamaño / peso |
|---|---|
| Display (titular de portada) | 40 a 88 px / 700, tracking −0.035em |
| Título 1 (secciones) | 30 a 52 px / 700 |
| Título 2 | 22 a 28 px / 600 |
| Título 3 | 18 a 20 px / 600 |
| Cuerpo | 17 px / 400, interlínea 1.6 |
| Apoyo | 15 px / 400 |

Altas y bajas siempre: **sin MAYÚSCULAS espaciadas** y sin rótulos chicos encima de cada título.
Renglones de 65 caracteres o menos.

## 5. Componentes

- **De A a B** (`ab-ruta`, `ab-tramo`): la pieza de la marca. Un círculo hueco con la A, una línea
  jade y un círculo jade con la B. Aparece en la portada (un caso por pestaña), en las tarjetas de
  proyecto, en cada caso (Antes / Hoy) y en la imagen para compartir. **Solo se usa para un antes y
  un después reales.**
- **Botones en píldora**; uno principal por pantalla, en pino, con el verbo de lo que pasa
  («Cotizar por WhatsApp»). El secundario es un enlace con subrayado jade.
- **Listas con filete**, no tarjetas: servicios, «qué incluye», ficha del proyecto y preguntas
  abren con una línea pino y separan con líneas finas. La tarjeta se reserva para los proyectos.
- **Números solo donde hay secuencia**: los cinco pasos de «Cómo trabajo».
- **Radios** 8 / 16 / 28 y píldora.

## 6. Movimiento

**Una sola animación con sentido**: la línea se traza de A a B (520 ms) al cargar la portada y al
cambiar de caso. Lo demás no se mueve: sin entradas al hacer scroll y sin nada en bucle (se quitó
el carrusel infinito de logos). Los botones bajan a 97 % al presionar (160 ms). Con «reducir
movimiento» se quitan el trazo y la escala.

## 7. Voz

De tú, en frases cortas, **el dato antes que el adjetivo** y solo lo que es cierto hoy.

- *«Tres apps y una sola API que cotizan el envío, asignan repartidor y siguen cada pedido en el
  mapa»*, no *«una solución integral de logística de última milla»*.
- Cada caso se cuenta igual: el punto de partida, lo de hoy y lo que se construyó.
- Las páginas de servicio abren con la respuesta directa a lo que alguien preguntaría («¿qué es el
  software a la medida?»): sirve al lector, a Google y a los asistentes de IA.

**Qué se publica de cada proyecto**: solo lo que ya es público en su propio sitio o en las
tiendas. No van cifras internas (pedidos, usuarios, precios), nombres de clientes de Privada ni
detalles de infraestructura de un cliente. Las cifras y los nombres nuevos se agregan cuando el
dueño o el cliente los autorizan ([PENDIENTES.md](PENDIENTES.md)).

## 8. Aplicaciones

- **Imagen para compartir** (1200 × 630): fondo pino, logo blanco, el titular de la página y el
  tramo A–B. Una por página, con `node og.js`.
- **Perfiles**: `ab-avatar` como foto en todos; el mismo titular y la misma descripción
  ([MARKETING.md](MARKETING.md) §4).
- **Pendientes de diseñar**: plantilla de cotización, firma de correo en HTML y portada de LinkedIn.
