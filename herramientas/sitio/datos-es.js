// Contenido en español de alfredobarron.com. Solo datos públicos y
// comprobables de cada proyecto (docs/MARCA.md §7): nada de cifras internas
// ni nombres de clientes que no hayan autorizado salir.

const SERVICIOS = {
    software: '/desarrollo-de-software-a-la-medida/',
    apps: '/desarrollo-de-apps-moviles/',
    web: '/diseno-de-paginas-web/',
    consultoria: '/consultoria-de-software/',
}

const PROYECTOS = {
    uconstrurama: '/proyectos/universidad-construrama/',
    autovision: '/proyectos/auto-vision/',
    traeme: '/proyectos/traeme/',
    privada: '/proyectos/privada/',
    reportr: '/proyectos/reportr/',
}

// Tarjetas de caso: se usan en el inicio y en las páginas de servicio.
const CASOS = {
    traeme: {
        tipo: 'App de entregas, producto propio',
        nombre: 'Tráeme',
        url: PROYECTOS.traeme,
        a: 'Un servicio de mandados que depende de llamadas y mensajes: nadie sabe dónde va el repartidor ni cuánto cobrar por el envío.',
        b: 'Tres apps y una sola API que cotizan el envío, asignan repartidor y siguen cada pedido en el mapa, en Monterrey y Parral.',
        enlace: 'Ver el caso de Tráeme',
        imagen: 'traeme-web-escritorio',
        alt: 'Portada de traeme.app, la app de los mandados',
    },
    autovision: {
        tipo: 'Catálogo e inventario de autopartes',
        nombre: 'Auto Vision',
        url: PROYECTOS.autovision,
        a: 'Muchas tiendas de autopartes usadas, cada una con miles de piezas: saber cuál hay, dónde está y a qué auto le queda depende de la memoria de quien atiende.',
        b: 'Un inventario con fotos y ubicación de cada pieza, un catálogo en línea donde el cliente busca por auto y modelo, y la publicación en MercadoLibre desde el mismo sistema.',
        enlace: 'Ver el caso de Auto Vision',
        imagen: 'autovision-web-escritorio',
        alt: 'Catálogo de autopartes de Auto Vision',
    },
    privada: {
        tipo: 'Software para fraccionamientos, producto propio',
        nombre: 'Privada',
        url: PROYECTOS.privada,
        a: 'La caseta anota las visitas en una libreta, las cuotas se llevan en Excel y los avisos se pierden en el grupo de WhatsApp.',
        b: 'Residentes, caseta y administración en un solo sistema: acceso con QR, cobranza con morosidad automática y una caseta que sigue abriendo sin internet.',
        enlace: 'Ver el caso de Privada',
        imagen: 'privada-web-escritorio',
        alt: 'Portada del sitio de Privada con la maqueta 3D de un fraccionamiento',
    },
    reportr: {
        tipo: 'App de mantenimiento, trabajo para cliente',
        nombre: 'Reportr',
        url: PROYECTOS.reportr,
        a: 'Los desperfectos de un edificio se reportan de palabra o por mensaje y nadie sabe quién los atiende ni si ya quedaron.',
        b: 'Una app donde el reporte lleva fotos, el jefe lo asigna a un técnico con un toque y todos reciben un aviso en cada cambio de estatus.',
        enlace: 'Ver el caso de Reportr',
        imagen: 'reportr-reportes',
        alt: 'Lista de reportes del equipo en la app Reportr',
        movil: true,
    },
    uconstrurama: {
        tipo: 'Plataforma de capacitación',
        nombre: 'Universidad Construrama',
        url: PROYECTOS.uconstrurama,
        a: 'Capacitar a una red de distribuidores repartida por todo el país, con sus tiendas y sus colaboradores.',
        b: 'Una plataforma en línea con registro de alumnos, cursos, periodos y certificados, en operación desde 2018.',
        enlace: 'Ver el caso de Universidad Construrama',
        imagen: 'uconstrurama-web-escritorio',
        alt: 'Portada del sitio de Universidad Construrama',
    },
}

// En la página de apps, Tráeme y Privada se presentan con su app y no con su sitio.
CASOS.traemeApp = { ...CASOS.traeme, imagen: 'traeme-app-pedido', alt: 'Seguimiento de un pedido en la app de Tráeme', movil: true }
CASOS.privadaApp = { ...CASOS.privada, imagen: 'privada-app-inicio', alt: 'Pantalla de inicio de la app de residentes de Privada', movil: true }

