# Pendientes — website (alfredobarron.com)

> Lo abierto del sitio. Al cerrarse, su historia va a [ROADMAP.md](ROADMAP.md). La marca está en
> [MARCA.md](MARCA.md) y el plan de SEO, GEO y perfiles en [MARKETING.md](MARKETING.md). Cómo opera
> (DNS en GoDaddy, GitHub Pages, SES) está en `~/Dev/ops/OPERACION.md` §3. **Esta carpeta no se
> publica**: `_config.yml` la excluye de GitHub Pages, igual que `herramientas/`.

## Recién publicado (el sitio nuevo salió a `master` el 2026-11-13)

- [ ] **Comprobar en producción** que <https://alfredobarron.com> ya sirve el sitio nuevo: las 12
      páginas, el 404, `sitemap.xml`, `llms.txt` y el favicon (GitHub Pages tarda unos minutos).
- [ ] **Probar la vista previa al compartir** (LinkedIn Post Inspector, Facebook Sharing Debugger,
      WhatsApp) y **validar los datos estructurados** (Rich Results Test) del inicio, un servicio y
      un caso. En Search Console, reenviar el sitemap y pedir la indexación de las páginas nuevas.
- [ ] **Analítica**: ya está cargada (`G-H03GCQWQ13`). Falta, en Google Analytics, marcar el
      evento `contacto` como evento clave para que cuente como conversión, y comprobar en
      «Tiempo real» que llegan las visitas.

## Para mejorar el sitio

- [ ] **Foto nueva**: la actual (`herramientas/fuentes/alfredo-barron.jpg`) es de 2020 y mide
      400 px; alcanza para el círculo de «Quién construye tu software», no para una foto grande.
- [ ] **Casos con cifras**: decidir qué números se publican de Tráeme (pedidos, usuarios, tiendas;
      los del sitio de Tráeme no coinciden con los de la base), de Privada (cuando haya una privada
      que autorice salir) y de Universidad Construrama (las cifras del programa son del cliente).
- [ ] **Capturas de Tráeme**: cuando se actualicen sus apps y su sitio, cambiar la pantalla de la
      página de apps móviles (hoy es un recorte de su ficha de Google Play, en
      `herramientas/fuentes/traeme-app-pedido.png`) y agregar pantallas a su caso.
- [ ] **Capturas del panel web** de Auto Vision y Universidad Construrama con datos de
      demostración, para sus casos y la página de software a la medida (Privada ya la tiene).
- [ ] **Artículos en español** para prospectos, uno al mes, dentro del sitio
      ([MARKETING.md](MARKETING.md) §5), y revisar Search Console cada mes.
- [ ] **Páginas en inglés** de los servicios y los casos (hoy solo el inicio está traducido).
- [ ] **Correo con el dominio** (`hola@alfredobarron.com`) en lugar del de Gmail; el plan está en
      `~/Dev/ops/OPERACION.md` §3 (reenvío + «Enviar como» por SES).
- [ ] **Aplicaciones de la marca**: plantilla de cotización y firma de correo en HTML
      ([MARCA.md](MARCA.md) §8).
- [ ] `reportr/privacidad.html` conserva su diseño propio: pasarlo a la marca o moverlo a un
      dominio de Reportr.