const inicio = {
    ruta: '/',
    alternos: { 'es-MX': '/', en: '/en/' },
    titulo: 'Desarrollo de software a la medida en Monterrey | Alfredo Barrón',
    tituloOg: 'Alfredo Barrón: software a la medida que lleva tu negocio de A a B',
    descripcion: 'Arquitecto de software en Monterrey. Diseño, construyo y opero sistemas web, apps móviles y sitios web para empresas. La primera llamada no tiene costo.',
    og: 'inicio-es',
    portada: {
        titulo: 'Software a la medida que lleva tu negocio de A a B',
        bajada: 'Soy Alfredo Barrón, arquitecto de software en Monterrey. Diseño, construyo y opero sistemas web y apps móviles para empresas, desde la primera idea hasta que tu equipo los usa todos los días.',
        enlace: ['#proyectos', 'Ver proyectos'],
    },
    ruta_ab: {
        etiqueta: 'Proyectos, de dónde partieron y a dónde llegaron',
        rotuloA: 'El punto de partida',
        rotuloB: 'Hoy',
        casos: [
            {
                pestana: 'Capacitación',
                a: 'Capacitar a una red de distribuidores repartida por todo el país, con sus tiendas y sus colaboradores.',
                b: 'Universidad Construrama: la capacitación de la red en una plataforma',
                texto: 'Registro de alumnos, cursos en línea, periodos y certificados para los distribuidores Construrama y sus equipos. La construí en 2018 y la sigo operando.',
                datos: ['Plataforma web', 'Cursos y certificados', 'Desde 2018'],
                enlace: [PROYECTOS.uconstrurama, 'Ver el caso de Universidad Construrama'],
                imagen: 'uconstrurama-web-movil',
                alt: 'Sitio de Universidad Construrama',
            },
            {
                pestana: 'Autopartes',
                a: 'Miles de autopartes usadas en bodega: saber cuál hay, dónde está y a qué auto le queda depende de la memoria de quien atiende.',
                b: 'Auto Vision: cada pieza con foto, ubicación y precio, a la venta en línea',
                texto: 'Un inventario donde cada autoparte se captura con sus fotos y su lugar en la bodega, un catálogo público para buscarla por auto y modelo, y la publicación en MercadoLibre desde el mismo sistema.',
                datos: ['Inventario y catálogo web', 'Conectado a MercadoLibre', 'Muchas tiendas, desde 2018'],
                enlace: [PROYECTOS.autovision, 'Ver el caso de Auto Vision'],
                imagen: 'autovision-web-movil',
                alt: 'Catálogo de autopartes de Auto Vision',
            },
            {
                pestana: 'Entregas a domicilio',
                a: 'Un servicio de mandados que vive de llamadas y mensajes: nadie sabe dónde va el repartidor ni cuánto cobrar por el envío.',
                b: 'Tráeme: tres apps que cotizan, asignan y siguen cada mandado',
                texto: 'Una app para quien pide, otra para el repartidor y otra para quien coordina la operación, sobre una sola API. El pedido se cotiza al momento y se sigue en el mapa hasta la puerta.',
                datos: ['iOS y Android', 'Monterrey y Parral', 'Desde 2019'],
                enlace: [PROYECTOS.traeme, 'Ver el caso de Tráeme'],
                imagen: 'traeme-web-movil',
                alt: 'Sitio de Tráeme, la app de los mandados',
            },
            {
                pestana: 'Fraccionamientos',
                a: 'La caseta anota las visitas en una libreta, las cuotas se llevan en Excel y los avisos se pierden en el grupo de WhatsApp.',
                b: 'Privada: residentes, caseta y administración en un solo sistema',
                texto: 'Acceso con código QR, cobranza de cuotas con morosidad automática y bitácora con evidencia. Un equipo instalado en la caseta mantiene la pluma abriendo aunque se caiga el internet.',
                datos: ['Dos apps en App Store y Google Play', 'Panel web', 'Equipo propio en la caseta'],
                enlace: [PROYECTOS.privada, 'Ver el caso de Privada'],
                imagen: 'privada-web-movil',
                alt: 'Sitio de Privada, software para fraccionamientos',
            },
        ],
    },
    clientes: {
        titulo: 'Empresas y marcas para las que he construido software',
        lista: ['Universidad Construrama', 'Auto Vision', 'Tráeme', 'Privada', 'Mora Car Care', 'Tamales Lolita', 'Master Muñoz', 'AS Comediantes'],
    },
    servicios: {
        id: 'servicios',
        titulo: 'Qué puedo construir para tu empresa',
        bajada: 'Cuatro servicios que casi siempre van juntos: un sistema, la app que lo acompaña, el sitio que lo presenta y el criterio técnico para decidir bien.',
        lista: [
            {
                nombre: 'Software a la medida',
                para: 'Sistemas web, paneles y herramientas internas',
                texto: 'Un sistema hecho a la forma en que trabaja tu negocio: sustituye las hojas de Excel y los procesos a mano, se conecta con lo que ya usas y crece contigo en la nube.',
                url: SERVICIOS.software,
                enlace: 'Desarrollo de software a la medida',
            },
            {
                nombre: 'Apps móviles',
                para: 'iOS y Android',
                texto: 'Aplicaciones para iPhone y Android desde un solo código con React Native: notificaciones, cámara, mapas y pagos, y la publicación en App Store y Google Play.',
                url: SERVICIOS.apps,
                enlace: 'Desarrollo de apps móviles',
            },
            {
                nombre: 'Sitios web',
                para: 'Páginas de negocio y de producto',
                texto: 'Páginas rápidas, claras y bien posicionadas en Google, que explican lo que haces y llevan al visitante a escribirte por WhatsApp.',
                url: SERVICIOS.web,
                enlace: 'Diseño de páginas web',
            },
            {
                nombre: 'Consultoría técnica',
                para: 'Arquitectura, AWS y rescate de proyectos',
                texto: 'Una segunda opinión antes de invertir, la arquitectura de un sistema nuevo, el orden de tu infraestructura en AWS o ayuda para destrabar un proyecto que se atoró.',
                url: SERVICIOS.consultoria,
                enlace: 'Consultoría de software',
            },
        ],
    },
    proyectos: {
        id: 'proyectos',
        titulo: 'Proyectos que diseñé, construí y sigo operando',
        bajada: 'Cada uno empezó en un punto A, con un proceso que se hacía a mano, y hoy es un sistema en producción.',
        rotuloA: 'Antes',
        rotuloB: 'Hoy',
        casos: [CASOS.uconstrurama, CASOS.autovision, CASOS.traeme, CASOS.privada],
        otros: {
            titulo: 'También he construido',
            lista: [
                [PROYECTOS.reportr, 'Reportr', 'App de reportes de mantenimiento'],
                ['https://moracarcare.com', 'Mora Car Care', 'Sitio y catálogo de productos'],
                ['https://tamaleslolita.com', 'Tamales Lolita', 'Sitio con pedidos por WhatsApp'],
                ['https://insequi.com.mx', 'INSEQUI', 'Sitio de venta y recarga de extintores'],
            ],
        },
    },
    pasos: {
        id: 'como-trabajo',
        titulo: 'Cómo trabajo, de A a B',
        bajada: 'Hablas con la persona que diseña y construye tu software, de principio a fin.',
        lista: [
            ['Llamada', 'Me cuentas cómo trabaja hoy tu negocio y a dónde quieres llegar. No tiene costo.'],
            ['Propuesta', 'Recibes el alcance por escrito, con precio fijo por etapas y fechas de entrega.'],
            ['Construcción', 'Avanzo por etapas y en cada una pruebas algo que ya funciona.'],
            ['Lanzamiento', 'Dejo el sistema en tus servidores, las apps en las tiendas y a tu equipo capacitado.'],
            ['Operación', 'Me quedo a cargo del mantenimiento, el monitoreo y las mejoras que pida tu negocio.'],
        ],
    },
    sobre: {
        id: 'sobre-mi',
        titulo: 'Quién construye tu software',
        parrafos: [
            'Soy Alfredo Barrón, arquitecto de software y desarrollador full stack en Monterrey, Nuevo León. Llevo más de 15 años construyendo aplicaciones web y móviles para empresas de telecomunicaciones, logística, automotriz, salud y servicios financieros.',
            'Además de trabajar para clientes, he creado mis propios productos: Tráeme, una app de entregas a domicilio, y Privada, un sistema para fraccionamientos que incluye hasta el equipo que abre la pluma de la caseta. Por eso conozco el camino completo: diseñar, programar, publicar en las tiendas, operar los servidores y dar soporte.',
            'Trabajo directamente con dueños de negocio y directores, de forma remota con empresas de todo México y Estados Unidos, y en persona en el área metropolitana de Monterrey.',
        ],
        hechos: [
            ['Más de 15 años', 'construyendo software para empresas'],
            ['Fundador de Tráeme', 'app de entregas a domicilio, desde 2019'],
            ['Creador de Privada', 'con apps publicadas en App Store y Google Play'],
            ['Autor de Smoke', 'librería de código abierto con más de 380 estrellas en GitHub'],
            ['Laravel, Vue, React Native, Python, AWS e IA', 'las herramientas con las que trabajo a diario'],
        ],
        foto: 'Alfredo Barrón, arquitecto de software',
        trayectoria: {
            titulo: 'Trayectoria',
            lista: [
                ['2025 a la fecha', 'Doble Dígito', 'Arquitecto de software', 'Diseño y desarrollo APIs y plataformas con Python y FastAPI.'],
                ['2019 a la fecha', 'Tráeme', 'Fundador', 'Diseñé, desarrollé y puse en operación todas las piezas de una app de entregas a domicilio, y llevo su tecnología y su negocio.'],
                ['2022 a 2024', 'Connectivity Solutions', 'Gerente de desarrollo', 'Dirigí el desarrollo de una plataforma que monitorea equipos de red en tiempo real, con Laravel, React y AWS.'],
                ['2020 a 2022', 'Gericare', 'Líder de desarrollo full stack', 'Construí plataformas y portales a la medida para la operación de servicios de salud, con Laravel, Vue y AWS.'],
                ['2013 a 2018', 'Vialux', 'Desarrollador full stack sénior', 'Desarrollé un ERP con presupuestos, compras, reportes y conexión con SAP, con Laravel, Angular y AWS.'],
                ['2012 a 2013', 'Tecnológico de Monterrey', 'Desarrollador full stack', 'Ayudé a llevar cursos universitarios a formatos web que se leen bien en teléfonos y tabletas.'],
            ],
        },
    },
    preguntas: {
        id: 'preguntas',
        titulo: 'Preguntas frecuentes',
        lista: [
            ['¿Cuánto cuesta desarrollar un software a la medida o una app?', 'Depende del alcance: cuántas pantallas, cuántos tipos de usuario y con qué otros sistemas se conecta. Después de una llamada sin costo te envío una cotización con precio fijo por etapas, para que conozcas el costo y las fechas antes de empezar.'],
            ['¿Cuánto tarda un proyecto?', 'Un sitio web suele tomar unas semanas. Un sistema a la medida o una app móvil, de dos a cuatro meses para la primera versión que tu equipo ya puede usar; después se sigue mejorando por etapas.'],
            ['¿Trabajas con empresas fuera de Monterrey?', 'Sí. Trabajo de forma remota con empresas de todo México y de Estados Unidos, y en persona en Monterrey y su área metropolitana cuando el proyecto lo requiere.'],
            ['¿Publicas la app en App Store y Google Play?', 'Sí. Me encargo de las cuentas de desarrollador, la ficha de la tienda, el aviso de privacidad, la revisión de Apple y de Google y las actualizaciones posteriores.'],
            ['¿Das soporte después del lanzamiento?', 'Sí. Ofrezco planes de mantenimiento mensual que cubren el hosting, el monitoreo, la corrección de errores y las funciones nuevas que vaya pidiendo tu negocio.'],
            ['¿Con qué tecnologías trabajas?', 'Laravel (PHP) en el servidor, Vue en los paneles web, React Native con Expo en las apps de iOS y Android, y Amazon Web Services para la infraestructura. También uso Python con FastAPI para APIs y servicios, y la inteligencia artificial me acompaña en todo el proceso de desarrollo. Son tecnologías con mucha comunidad, así que cualquier otro equipo puede continuar el proyecto.'],
            ['¿Trabajas solo o con un equipo?', 'Tú tratas siempre conmigo: soy quien diseña la solución y quien la programa. Cuando un proyecto lo necesita, sumo a especialistas de confianza y sigo siendo el responsable.'],
        ],
    },
}

// ── Servicios ───────────────────────────────────────────────────────────

const migasServicio = nombre => [['/', 'Inicio'], ['/#servicios', 'Servicios'], [null, nombre]]

const servicios = [
    {
        clave: 'software',
        ruta: SERVICIOS.software,
        titulo: 'Desarrollo de software a la medida en Monterrey | Alfredo Barrón',
        descripcion: 'Sistemas web, paneles y herramientas internas hechas a la forma en que trabaja tu empresa. Precio fijo por etapas. Monterrey y todo México.',
        og: 'software',
        nombre: 'Desarrollo de software a la medida',
        tipoServicio: 'Desarrollo de software a la medida',
        h1: 'Desarrollo de software a la medida para empresas',
        respuesta: 'El software a la medida es un sistema construido para la forma exacta en que trabaja tu empresa, en lugar de adaptar tu operación a un programa genérico. Lo diseño, lo construyo y lo dejo funcionando en la nube.',
        mensaje: 'Hola Alfredo, quiero cotizar un software a la medida.',
        incluye: {
            titulo: 'Qué incluye',
            lista: [
                ['Levantamiento del proceso', 'Reviso contigo cómo se trabaja hoy, qué se hace a mano y dónde se pierde tiempo o información.'],
                ['Diseño de las pantallas', 'Ves cómo se va a usar el sistema antes de que se programe, y lo ajustamos sobre el diseño.'],
                ['Sistema web y panel administrativo', 'Usuarios con permisos por rol, reportes, exportaciones y bitácora de quién hizo qué.'],
                ['Integraciones', 'Conexión con los sistemas, bancos, pasarelas de pago y servicios que ya usa tu empresa.'],
                ['Servidores en la nube', 'Infraestructura en Amazon Web Services, con respaldos automáticos y alertas.'],
                ['Capacitación y documentación', 'Tu equipo aprende a usarlo y el código queda documentado para quien lo mantenga.'],
            ],
        },
        conviene: {
            titulo: 'Cuándo conviene',
            parrafos: ['Un sistema propio se paga solo cuando el proceso es central para tu negocio y ningún programa comercial lo resuelve bien. Estas son las señales más comunes:'],
            lista: [
                'La operación vive en hojas de Excel que solo una persona entiende.',
                'Tu equipo captura el mismo dato en dos o tres lugares.',
                'Pagas licencias por usuario de un programa del que usas una parte pequeña.',
                'El programa que tienes no se conecta con tus otros sistemas.',
                'Tu forma de trabajar es una ventaja y no quieres cambiarla para caber en un software genérico.',
            ],
            cierre: ['Si un programa comercial ya hace lo que necesitas, te lo digo en la primera llamada: a veces lo mejor es configurar bien uno existente y desarrollar solo la pieza que falta.'],
        },
        casos: { titulo: 'Sistemas que he construido', lista: ['uconstrurama', 'autovision', 'traeme', 'privada'] },
        precio: {
            titulo: 'Cuánto cuesta y cuánto tarda',
            parrafos: [
                'El costo depende del alcance: el número de pantallas, los tipos de usuario y las integraciones. Por eso cotizo con precio fijo por etapas: sabes cuánto cuesta cada una y qué recibes antes de empezarla.',
                'La primera versión de un sistema a la medida suele estar lista en un plazo de dos a cuatro meses. Se empieza por lo que más le duele hoy a tu operación y el resto se agrega en etapas siguientes.',
            ],
        },
        preguntas: [
            ['¿Qué es el software a la medida?', 'Es un sistema desarrollado para una empresa en particular, a partir de sus procesos, en lugar de un programa genérico que se vende igual a todos. La empresa es dueña del código y decide cómo evoluciona.'],
            ['¿Es mejor un software a la medida o uno comercial?', 'Uno comercial conviene cuando tu proceso es estándar, como la contabilidad o la nómina. Uno a la medida conviene cuando el proceso es propio de tu negocio, cuando pagas demasiadas licencias o cuando necesitas conectar varios sistemas entre sí.'],
            ['¿Puedes continuar o corregir un sistema que hizo alguien más?', 'Sí. Primero reviso el código y la infraestructura y te entrego un diagnóstico: qué se puede conservar, qué conviene rehacer y en qué orden.'],
            ['¿Dónde queda instalado el sistema?', 'En servidores de Amazon Web Services, con respaldos automáticos, monitoreo y alertas. Yo los administro como parte del servicio de mantenimiento.'],
        ],
        cierre: 'Cuéntame qué proceso quieres dejar de hacer a mano',
    },
    {
        clave: 'apps',
        ruta: SERVICIOS.apps,
        titulo: 'Desarrollo de apps móviles iOS y Android | Alfredo Barrón',
        descripcion: 'Apps para iPhone y Android con React Native: notificaciones, cámara, mapas y pagos, con publicación en App Store y Google Play. Monterrey y todo México.',
        og: 'apps',
        nombre: 'Desarrollo de apps móviles',
        tipoServicio: 'Desarrollo de aplicaciones móviles para iOS y Android',
        h1: 'Desarrollo de apps móviles para iOS y Android',
        respuesta: 'Desarrollo aplicaciones para iPhone y Android con React Native, una tecnología que permite construir las dos con un solo código. Eso reduce el costo de hacerlas y de mantenerlas, y las dos se publican al mismo tiempo en App Store y Google Play.',
        mensaje: 'Hola Alfredo, quiero cotizar una app móvil.',
        incluye: {
            titulo: 'Qué incluye',
            lista: [
                ['Diseño de la app', 'Pantallas y flujos pensados para usarse con una mano, en claro y en oscuro.'],
                ['App para iOS y Android', 'Un solo código en React Native con Expo, con el comportamiento propio de cada sistema.'],
                ['Funciones del teléfono', 'Notificaciones, cámara, lector de códigos QR, mapas, ubicación y pagos.'],
                ['API y panel de administración', 'El servidor que guarda los datos y el panel web desde donde tu equipo opera.'],
                ['Publicación en las tiendas', 'Cuentas de desarrollador, ficha, capturas, aviso de privacidad y la revisión de Apple y de Google.'],
                ['Actualizaciones', 'Las correcciones llegan a los teléfonos sin esperar una revisión nueva de la tienda, cuando el cambio lo permite.'],
            ],
        },
        conviene: {
            titulo: 'Cuándo conviene una app',
            parrafos: ['Una app vale la inversión cuando tus clientes o tu equipo la van a usar seguido y desde el teléfono. Conviene cuando:'],
            lista: [
                'Necesitas avisar al usuario en el momento, con notificaciones.',
                'El trabajo se hace en la calle, en una bodega o en una caseta, lejos de una computadora.',
                'Se usan la cámara, el lector de códigos o la ubicación.',
                'Tus clientes repiten la misma operación varias veces al mes.',
            ],
            cierre: ['Si el uso va a ser ocasional, casi siempre basta un buen sitio web que funcione en el teléfono, y te lo digo antes de cotizar.'],
        },
        casos: { titulo: 'Apps que he construido', lista: ['traemeApp', 'privadaApp', 'reportr'] },
        precio: {
            titulo: 'Cuánto cuesta y cuánto tarda',
            parrafos: [
                'Depende del número de pantallas, de los tipos de usuario y de si la app necesita su propio servidor y panel. Cotizo con precio fijo por etapas, después de una llamada sin costo.',
                'La primera versión de una app suele tomar de dos a cuatro meses, incluida la revisión de las tiendas.',
            ],
        },
        preguntas: [
            ['¿Con qué tecnología desarrollas las apps?', 'Con React Native y Expo. Con un solo código se generan la app de iOS y la de Android, y las dos usan los componentes nativos de cada sistema.'],
            ['¿Publicas la app en App Store y Google Play?', 'Sí. Me encargo del proceso completo: las cuentas de desarrollador, la ficha, las capturas, el aviso de privacidad y las respuestas a la revisión de Apple y de Google.'],
            ['¿Una app necesita también un sistema web?', 'Casi siempre. La app es lo que usa tu cliente o tu personal en el teléfono; detrás hay un servidor que guarda la información y un panel web desde donde la administras. Construyo las tres piezas.'],
            ['¿La app funciona sin internet?', 'Se puede diseñar para eso cuando el trabajo lo exige. En Privada, por ejemplo, la caseta sigue validando accesos aunque se caiga la conexión y se sincroniza al regresar.'],
        ],
        cierre: 'Cuéntame qué quieres que tus clientes hagan desde el teléfono',
    },
    {
        clave: 'web',
        ruta: SERVICIOS.web,
        titulo: 'Diseño de páginas web en Monterrey | Alfredo Barrón',
        descripcion: 'Sitios web rápidos, claros y bien posicionados en Google, con contacto directo por WhatsApp. Diseño, desarrollo, dominio y hosting. Monterrey.',
        og: 'web',
        nombre: 'Diseño de páginas web',
        tipoServicio: 'Diseño y desarrollo de sitios web',
        h1: 'Diseño de páginas web para negocios',
        respuesta: 'Diseño y desarrollo sitios web que cargan rápido, se leen bien en el teléfono y explican con claridad lo que hace tu negocio. Cada página lleva al visitante a un siguiente paso concreto: escribirte por WhatsApp, pedir una cotización o conocer tu producto.',
        mensaje: 'Hola Alfredo, quiero cotizar una página web.',
        incluye: {
            titulo: 'Qué incluye',
            lista: [
                ['Estructura y textos', 'Ordeno lo que ofreces y te ayudo a decirlo en palabras que tu cliente busca y entiende.'],
                ['Diseño propio', 'Un diseño hecho para tu marca, no una plantilla, que se ve bien en teléfono, tableta y computadora.'],
                ['Posicionamiento en Google', 'Títulos, descripciones, datos estructurados, mapa del sitio y alta en Google Search Console.'],
                ['Contacto directo', 'Botones de WhatsApp, llamada y correo, y medición de cuántas personas te escriben.'],
                ['Dominio, hosting y certificado', 'El sitio queda publicado con tu dominio y con conexión segura.'],
                ['Perfil de Empresa de Google', 'Te ayudo a darlo de alta para que aparezcas en Google Maps y en las búsquedas de tu zona.'],
            ],
        },
        conviene: {
            titulo: 'Qué hace que un sitio funcione',
            parrafos: ['Un sitio de negocio tiene un trabajo: que quien te busca te encuentre, entienda qué haces y te contacte. Para eso cuido cuatro cosas:'],
            lista: [
                'Que cargue en un par de segundos, también con datos móviles.',
                'Que el primer pantallazo diga qué haces, para quién y en dónde.',
                'Que Google y los asistentes de inteligencia artificial puedan leerlo y citarlo.',
                'Que contactarte tome un solo toque.',
            ],
        },
        casos: {
            titulo: 'Sitios que he construido',
            lista: ['uconstrurama', 'autovision', 'traeme', 'privada'],
        },
        muestra: {
            titulo: 'Más sitios',
            bajada: 'Sitios de negocio con su catálogo, sus textos y el contacto directo por WhatsApp.',
            lista: [
                ['moracarcare-web-escritorio', 'Mora Car Care, productos para el cuidado del auto', 1280, 960, 'https://moracarcare.com'],
                ['tamaleslolita-web-escritorio', 'Tamales Lolita, tamales en Guadalupe', 1280, 960, 'https://tamaleslolita.com'],
                ['insequi-web-escritorio', 'INSEQUI, venta y recarga de extintores', 1280, 960, 'https://insequi.com.mx'],
            ],
        },
        precio: {
            titulo: 'Cuánto cuesta y cuánto tarda',
            parrafos: [
                'Depende del número de páginas y de si necesitas catálogo, varios idiomas o integraciones. Te envío una cotización con precio fijo después de una llamada sin costo.',
                'Un sitio web suele estar publicado en unas semanas, contando el diseño, los textos y la revisión contigo.',
            ],
        },
        preguntas: [
            ['¿Usas plantillas o WordPress?', 'No. Cada sitio se diseña y se programa para el negocio. Por eso carga más rápido, no depende de complementos que haya que actualizar y es más difícil de vulnerar.'],
            ['¿Puedo cambiar los textos y las fotos después?', 'Sí. Los cambios menores van incluidos en el plan de mantenimiento, o te dejo el sitio preparado para que tu equipo los haga.'],
            ['¿El sitio va a aparecer en Google?', 'El sitio se entrega optimizado para buscadores y dado de alta en Google Search Console. La posición depende también de la competencia y del tiempo: el posicionamiento se trabaja de forma continua.'],
        ],
        cierre: 'Cuéntame qué vende tu negocio y a quién',
    },
    {
        clave: 'consultoria',
        ruta: SERVICIOS.consultoria,
        titulo: 'Consultoría de software y arquitectura en AWS | Alfredo Barrón',
        descripcion: 'Arquitectura de software, infraestructura en AWS, revisión de código y rescate de proyectos. Una segunda opinión técnica antes de invertir.',
        og: 'consultoria',
        nombre: 'Consultoría de software',
        tipoServicio: 'Consultoría de arquitectura de software e infraestructura en la nube',
        h1: 'Consultoría de software y arquitectura técnica',
        respuesta: 'Reviso tu proyecto de software, tu código o tu infraestructura y te digo con claridad qué está bien, qué es un riesgo y qué haría primero. Sirve antes de invertir en un desarrollo, cuando un proyecto se atoró o cuando tu sistema creció y empezó a fallar.',
        mensaje: 'Hola Alfredo, necesito una consultoría técnica.',
        incluye: {
            titulo: 'En qué puedo ayudarte',
            lista: [
                ['Arquitectura de un sistema nuevo', 'Qué piezas necesita, con qué tecnologías y en qué orden construirlas para no rehacer trabajo.'],
                ['Revisión de código y de seguridad', 'Un diagnóstico por escrito de un sistema existente, con los riesgos ordenados por gravedad.'],
                ['Infraestructura en AWS', 'Servidores, bases de datos, respaldos, permisos, alarmas y costos, puestos en orden.'],
                ['Rescate de proyectos', 'Tomo un desarrollo que quedó a medias o que ya nadie mantiene y lo llevo a producción.'],
                ['Actualización de sistemas', 'Subir de versión un sistema antiguo sin detener la operación.'],
                ['Segunda opinión', 'Reviso la propuesta o la cotización que te dio otro proveedor antes de que firmes.'],
            ],
        },
        conviene: {
            titulo: 'Cuándo pedirla',
            parrafos: ['Una consultoría toma días, no meses, y evita decisiones caras. Suele pedirse cuando:'],
            lista: [
                'Vas a invertir en un sistema y quieres saber si el plan es razonable.',
                'Tu proveedor o tu programador dejó el proyecto y nadie entiende el código.',
                'El sistema se cae, va lento o la factura de la nube no deja de subir.',
                'Tu equipo interno necesita a alguien con experiencia para una decisión de arquitectura.',
            ],
            cierre: ['El resultado es un documento que cualquiera en tu empresa puede leer, con lo que encontré y un plan por prioridades. Si quieres, también me encargo de ejecutarlo.'],
        },
        casos: {
            titulo: 'La experiencia detrás de la consultoría',
            bajada: 'Opero a diario la infraestructura de los sistemas que construyo: servidores, bases de datos, respaldos y despliegues.',
            lista: ['uconstrurama', 'autovision', 'traeme', 'privada'],
        },
        precio: {
            titulo: 'Cómo se cotiza',
            parrafos: [
                'Una revisión o un diagnóstico se cotiza con precio fijo, según el tamaño del sistema. El acompañamiento continuo, por ejemplo como arquitecto externo de tu equipo, se cotiza por mes.',
                'La primera llamada no tiene costo y sirve para saber si de verdad necesitas una consultoría.',
            ],
        },
        preguntas: [
            ['¿Qué hace un arquitecto de software?', 'Decide cómo se organiza un sistema: qué piezas lo forman, cómo se comunican, dónde se guardan los datos y con qué tecnologías se construye. Una buena arquitectura hace que el sistema sea más barato de mantener y más fácil de crecer.'],
            ['¿Puedes revisar un sistema que no hiciste tú?', 'Sí, es lo más común. Necesito acceso de lectura al código y a la infraestructura, y firmo un acuerdo de confidencialidad si tu empresa lo requiere.'],
            ['¿Trabajas con el equipo de desarrollo de mi empresa?', 'Sí. Puedo acompañar a tu equipo como arquitecto externo: definir la arquitectura, revisar el código y ayudar en las decisiones técnicas difíciles.'],
            ['¿Puedes reducir lo que pago de AWS?', 'En muchos casos sí. Reviso qué recursos se usan de verdad, qué se puede reservar, apagar o cambiar de tamaño, y te entrego el ahorro estimado antes de mover nada.'],
        ],
        cierre: 'Cuéntame qué decisión técnica tienes enfrente',
    },
]

// ── Proyectos ───────────────────────────────────────────────────────────

const migasProyecto = nombre => [['/', 'Inicio'], ['/#proyectos', 'Proyectos'], [null, nombre]]

const proyectos = [
    {
        clave: 'uconstrurama',
        ruta: PROYECTOS.uconstrurama,
        nombre: 'Universidad Construrama',
        titulo: 'Universidad Construrama, capacitación en línea | Alfredo Barrón',
        descripcion: 'Cómo construí la plataforma de capacitación de Universidad Construrama: registro de alumnos, cursos, periodos y certificados para una red de distribuidores.',
        og: 'uconstrurama',
        h1: 'Universidad Construrama, la capacitación de una red en una plataforma',
        respuesta: 'Universidad Construrama es la plataforma de capacitación en línea de la red de distribuidores Construrama. Ahí se registran los alumnos, toman sus cursos y obtienen sus certificados. La desarrollé en 2018 y desde entonces la mantengo y la opero.',
        mensaje: 'Hola Alfredo, vi el caso de Universidad Construrama y quiero platicar de un proyecto.',
        antes: {
            titulo: 'El punto de partida',
            lista: [
                'Una red de distribuidores repartida por todo el país.',
                'Colaboradores de cada tienda que necesitan la misma capacitación.',
                'Cursos, periodos y certificados que hay que controlar alumno por alumno.',
            ],
        },
        hoy: {
            titulo: 'Hoy',
            lista: [
                'Los alumnos se registran y se inscriben en línea.',
                'Los cursos se toman desde cualquier lugar, por periodos.',
                'Los certificados se emiten desde la misma plataforma.',
                'El equipo del programa valida alumnos, tiendas y distribuidores.',
            ],
        },
        ficha: [
            ['Tipo', 'Trabajo para cliente'],
            ['Mi papel', 'Desarrollo, mantenimiento y operación de la plataforma'],
            ['Desde', '2018'],
            ['Plataforma', 'Web'],
            ['Tecnología', 'Laravel, Vue y Amazon Web Services'],
            ['Sitio', '<a href="https://uconstrurama.com" rel="noopener">uconstrurama.com</a>'],
        ],
        construi: [
            ['Registro de alumnos', 'Alta de cada colaborador, ligado a su tienda y a su distribuidor.'],
            ['Cursos y periodos', 'El catálogo de cursos y los periodos en los que se abre cada uno.'],
            ['Certificados', 'La emisión de los certificados al terminar un curso.'],
            ['Validación', 'Las herramientas para que el equipo del programa valide alumnos, tiendas y distribuidores.'],
            ['Sitio público', 'Las páginas de cada curso y las novedades del programa.'],
            ['Operación', 'Servidores, respaldos diarios y correo de la plataforma.'],
        ],
        galeria: {
            bajada: 'El sitio público de la plataforma.',
            lista: [['uconstrurama-web-escritorio', 'uconstrurama.com en computadora', 1280, 960], ['uconstrurama-web-movil', 'uconstrurama.com en un teléfono']],
        },
        cierre: '¿Necesitas capacitar o dar servicio a mucha gente a la vez?',
    },
    {
        clave: 'autovision',
        ruta: PROYECTOS.autovision,
        nombre: 'Auto Vision',
        titulo: 'Auto Vision, inventario y catálogo de autopartes | Alfredo Barrón',
        descripcion: 'Cómo construí el sistema de Auto Vision: inventario de autopartes con fotos y ubicación, catálogo en línea y publicación en MercadoLibre.',
        og: 'autovision',
        h1: 'Auto Vision, el inventario de autopartes que también vende en línea',
        respuesta: 'Auto Vision reúne en un mismo sistema a muchas tiendas de autopartes usadas. Cada tienda guarda sus piezas con fotos, el auto al que le quedan y su lugar en la bodega; el cliente las busca por marca, modelo y año en un catálogo en línea, y la tienda las publica en MercadoLibre sin capturarlas dos veces. Desarrollo y opero el sistema desde 2018.',
        mensaje: 'Hola Alfredo, vi el caso de Auto Vision y quiero platicar de un proyecto.',
        antes: {
            titulo: 'El punto de partida',
            lista: [
                'Miles de piezas distintas, cada una única.',
                'Saber si hay una pieza y dónde está depende de quien conoce la bodega.',
                'El cliente tiene que llamar o ir para preguntar.',
                'Publicar en MercadoLibre obliga a capturar la pieza otra vez.',
            ],
        },
        hoy: {
            titulo: 'Hoy',
            lista: [
                'Cada pieza se captura una vez, con fotos, compatibilidad y ubicación.',
                'El cliente busca por auto, modelo y año en el catálogo en línea.',
                'La pieza se publica en MercadoLibre desde el mismo sistema.',
                'Cuando se vende en un lado, deja de ofrecerse en el otro.',
            ],
        },
        ficha: [
            ['Tipo', 'Trabajo para cliente'],
            ['Mi papel', 'Desarrollo, mantenimiento y operación del sistema'],
            ['Desde', '2018'],
            ['Plataforma', 'Web'],
            ['Tecnología', 'Laravel, Vue, Amazon Web Services y la API de MercadoLibre'],
            ['Sitio', '<a href="https://autovision.mx" rel="noopener">autovision.mx</a>'],
        ],
        construi: [
            ['Inventario', 'La captura de cada pieza con fotos, medidas, compatibilidad y su lugar en la bodega.'],
            ['Catálogo en línea', 'La búsqueda pública por auto, modelo y año, con la ficha de cada pieza.'],
            ['Conexión con MercadoLibre', 'Publicar, actualizar y cerrar las publicaciones desde el inventario.'],
            ['Muchas tiendas', 'Cada tienda ve y edita solo lo suyo, con sus usuarios, sus permisos y su cuenta de MercadoLibre.'],
            ['Marcas con su propio sitio', 'El mismo sistema atiende a varias marcas, cada una con su dominio y su logotipo.'],
            ['Operación', 'Servidores, respaldos, despliegues y alertas cuando algo falla.'],
        ],
        galeria: {
            bajada: 'El catálogo público de autopartes.',
            lista: [['autovision-web-escritorio', 'autovision.mx en computadora', 1280, 960], ['autovision-web-movil', 'autovision.mx en un teléfono']],
        },
        cierre: '¿Tu inventario también vive en la memoria de alguien?',
    },
    {
        clave: 'traeme',
        ruta: PROYECTOS.traeme,
        nombre: 'Tráeme',
        titulo: 'Tráeme, app de entregas a domicilio | Alfredo Barrón',
        descripcion: 'Cómo construí Tráeme, la app de los mandados: tres apps para cliente, repartidor y operación sobre una sola API, con seguimiento en el mapa.',
        og: 'traeme',
        h1: 'Tráeme, la app de los mandados',
        respuesta: 'Tráeme es un servicio de entregas a domicilio que lleva comida, súper, farmacia y paquetes en Monterrey e Hidalgo del Parral. Lo fundé en 2019 y construí todo su sistema: una API y tres apps móviles, una para cada persona que participa en un pedido.',
        mensaje: 'Hola Alfredo, vi el caso de Tráeme y quiero platicar de un proyecto.',
        antes: {
            titulo: 'El punto de partida',
            lista: [
                'Los pedidos llegan por llamada y por mensaje.',
                'El precio del envío se calcula de memoria.',
                'Nadie sabe dónde va el repartidor hasta que llega.',
                'La coordinación de los repartidores se hace a mano.',
            ],
        },
        hoy: {
            titulo: 'Hoy',
            lista: [
                'El cliente pide desde su teléfono y ve el costo antes de confirmar.',
                'El envío se cotiza según la distancia entre el punto A y el punto B.',
                'El pedido se sigue en el mapa hasta la puerta.',
                'La operación asigna, vigila los tiempos y recibe alertas desde su propia app.',
            ],
        },
        ficha: [
            ['Tipo', 'Producto propio'],
            ['Mi papel', 'Fundador. Arquitectura, diseño y desarrollo de todo el sistema'],
            ['Desde', '2019'],
            ['Plataformas', 'iOS, Android y web'],
            ['Tecnología', 'Laravel, React Native con Expo, MySQL y Amazon Web Services'],
            ['Sitio', '<a href="https://traeme.app" rel="noopener">traeme.app</a>'],
        ],
        construi: [
            ['Una API para todo', 'Un solo servidor atiende a las tres apps, con las reglas del negocio en un mismo lugar.'],
            ['App del cliente', 'Para pedir, ver el costo del envío antes de confirmar y seguir al repartidor.'],
            ['App del repartidor', 'Recibe los pedidos, navega del punto de recolección al de entrega y reporta cada paso.'],
            ['App de operación', 'Para coordinar pedidos y repartidores, con alertas cuando un pedido se retrasa.'],
            ['Cotización del envío', 'Calcula el precio por kilómetro y considera la espera en la tienda y el clima.'],
            ['Sitio web', 'traeme.app, con la información del servicio para clientes, tiendas y repartidores.'],
        ],
        galeria: {
            bajada: 'El sitio de Tráeme, en teléfono y en computadora.',
            lista: [['traeme-web-escritorio', 'traeme.app en computadora', 1280, 960], ['traeme-web-movil', 'traeme.app en un teléfono']],
        },
        cierre: '¿Tu negocio también mueve cosas de A a B?',
    },
    {
        clave: 'privada',
        ruta: PROYECTOS.privada,
        nombre: 'Privada',
        titulo: 'Privada, software para fraccionamientos | Alfredo Barrón',
        descripcion: 'Cómo construí Privada: dos apps, un panel web y un equipo para la caseta que controlan el acceso con QR, cobran las cuotas y siguen funcionando sin internet.',
        og: 'privada',
        h1: 'Privada, el sistema que pone en orden un fraccionamiento',
        respuesta: 'Privada es un software mexicano para fraccionamientos, privadas y condominios. Une a los residentes, a la caseta y a la administración en un solo sistema: control de acceso con código QR, cobranza de cuotas con morosidad automática y bitácora de entradas y salidas con evidencia. Es un producto propio: lo diseñé y lo construí completo, incluido el equipo que abre la pluma.',
        mensaje: 'Hola Alfredo, vi el caso de Privada y quiero platicar de un proyecto.',
        antes: {
            titulo: 'El punto de partida',
            lista: [
                'La caseta anota las visitas en una libreta.',
                'Las cuotas se llevan en Excel y la cobranza se hace casa por casa.',
                'Los avisos se pierden en el grupo de WhatsApp.',
                'Si se cae el internet, el sistema de acceso deja de funcionar.',
            ],
        },
        hoy: {
            titulo: 'Hoy',
            lista: [
                'Cada visita entra con un código QR que la caseta escanea, y la pluma abre sola.',
                'La casa con cuotas vencidas pierde sus accesos digitales y los recupera al pagar.',
                'Cada entrada y salida queda registrada con hora, puerta, placas y fotos.',
                'La caseta sigue validando accesos sin internet y se sincroniza al regresar la conexión.',
            ],
        },
        ficha: [
            ['Tipo', 'Producto propio'],
            ['Mi papel', 'Diseño, desarrollo, equipo de caseta y operación'],
            ['En las tiendas', 'App Store y Google Play desde 2026'],
            ['Plataformas', 'iOS, Android, web y un equipo instalado en la caseta'],
            ['Tecnología', 'Laravel, Vue, React Native con Expo, Python, Raspberry Pi y Amazon Web Services'],
            ['Sitio', '<a href="https://privada.mx" rel="noopener">privada.mx</a>'],
        ],
        construi: [
            ['App de residentes', 'Para invitar visitas, abrir la pluma desde el teléfono, pagar cuotas, reservar amenidades y recibir avisos.'],
            ['App de caseta', 'El guardia escanea el QR y ve el resultado a pantalla completa, legible a dos metros.'],
            ['Panel de administración', 'Padrón, cobranza, gastos, estado de resultados, avisos y encuestas para la mesa directiva.'],
            ['Privada Box', 'Un equipo en la caseta que valida los accesos ahí mismo y se conecta a las plumas y lectores que ya existen.'],
            ['Doce módulos', 'Accesos, apertura remota, bitácora, pagos, morosidad, gastos, avisos, encuestas, reservaciones, buzón, SOS y documentos.'],
            ['Marca y sitio', 'La identidad de Privada, su sitio privada.mx y las fichas de las dos apps en las tiendas.'],
        ],
        galeria: {
            bajada: 'Las cuatro piezas del sistema: el sitio, el panel de la administración y las dos apps.',
            lista: [
                ['privada-web-escritorio', 'privada.mx, el sitio del producto', 1280, 960],
                ['privada-panel-escritorio', 'El panel web de la administración', 1280, 960],
                ['privada-app-inicio', 'La app de los residentes'],
                ['privada-caseta-inicio', 'La app de la caseta'],
            ],
        },
        cierre: '¿Tu operación también depende de algo físico?',
    },
    {
        clave: 'reportr',
        ruta: PROYECTOS.reportr,
        nombre: 'Reportr',
        titulo: 'Reportr, app de reportes de mantenimiento | Alfredo Barrón',
        descripcion: 'Cómo construí Reportr, una app para reportar desperfectos con fotos, asignarlos a un técnico y seguir cada arreglo hasta cerrarlo.',
        og: 'reportr',
        h1: 'Reportr, del desperfecto reportado al arreglo cerrado',
        respuesta: 'Reportr es una app para reportar desperfectos en edificios. El equipo que los detecta, por ejemplo el de limpieza, crea el reporte con fotos; el jefe de mantenimiento lo asigna a un técnico y todos siguen el avance hasta que queda resuelto. Diseñé y desarrollé la app y su servidor.',
        mensaje: 'Hola Alfredo, vi el caso de Reportr y quiero platicar de un proyecto.',
        antes: {
            titulo: 'El punto de partida',
            lista: [
                'Los desperfectos se reportan de palabra o por mensaje.',
                'No queda claro quién los va a atender.',
                'Quien reportó no se entera de si ya quedó.',
                'No hay historial de qué se arregló ni cuánto tardó.',
            ],
        },
        hoy: {
            titulo: 'Hoy',
            lista: [
                'Cada reporte lleva fotos, edificio, área y prioridad.',
                'El jefe de mantenimiento lo asigna a un técnico con un toque.',
                'El reporte avanza de nuevo a asignado, en progreso, resuelto y cerrado.',
                'Cada cambio llega como aviso al teléfono de quien reportó y de quien atiende.',
            ],
        },
        ficha: [
            ['Tipo', 'Trabajo para cliente'],
            ['Mi papel', 'Diseño y desarrollo de la app y de la API'],
            ['Año', '2026'],
            ['Plataformas', 'Android, con iOS en camino'],
            ['En la tienda', '<a href="https://play.google.com/store/apps/details?id=com.reportr.app" rel="noopener">Reportr en Google Play</a>'],
            ['Tecnología', 'Laravel, React Native con Expo y Amazon Web Services'],
        ],
        construi: [
            ['Reportes con fotos', 'Desde la cámara o la galería, con el edificio, el área y la prioridad.'],
            ['Equipos y jefes', 'Cada equipo tiene un jefe que ve los reportes y el avance de su gente.'],
            ['Asignación', 'El jefe de mantenimiento elige al técnico y el reporte cambia de estatus.'],
            ['Seguimiento', 'Historial de cada cambio y comentarios entre quien reporta y quien atiende.'],
            ['Avisos', 'Notificaciones al crear el reporte, al asignarlo y en cada cambio de estatus.'],
            ['Resumen', 'Un tablero con los reportes por estatus para ver qué está pendiente.'],
        ],
        galeria: {
            bajada: 'Las pantallas principales de la app.',
            lista: [['reportr-reportes', 'Los reportes del equipo'], ['reportr-asignar', 'Asignar un técnico'], ['reportr-seguimiento', 'El historial de un reporte']],
        },
        cierre: '¿Tu equipo también reporta por mensaje?',
    },
]

const noExiste = {
    ruta: '/404.html',
    titulo: 'Esta página no existe | Alfredo Barrón',
    descripcion: 'La página que buscas no existe o cambió de lugar.',
    h1: 'Esta página no existe',
    texto: 'Puede que la dirección esté mal escrita o que la página haya cambiado de lugar. Desde el inicio llegas a los servicios y a los proyectos.',
    boton: 'Ir al inicio',
}

const columnas = {
    servicios: [
        [SERVICIOS.software, 'Software a la medida'],
        [SERVICIOS.apps, 'Apps móviles'],
        [SERVICIOS.web, 'Páginas web'],
        [SERVICIOS.consultoria, 'Consultoría técnica'],
    ],
    proyectos: [
        [PROYECTOS.uconstrurama, 'Universidad Construrama'],
        [PROYECTOS.autovision, 'Auto Vision'],
        [PROYECTOS.traeme, 'Tráeme'],
        [PROYECTOS.privada, 'Privada'],
        [PROYECTOS.reportr, 'Reportr'],
    ],
}

module.exports = { SERVICIOS, PROYECTOS, CASOS, inicio, servicios, proyectos, noExiste, columnas, migasServicio, migasProyecto }
