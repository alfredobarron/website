// English content of alfredobarron.com: home, services and case studies.
// Each service and project carries the same `clave` as its Spanish page in
// datos-es.js; construir.js uses it to pair them (hreflang and the language
// switch). Same rule as in Spanish: only public, verifiable facts.

const SERVICIOS = {
    software: '/en/custom-software-development/',
    apps: '/en/mobile-app-development/',
    web: '/en/web-design/',
    consultoria: '/en/software-consulting/',
}

const PROYECTOS = {
    uconstrurama: '/en/work/universidad-construrama/',
    autovision: '/en/work/auto-vision/',
    traeme: '/en/work/traeme/',
    privada: '/en/work/privada/',
    reportr: '/en/work/reportr/',
}

// Case cards: used on the home page and on the service pages.
const CASOS = {
    traeme: {
        tipo: 'Delivery app, my own product',
        nombre: 'Tráeme',
        url: PROYECTOS.traeme,
        a: 'An errand service that depends on calls and messages: nobody knows where the courier is or what to charge.',
        b: 'Three apps and one API that quote the trip, assign a courier and track every order on the map, in two Mexican cities.',
        enlace: 'Read the Tráeme case',
        imagen: 'traeme-web-escritorio',
        alt: 'Home page of traeme.app',
    },
    autovision: {
        tipo: 'Auto parts inventory and catalog',
        nombre: 'Auto Vision',
        url: PROYECTOS.autovision,
        a: 'Many used auto parts stores, each with thousands of parts: what is in stock, where it is and which car it fits lives in someone\'s memory.',
        b: 'An inventory with photos and a location for every part, an online catalog searched by car and model, and MercadoLibre listings from the same system.',
        enlace: 'Read the Auto Vision case',
        imagen: 'autovision-web-escritorio',
        alt: 'Auto Vision auto parts catalog',
    },
    privada: {
        tipo: 'Software for gated communities, my own product',
        nombre: 'Privada',
        url: PROYECTOS.privada,
        a: 'The gatehouse logs visitors in a notebook, dues live in Excel and notices get lost in a WhatsApp group.',
        b: 'Residents, gatehouse and management in one system: QR access, dues that enforce themselves and a gate that keeps working offline.',
        enlace: 'Read the Privada case',
        imagen: 'privada-web-escritorio',
        alt: 'Privada website with a 3D model of a gated community',
    },
    reportr: {
        tipo: 'Maintenance app, client work',
        nombre: 'Reportr',
        url: PROYECTOS.reportr,
        a: 'Problems in a building are reported by word of mouth or by text, and nobody knows who is handling them or whether they got fixed.',
        b: 'An app where each report carries photos, the manager assigns it to a technician with one tap and everyone is notified at every status change.',
        enlace: 'Read the Reportr case',
        imagen: 'reportr-reportes',
        alt: 'The team\'s report list in the Reportr app',
        movil: true,
    },
    uconstrurama: {
        tipo: 'Training platform',
        nombre: 'Universidad Construrama',
        url: PROYECTOS.uconstrurama,
        a: 'Training a network of retailers spread across the country, with their stores and staff.',
        b: 'An online platform with student registration, courses, terms and certificates, running since 2018.',
        enlace: 'Read the Universidad Construrama case',
        imagen: 'uconstrurama-web-escritorio',
        alt: 'Universidad Construrama website',
    },
}

// On the apps page, Tráeme and Privada are shown with their app, not their website.
CASOS.traemeApp = { ...CASOS.traeme, imagen: 'traeme-app-pedido', alt: 'Tracking an order in the Tráeme app', movil: true }
CASOS.privadaApp = { ...CASOS.privada, imagen: 'privada-app-inicio', alt: 'Home screen of the Privada residents app', movil: true }

const inicio = {
    ruta: '/en/',
    alternos: { 'es-MX': '/', en: '/en/' },
    titulo: 'Custom software and app developer in Mexico | Alfredo Barrón',
    tituloOg: 'Alfredo Barrón: custom software that takes your business from A to B',
    descripcion: 'Software architect in Monterrey, Mexico. I design, build and run web platforms, mobile apps and websites for businesses. The first call is free.',
    og: 'inicio-en',
    portada: {
        titulo: 'Custom software that takes your business from A to B',
        bajada: 'I am Alfredo Barrón, a software architect in Monterrey, Mexico. I design, build and run web platforms and mobile apps for businesses, from the first idea to the day your team uses them at work.',
        enlace: ['#work', 'See my work'],
    },
    ruta_ab: {
        etiqueta: 'Projects: where they started and where they are now',
        rotuloA: 'The starting point',
        rotuloB: 'Today',
        casos: [
            {
                pestana: 'Training',
                a: 'Training a network of retailers spread across the country, with their stores and their staff.',
                b: 'Universidad Construrama: a retail network trained on one platform',
                texto: 'Student registration, online courses, terms and certificates for Construrama retailers and their teams. I built it in 2018 and still run it.',
                datos: ['Web platform', 'Courses and certificates', 'Since 2018'],
                enlace: [PROYECTOS.uconstrurama, 'Read the Universidad Construrama case'],
                imagen: 'uconstrurama-web-movil',
                alt: 'Website of Universidad Construrama',
            },
            {
                pestana: 'Auto parts',
                a: 'Thousands of used auto parts in a warehouse: knowing which ones are in stock, where they are and which car they fit depends on the memory of whoever is at the counter.',
                b: 'Auto Vision: every part with photos, location and price, for sale online',
                texto: 'An inventory where each part is entered with its photos and its place in the warehouse, a public catalog to search by car and model, and MercadoLibre listings published from the same system.',
                datos: ['Inventory and web catalog', 'Connected to MercadoLibre', 'Many stores, since 2018'],
                enlace: [PROYECTOS.autovision, 'Read the Auto Vision case'],
                imagen: 'autovision-web-movil',
                alt: 'Auto Vision auto parts catalog',
            },
            {
                pestana: 'Delivery',
                a: 'An errand service that runs on phone calls and text messages: nobody knows where the courier is or what to charge for the trip.',
                b: 'Tráeme: three apps that quote, assign and track every order',
                texto: 'One app for the customer, one for the courier and one for the operations team, all on a single API. Each order is quoted on the spot and tracked on the map to the door.',
                datos: ['iOS and Android', 'Monterrey and Parral', 'Since 2019'],
                enlace: [PROYECTOS.traeme, 'Read the Tráeme case'],
                imagen: 'traeme-web-movil',
                alt: 'Website of Tráeme, a delivery app',
            },
            {
                pestana: 'Gated communities',
                a: 'The gatehouse writes visitors down in a notebook, dues are tracked in Excel and notices get lost in a WhatsApp group.',
                b: 'Privada: residents, gatehouse and management in one system',
                texto: 'QR code access, dues collection that enforces itself and an entry log with evidence. A device at the gatehouse keeps the barrier working when the internet goes down.',
                datos: ['Two apps on the App Store and Google Play', 'Web dashboard', 'Our own gate hardware'],
                enlace: [PROYECTOS.privada, 'Read the Privada case'],
                imagen: 'privada-web-movil',
                alt: 'Website of Privada, software for gated communities',
            },
        ],
    },
    clientes: {
        titulo: 'Companies and brands I have built software for',
        lista: ['Universidad Construrama', 'Auto Vision', 'Tráeme', 'Privada', 'Mora Car Care', 'Tamales Lolita', 'Master Muñoz', 'AS Comediantes'],
    },
    servicios: {
        id: 'services',
        titulo: 'What I can build for your company',
        bajada: 'Four services that usually go together: a system, the app that goes with it, the website that presents it and the technical judgment to decide well.',
        lista: [
            { nombre: 'Custom software', para: 'Web platforms, dashboards and internal tools', texto: 'A system shaped around the way your business works. It replaces spreadsheets and manual steps, connects with the tools you already use and grows with you in the cloud.', url: SERVICIOS.software, enlace: 'Custom software development' },
            { nombre: 'Mobile apps', para: 'iOS and Android', texto: 'iPhone and Android apps from a single React Native codebase: notifications, camera, maps and payments, plus publishing on the App Store and Google Play.', url: SERVICIOS.apps, enlace: 'Mobile app development' },
            { nombre: 'Websites', para: 'Business and product sites', texto: 'Fast, clear pages that rank well on Google, explain what you do and lead visitors to contact you.', url: SERVICIOS.web, enlace: 'Web design' },
            { nombre: 'Technical consulting', para: 'Architecture, AWS and project rescue', texto: 'A second opinion before you invest, the architecture for a new system, an AWS setup put in order, or help with a project that got stuck.', url: SERVICIOS.consultoria, enlace: 'Software consulting' },
        ],
    },
    proyectos: {
        id: 'work',
        titulo: 'Projects I designed, built and still run',
        bajada: 'Each one started at a point A, with a process done by hand, and is now a system in production.',
        rotuloA: 'Before',
        rotuloB: 'Today',
        casos: [CASOS.uconstrurama, CASOS.autovision, CASOS.traeme, CASOS.privada],
        otros: {
            titulo: 'I have also built',
            lista: [
                [PROYECTOS.reportr, 'Reportr', 'Maintenance report app'],
                ['https://moracarcare.com', 'Mora Car Care', 'Website and product catalog'],
                ['https://tamaleslolita.com', 'Tamales Lolita', 'Website with WhatsApp ordering'],
                ['https://insequi.com.mx', 'INSEQUI', 'Website for fire extinguisher sales and refills'],
            ],
        },
    },
    pasos: {
        id: 'process',
        titulo: 'How I work, from A to B',
        bajada: 'You talk to the person who designs and builds your software, from start to finish.',
        lista: [
            ['Call', 'You tell me how your business works today and where you want to get. It is free.'],
            ['Proposal', 'You get the scope in writing, with a fixed price per stage and delivery dates.'],
            ['Build', 'I work in stages, and at each one you test something that already works.'],
            ['Launch', 'I leave the system on your servers, the apps in the stores and your team trained.'],
            ['Operation', 'I stay in charge of maintenance, monitoring and the improvements your business asks for.'],
        ],
    },
    sobre: {
        id: 'about',
        titulo: 'Who builds your software',
        parrafos: [
            'I am Alfredo Barrón, a software architect and full stack developer in Monterrey, Mexico. I have spent more than 15 years building web and mobile applications for companies in telecommunications, logistics, automotive, healthcare and financial services.',
            'Besides client work, I have created my own products: Tráeme, a delivery app, and Privada, a system for gated communities that includes the device that opens the gate. That is why I know the whole road: design, code, app store publishing, server operations and support.',
            'I work directly with business owners and directors, remotely with companies across Mexico and the United States, and in person in the Monterrey area.',
        ],
        hechos: [
            ['More than 15 years', 'building software for businesses'],
            ['Founder of Tráeme', 'a delivery app, since 2019'],
            ['Creator of Privada', 'with apps on the App Store and Google Play'],
            ['Author of Smoke', 'an open source library with more than 380 stars on GitHub'],
            ['Laravel, Vue, React Native, Python, AWS and AI', 'the tools I work with every day'],
        ],
        foto: 'Alfredo Barrón, software architect',
        trayectoria: {
            titulo: 'Background',
            lista: [
                ['2025 to date', 'Doble Dígito', 'Software Architect', 'I design and build APIs and platforms with Python and FastAPI.'],
                ['2019 to date', 'Tráeme', 'Founder', 'Designed, built and launched every piece of a delivery app, and I run its technology and its business.'],
                ['2022 to 2024', 'Connectivity Solutions', 'Development Manager', 'Led the development of a platform that monitors network devices in real time, with Laravel, React and AWS.'],
                ['2020 to 2022', 'Gericare', 'Technology Lead', 'Ran technology for the group: its systems, apps and websites, with Laravel, Vue and AWS.'],
                ['2013 to 2018', 'Vialux', 'Lead Full Stack Developer', 'Developed an ERP with budgeting, procurement, reporting and SAP connectivity, with Laravel, Angular and AWS.'],
                ['2012 to 2013', 'Tecnológico de Monterrey', 'Senior Full Stack Developer', 'Helped turn university courses into web formats that read well on phones and tablets.'],
            ],
        },
    },
    preguntas: {
        id: 'faq',
        titulo: 'Frequently asked questions',
        lista: [
            ['How much does custom software or an app cost?', 'It depends on the scope: how many screens, how many types of user and which other systems it connects to. After a free call I send you a quote with a fixed price per stage, so you know the cost and the dates before we start.'],
            ['How long does a project take?', 'A website usually takes a few weeks. A custom system or a mobile app takes two to four months for a first version your team can already use; after that it keeps improving in stages.'],
            ['Do you work with companies outside Mexico?', 'Yes. I work remotely with companies across Mexico and the United States, in English or Spanish, and in person in the Monterrey area when the project calls for it.'],
            ['Do you publish the app on the App Store and Google Play?', 'Yes. I handle the developer accounts, the store listing, the privacy policy, the Apple and Google reviews and the updates that follow.'],
            ['Do you offer support after launch?', 'Yes. I offer monthly maintenance plans that cover hosting, monitoring, bug fixes and the new features your business asks for.'],
            ['Do you work alone or with a team?', 'You always deal with me: I am the one who designs the solution and the one who writes the code. When a project needs it, I bring in specialists I trust and I remain responsible.'],
            ['What technologies do you use?', 'Laravel (PHP) on the server, Vue for web dashboards, React Native with Expo for iOS and Android apps, and Amazon Web Services for infrastructure. I also use Python with FastAPI for APIs and services, and AI assists me through the whole development process. They all have large communities, so any other team can continue the project.'],
        ],
    },
}


// ── Services ────────────────────────────────────────────────────────────

const servicios = [
    {
        clave: 'software',
        ruta: SERVICIOS.software,
        titulo: 'Custom software development in Mexico | Alfredo Barrón',
        descripcion: 'Web platforms, dashboards and internal tools shaped around the way your company works. Fixed price per stage. From Monterrey, for Mexico and the US.',
        og: 'software-en',
        nombre: 'Custom software development',
        tipoServicio: 'Custom software development',
        h1: 'Custom software development for businesses',
        respuesta: 'Custom software is a system built for the exact way your company works, instead of bending your operation to fit a generic program. I design it, build it and leave it running in the cloud.',
        mensaje: 'Hi Alfredo, I would like a quote for custom software.',
        incluye: {
            titulo: 'What is included',
            lista: [
                ['Process review', 'We go over how the work is done today, what is done by hand and where time or information gets lost.'],
                ['Screen design', 'You see how the system will be used before it is coded, and we adjust it on the design.'],
                ['Web system and admin dashboard', 'Users with role-based permissions, reports, exports and a log of who did what.'],
                ['Integrations', 'Connections to the systems, banks, payment gateways and services your company already uses.'],
                ['Cloud servers', 'Infrastructure on Amazon Web Services, with automatic backups and alerts.'],
                ['Training and documentation', 'Your team learns to use it and the code is documented for whoever maintains it.'],
            ],
        },
        conviene: {
            titulo: 'When it is worth it',
            parrafos: ['A system of your own pays for itself when the process is central to your business and no off-the-shelf program handles it well. These are the most common signs:'],
            lista: [
                'The operation lives in spreadsheets that only one person understands.',
                'Your team types the same data into two or three places.',
                'You pay per-user licenses for a program you only use a small part of.',
                'The program you have does not connect with your other systems.',
                'The way you work is an advantage, and you do not want to change it to fit generic software.',
            ],
            cierre: ['If an off-the-shelf program already does what you need, I tell you on the first call: sometimes the best move is to set up an existing one properly and build only the missing piece.'],
        },
        casos: { titulo: 'Systems I have built', lista: ['uconstrurama', 'autovision', 'traeme', 'privada'] },
        precio: {
            titulo: 'What it costs and how long it takes',
            parrafos: [
                'The cost depends on the scope: the number of screens, the types of user and the integrations. That is why I quote a fixed price per stage: you know what each one costs and what you get before it starts.',
                'The first version of a custom system is usually ready in two to four months. We start with what hurts your operation most today, and the rest is added in later stages.',
            ],
        },
        preguntas: [
            ['What is custom software?', 'It is a system developed for one particular company, starting from its processes, instead of a generic program sold the same way to everyone. The company owns the code and decides how it evolves.'],
            ['Is custom software better than off-the-shelf software?', 'Off-the-shelf software makes sense when your process is standard, like accounting or payroll. Custom software makes sense when the process is specific to your business, when you pay for too many licenses or when you need several systems to talk to each other.'],
            ['Can you continue or fix a system someone else built?', 'Yes. I first review the code and the infrastructure and give you a diagnosis: what can be kept, what should be redone and in what order.'],
            ['Where is the system hosted?', 'On Amazon Web Services servers, with automatic backups, monitoring and alerts. I manage them as part of the maintenance service.'],
        ],
        cierre: 'Tell me which process you want to stop doing by hand',
    },
    {
        clave: 'apps',
        ruta: SERVICIOS.apps,
        titulo: 'iOS and Android app development in Mexico | Alfredo Barrón',
        descripcion: 'iPhone and Android apps built with React Native: notifications, camera, maps and payments, published on the App Store and Google Play. Based in Monterrey.',
        og: 'apps-en',
        nombre: 'Mobile app development',
        tipoServicio: 'Mobile app development for iOS and Android',
        h1: 'Mobile app development for iOS and Android',
        respuesta: 'I build iPhone and Android apps with React Native, a technology that produces both from a single codebase. That lowers the cost of building and maintaining them, and both go live at the same time on the App Store and Google Play.',
        mensaje: 'Hi Alfredo, I would like a quote for a mobile app.',
        incluye: {
            titulo: 'What is included',
            lista: [
                ['App design', 'Screens and flows meant to be used with one hand, in light and dark mode.'],
                ['App for iOS and Android', 'A single React Native codebase with Expo, with the behavior each system expects.'],
                ['Phone features', 'Notifications, camera, QR code scanner, maps, location and payments.'],
                ['API and admin dashboard', 'The server that stores the data and the web dashboard your team works from.'],
                ['App store publishing', 'Developer accounts, store listing, screenshots, privacy policy and the Apple and Google reviews.'],
                ['Updates', 'Fixes reach the phones without waiting for a new store review, when the change allows it.'],
            ],
        },
        conviene: {
            titulo: 'When an app is worth it',
            parrafos: ['An app is worth the investment when your customers or your team will use it often, and from their phones. It makes sense when:'],
            lista: [
                'You need to reach the user right away, with notifications.',
                'The work happens on the street, in a warehouse or at a gatehouse, away from a computer.',
                'It uses the camera, a code scanner or the location.',
                'Your customers repeat the same task several times a month.',
            ],
            cierre: ['If it will only be used now and then, a good website that works on the phone is almost always enough, and I tell you so before quoting.'],
        },
        casos: { titulo: 'Apps I have built', lista: ['traemeApp', 'privadaApp', 'reportr'] },
        precio: {
            titulo: 'What it costs and how long it takes',
            parrafos: [
                'It depends on the number of screens, the types of user and whether the app needs its own server and dashboard. I quote a fixed price per stage, after a free call.',
                'The first version of an app usually takes two to four months, including the store reviews.',
            ],
        },
        preguntas: [
            ['What technology do you build apps with?', 'React Native and Expo. A single codebase produces the iOS app and the Android app, and both use the native components of each system.'],
            ['Do you publish the app on the App Store and Google Play?', 'Yes. I handle the whole process: the developer accounts, the listing, the screenshots, the privacy policy and the replies to the Apple and Google reviews.'],
            ['Does an app also need a web system?', 'Almost always. The app is what your customer or your staff uses on the phone; behind it there is a server that stores the information and a web dashboard you manage it from. I build all three.'],
            ['Does the app work offline?', 'It can be designed for that when the job requires it. In Privada, for example, the gatehouse keeps validating access when the connection drops and syncs when it comes back.'],
        ],
        cierre: 'Tell me what you want your customers to do from their phones',
    },
    {
        clave: 'web',
        ruta: SERVICIOS.web,
        titulo: 'Web design for businesses in Mexico | Alfredo Barrón',
        descripcion: 'Fast, clear websites that rank well on Google, with direct contact through WhatsApp. Design, development, domain and hosting. Based in Monterrey.',
        og: 'web-en',
        nombre: 'Web design',
        tipoServicio: 'Website design and development',
        h1: 'Web design for businesses',
        respuesta: 'I design and build websites that load fast, read well on a phone and explain clearly what your business does. Every page leads the visitor to a concrete next step: messaging you on WhatsApp, asking for a quote or getting to know your product.',
        mensaje: 'Hi Alfredo, I would like a quote for a website.',
        incluye: {
            titulo: 'What is included',
            lista: [
                ['Structure and copy', 'I organize what you offer and help you say it in the words your customer searches for and understands.'],
                ['Original design', 'A design made for your brand, not a template, that looks right on phone, tablet and computer.'],
                ['Search engine optimization', 'Titles, descriptions, structured data, a sitemap and Google Search Console set up.'],
                ['Direct contact', 'WhatsApp, call and email buttons, and tracking of how many people get in touch.'],
                ['Domain, hosting and certificate', 'The site goes live on your domain, over a secure connection.'],
                ['Google Business Profile', 'I help you set it up so you show up on Google Maps and in local searches.'],
            ],
        },
        conviene: {
            titulo: 'What makes a website work',
            parrafos: ['A business website has one job: that whoever is looking for you finds you, understands what you do and gets in touch. For that I take care of four things:'],
            lista: [
                'That it loads in a couple of seconds, on mobile data too.',
                'That the first screen says what you do, for whom and where.',
                'That Google and AI assistants can read it and cite it.',
                'That contacting you takes a single tap.',
            ],
        },
        casos: {
            titulo: 'Websites I have built',
            lista: ['uconstrurama', 'autovision', 'traeme', 'privada'],
        },
        muestra: {
            titulo: 'More websites',
            bajada: 'Business websites with their catalog, their copy and direct contact through WhatsApp.',
            lista: [
                ['moracarcare-web-escritorio', 'Mora Car Care, car care products', 1280, 960, 'https://moracarcare.com'],
                ['tamaleslolita-web-escritorio', 'Tamales Lolita, tamales in Guadalupe, Mexico', 1280, 960, 'https://tamaleslolita.com'],
                ['insequi-web-escritorio', 'INSEQUI, fire extinguisher sales and refills', 1280, 960, 'https://insequi.com.mx'],
            ],
        },
        precio: {
            titulo: 'What it costs and how long it takes',
            parrafos: [
                'It depends on the number of pages and on whether you need a catalog, several languages or integrations. I send you a fixed-price quote after a free call.',
                'A website is usually live in a few weeks, counting the design, the copy and the review with you.',
            ],
        },
        preguntas: [
            ['Do you use templates or WordPress?', 'No. Each site is designed and coded for the business. That is why it loads faster, does not depend on plugins that need updating and is harder to break into.'],
            ['Can I change the text and photos later?', 'Yes. Minor changes are included in the maintenance plan, or I leave the site ready for your team to make them.'],
            ['Will the site show up on Google?', 'The site is delivered optimized for search engines and registered in Google Search Console. The ranking also depends on the competition and on time: search positioning is ongoing work.'],
        ],
        cierre: 'Tell me what your business sells and to whom',
    },
    {
        clave: 'consultoria',
        ruta: SERVICIOS.consultoria,
        titulo: 'Software consulting and AWS architecture | Alfredo Barrón',
        descripcion: 'Software architecture, AWS infrastructure, code review and project rescue. A second technical opinion before you invest.',
        og: 'consultoria-en',
        nombre: 'Software consulting',
        tipoServicio: 'Software architecture and cloud infrastructure consulting',
        h1: 'Software consulting and technical architecture',
        respuesta: 'I review your software project, your code or your infrastructure and tell you plainly what is fine, what is a risk and what I would do first. It helps before investing in a build, when a project got stuck or when your system grew and started to fail.',
        mensaje: 'Hi Alfredo, I need technical consulting.',
        incluye: {
            titulo: 'How I can help',
            lista: [
                ['Architecture for a new system', 'Which pieces it needs, with which technologies and in what order to build them so no work is redone.'],
                ['Code and security review', 'A written diagnosis of an existing system, with the risks ranked by severity.'],
                ['AWS infrastructure', 'Servers, databases, backups, permissions, alarms and costs, put in order.'],
                ['Project rescue', 'I take over a build that was left half done, or that nobody maintains anymore, and get it to production.'],
                ['System upgrades', 'Moving an old system to current versions without stopping the operation.'],
                ['Second opinion', 'I review the proposal or the quote another vendor gave you before you sign.'],
            ],
        },
        conviene: {
            titulo: 'When to ask for it',
            parrafos: ['A consulting engagement takes days, not months, and prevents expensive decisions. It is usually requested when:'],
            lista: [
                'You are about to invest in a system and want to know whether the plan is reasonable.',
                'Your vendor or your developer left the project and nobody understands the code.',
                'The system goes down, runs slow or the cloud bill keeps climbing.',
                'Your in-house team needs someone experienced for an architecture decision.',
            ],
            cierre: ['The result is a document anyone in your company can read, with what I found and a plan ordered by priority. If you want, I also carry it out.'],
        },
        casos: {
            titulo: 'The experience behind the consulting',
            bajada: 'Every day I run the infrastructure of the systems I build: servers, databases, backups and deployments.',
            lista: ['uconstrurama', 'autovision', 'traeme', 'privada'],
        },
        precio: {
            titulo: 'How it is quoted',
            parrafos: [
                'A review or a diagnosis is quoted at a fixed price, according to the size of the system. Ongoing support, for example as your team\'s external architect, is quoted per month.',
                'The first call is free and helps to find out whether you really need consulting.',
            ],
        },
        preguntas: [
            ['What does a software architect do?', 'Decides how a system is organized: which pieces make it up, how they communicate, where the data is stored and which technologies it is built with. Good architecture makes the system cheaper to maintain and easier to grow.'],
            ['Can you review a system you did not build?', 'Yes, that is the most common case. I need read access to the code and the infrastructure, and I sign a non-disclosure agreement if your company requires it.'],
            ['Do you work with my company\'s development team?', 'Yes. I can work alongside your team as an external architect: defining the architecture, reviewing the code and helping with the hard technical decisions.'],
            ['Can you lower my AWS bill?', 'In many cases, yes. I review which resources are really used, what can be reserved, turned off or resized, and I give you the estimated savings before touching anything.'],
        ],
        cierre: 'Tell me which technical decision you are facing',
    },
]

// ── Work ────────────────────────────────────────────────────────────────

const proyectos = [
    {
        clave: 'uconstrurama',
        ruta: PROYECTOS.uconstrurama,
        nombre: 'Universidad Construrama',
        titulo: 'Universidad Construrama, online training | Alfredo Barrón',
        descripcion: 'How I built the Universidad Construrama training platform: student registration, courses, terms and certificates for a network of retailers.',
        og: 'uconstrurama-en',
        h1: 'Universidad Construrama, a retail network trained on one platform',
        respuesta: 'Universidad Construrama is the online training platform of the Construrama retail network, a chain of building materials stores in Mexico. Students register there, take their courses and earn their certificates. I built it in 2018 and have maintained and run it ever since.',
        mensaje: 'Hi Alfredo, I saw the Universidad Construrama case and would like to talk about a project.',
        antes: {
            titulo: 'The starting point',
            lista: [
                'A network of retailers spread across the country.',
                'Staff at every store who need the same training.',
                'Courses, terms and certificates to keep track of, student by student.',
            ],
        },
        hoy: {
            titulo: 'Today',
            lista: [
                'Students register and enroll online.',
                'Courses are taken from anywhere, by term.',
                'Certificates are issued from the same platform.',
                'The program team validates students, stores and retailers.',
            ],
        },
        ficha: [
            ['Type', 'Client work'],
            ['My role', 'Development, maintenance and operation of the platform'],
            ['Since', '2018'],
            ['Platform', 'Web'],
            ['Technology', 'Laravel, Vue and Amazon Web Services'],
            ['Website', '<a href="https://uconstrurama.com" rel="noopener">uconstrurama.com</a>'],
        ],
        construi: [
            ['Student registration', 'Each staff member is signed up and linked to their store and their retailer.'],
            ['Courses and terms', 'The course catalog and the terms in which each one opens.'],
            ['Certificates', 'Certificates issued when a course is completed.'],
            ['Validation', 'The tools the program team uses to validate students, stores and retailers.'],
            ['Public website', 'The pages for each course and the program news.'],
            ['Operation', 'Servers, daily backups and the platform\'s email.'],
        ],
        galeria: {
            bajada: 'The public website of the platform.',
            lista: [['uconstrurama-web-escritorio', 'uconstrurama.com on a computer', 1280, 960], ['uconstrurama-web-movil', 'uconstrurama.com on a phone']],
        },
        cierre: 'Do you need to train or serve many people at once?',
    },
    {
        clave: 'autovision',
        ruta: PROYECTOS.autovision,
        nombre: 'Auto Vision',
        titulo: 'Auto Vision, auto parts inventory and catalog | Alfredo Barrón',
        descripcion: 'How I built the Auto Vision system: an auto parts inventory with photos and locations, an online catalog and MercadoLibre listings.',
        og: 'autovision-en',
        h1: 'Auto Vision, the auto parts inventory that also sells online',
        respuesta: 'Auto Vision brings many used auto parts stores in Mexico into one system. Each store records its parts with photos, the car they fit and their place in the warehouse; the customer searches by make, model and year in an online catalog, and the store lists them on MercadoLibre without typing them in twice. I have built and run the system since 2018.',
        mensaje: 'Hi Alfredo, I saw the Auto Vision case and would like to talk about a project.',
        antes: {
            titulo: 'The starting point',
            lista: [
                'Thousands of different parts, each one unique.',
                'Knowing whether a part is in stock, and where, depends on whoever knows the warehouse.',
                'The customer has to call or drop by to ask.',
                'Listing on MercadoLibre means typing the part in again.',
            ],
        },
        hoy: {
            titulo: 'Today',
            lista: [
                'Each part is entered once, with photos, fitment and location.',
                'The customer searches by car, model and year in the online catalog.',
                'The part is listed on MercadoLibre from the same system.',
                'When it sells in one place, it stops being offered in the other.',
            ],
        },
        ficha: [
            ['Type', 'Client work'],
            ['My role', 'Development, maintenance and operation of the system'],
            ['Since', '2018'],
            ['Platform', 'Web'],
            ['Technology', 'Laravel, Vue, Amazon Web Services and the MercadoLibre API'],
            ['Website', '<a href="https://autovision.mx" rel="noopener">autovision.mx</a>'],
        ],
        construi: [
            ['Inventory', 'Each part is entered with photos, measurements, fitment and its place in the warehouse.'],
            ['Online catalog', 'Public search by car, model and year, with a page for every part.'],
            ['MercadoLibre connection', 'Publishing, updating and closing listings from the inventory.'],
            ['Many stores', 'Each store sees and edits only its own parts, with its users, its permissions and its MercadoLibre account.'],
            ['Brands with their own site', 'The same system serves several brands, each with its domain and its logo.'],
            ['Operation', 'Servers, backups, deployments and alerts when something fails.'],
        ],
        galeria: {
            bajada: 'The public auto parts catalog.',
            lista: [['autovision-web-escritorio', 'autovision.mx on a computer', 1280, 960], ['autovision-web-movil', 'autovision.mx on a phone']],
        },
        cierre: 'Does your inventory also live in someone\'s memory?',
    },
    {
        clave: 'traeme',
        ruta: PROYECTOS.traeme,
        nombre: 'Tráeme',
        titulo: 'Tráeme, a delivery app in Mexico | Alfredo Barrón',
        descripcion: 'How I built Tráeme, a delivery app: three apps for the customer, the courier and operations on a single API, with live tracking on the map.',
        og: 'traeme-en',
        h1: 'Tráeme, the app that runs your errands',
        respuesta: 'Tráeme is a delivery service that brings food, groceries, pharmacy orders and packages in Monterrey and Hidalgo del Parral, Mexico. I founded it in 2019 and built its whole system: one API and three mobile apps, one for each person who takes part in an order.',
        mensaje: 'Hi Alfredo, I saw the Tráeme case and would like to talk about a project.',
        antes: {
            titulo: 'The starting point',
            lista: [
                'Orders come in by phone call and by text.',
                'The delivery price is worked out from memory.',
                'Nobody knows where the courier is until they arrive.',
                'Couriers are coordinated by hand.',
            ],
        },
        hoy: {
            titulo: 'Today',
            lista: [
                'The customer orders from their phone and sees the cost before confirming.',
                'The trip is quoted by the distance between point A and point B.',
                'The order is tracked on the map all the way to the door.',
                'Operations assigns, watches the times and gets alerts from its own app.',
            ],
        },
        ficha: [
            ['Type', 'My own product'],
            ['My role', 'Founder. Architecture, design and development of the whole system'],
            ['Since', '2019'],
            ['Platforms', 'iOS, Android and web'],
            ['Technology', 'Laravel, React Native with Expo, MySQL and Amazon Web Services'],
            ['Website', '<a href="https://traeme.app" rel="noopener">traeme.app</a>'],
        ],
        cifras: [
            ['Orders delivered', 'More than 100,000'],
            ['Registered stores', 'More than 500'],
            ['Registered users', '19,000'],
            ['Couriers', 'More than 300'],
        ],
        construi: [
            ['One API for everything', 'A single server handles the three apps, with the business rules in one place.'],
            ['Customer app', 'To order, see the delivery cost before confirming and follow the courier.'],
            ['Courier app', 'Receives the orders, navigates from pickup to drop-off and reports every step.'],
            ['Operations app', 'To coordinate orders and couriers, with alerts when an order runs late.'],
            ['Delivery pricing', 'Calculates the price per kilometer and accounts for the wait at the store and the weather.'],
            ['Website', 'traeme.app, with the service information for customers, stores and couriers.'],
        ],
        galeria: {
            bajada: 'The Tráeme website, on a phone and on a computer.',
            lista: [['traeme-web-escritorio', 'traeme.app on a computer', 1280, 960], ['traeme-web-movil', 'traeme.app on a phone']],
        },
        cierre: 'Does your business also move things from A to B?',
    },
    {
        clave: 'privada',
        ruta: PROYECTOS.privada,
        nombre: 'Privada',
        titulo: 'Privada, software for gated communities | Alfredo Barrón',
        descripcion: 'How I built Privada: two apps, a web dashboard and a gatehouse device that control access with QR codes, collect dues and keep working offline.',
        og: 'privada-en',
        h1: 'Privada, the system that puts a gated community in order',
        respuesta: 'Privada is Mexican software for gated communities and condominiums. It brings residents, the gatehouse and management into one system: access control with QR codes, dues collection that enforces itself and an entry and exit log with evidence. It is my own product: I designed and built all of it, including the device that opens the barrier.',
        mensaje: 'Hi Alfredo, I saw the Privada case and would like to talk about a project.',
        antes: {
            titulo: 'The starting point',
            lista: [
                'The gatehouse writes visitors down in a notebook.',
                'Dues are tracked in Excel and collected door to door.',
                'Notices get lost in a WhatsApp group.',
                'If the internet goes down, the access system stops working.',
            ],
        },
        hoy: {
            titulo: 'Today',
            lista: [
                'Every visitor comes in with a QR code the gatehouse scans, and the barrier opens on its own.',
                'A home with overdue dues loses its digital access and gets it back on payment.',
                'Every entry and exit is recorded with time, gate, license plate and photos.',
                'The gatehouse keeps validating access without internet and syncs when the connection returns.',
            ],
        },
        ficha: [
            ['Type', 'My own product'],
            ['My role', 'Design, development, gatehouse device and operation'],
            ['In the stores', 'App Store and Google Play since 2026'],
            ['Platforms', 'iOS, Android, web and a device installed at the gatehouse'],
            ['Technology', 'Laravel, Vue, React Native with Expo, Python, Raspberry Pi and Amazon Web Services'],
            ['Website', '<a href="https://privada.mx" rel="noopener">privada.mx</a>'],
        ],
        construi: [
            ['Residents app', 'To invite visitors, open the barrier from the phone, pay dues, book amenities and receive notices.'],
            ['Gatehouse app', 'The guard scans the QR code and sees the result full screen, readable from two meters away.'],
            ['Management dashboard', 'Resident roster, collections, expenses, income statement, notices and polls for the board.'],
            ['Privada Box', 'A device at the gatehouse that validates access on site and connects to the barriers and readers already installed.'],
            ['Twelve modules', 'Access, remote opening, entry log, payments, overdue dues, expenses, notices, polls, bookings, inbox, SOS and documents.'],
            ['Brand and website', 'The Privada identity, its website privada.mx and the store listings of both apps.'],
        ],
        galeria: {
            bajada: 'The four pieces of the system: the website, the management dashboard and the two apps.',
            lista: [
                ['privada-web-escritorio', 'privada.mx, the product website', 1280, 960],
                ['privada-panel-escritorio', 'The management web dashboard', 1280, 960],
                ['privada-app-inicio', 'The residents app'],
                ['privada-caseta-inicio', 'The gatehouse app'],
            ],
        },
        cierre: 'Does your operation also depend on something physical?',
    },
    {
        clave: 'reportr',
        ruta: PROYECTOS.reportr,
        nombre: 'Reportr',
        titulo: 'Reportr, a maintenance report app | Alfredo Barrón',
        descripcion: 'How I built Reportr, an app to report building problems with photos, assign them to a technician and follow each repair until it is closed.',
        og: 'reportr-en',
        h1: 'Reportr, from the reported problem to the closed repair',
        respuesta: 'Reportr is an app for reporting problems in buildings. The team that spots them, for example the cleaning crew, creates the report with photos; the maintenance manager assigns it to a technician and everyone follows the progress until it is fixed. I designed and built the app and its server.',
        mensaje: 'Hi Alfredo, I saw the Reportr case and would like to talk about a project.',
        antes: {
            titulo: 'The starting point',
            lista: [
                'Problems are reported by word of mouth or by text.',
                'It is not clear who is going to handle them.',
                'Whoever reported it never finds out whether it got fixed.',
                'There is no record of what was repaired or how long it took.',
            ],
        },
        hoy: {
            titulo: 'Today',
            lista: [
                'Each report carries photos, building, area and priority.',
                'The maintenance manager assigns it to a technician with one tap.',
                'The report moves from new to assigned, in progress, resolved and closed.',
                'Every change reaches the phone of whoever reported it and whoever is handling it.',
            ],
        },
        ficha: [
            ['Type', 'Client work'],
            ['My role', 'Design and development of the app and the API'],
            ['Year', '2026'],
            ['Platforms', 'Android, with iOS on the way'],
            ['In the store', '<a href="https://play.google.com/store/apps/details?id=com.reportr.app" rel="noopener">Reportr on Google Play</a>'],
            ['Technology', 'Laravel, React Native with Expo and Amazon Web Services'],
        ],
        construi: [
            ['Reports with photos', 'From the camera or the gallery, with the building, the area and the priority.'],
            ['Teams and managers', 'Each team has a manager who sees the reports and the progress of their people.'],
            ['Assignment', 'The maintenance manager picks the technician and the report changes status.'],
            ['Follow-up', 'A history of every change and comments between whoever reports and whoever handles it.'],
            ['Notifications', 'Alerts when the report is created, when it is assigned and at every status change.'],
            ['Summary', 'A board with the reports by status to see what is pending.'],
        ],
        galeria: {
            bajada: 'The main screens of the app.',
            lista: [['reportr-reportes', 'The team\'s reports'], ['reportr-asignar', 'Assigning a technician'], ['reportr-seguimiento', 'The history of a report']],
        },
        cierre: 'Does your team also report by text?',
    },
]

const columnas = {
    servicios: [
        [SERVICIOS.software, 'Custom software'],
        [SERVICIOS.apps, 'Mobile apps'],
        [SERVICIOS.web, 'Websites'],
        [SERVICIOS.consultoria, 'Technical consulting'],
    ],
    proyectos: [
        [PROYECTOS.uconstrurama, 'Universidad Construrama'],
        [PROYECTOS.autovision, 'Auto Vision'],
        [PROYECTOS.traeme, 'Tráeme'],
        [PROYECTOS.privada, 'Privada'],
        [PROYECTOS.reportr, 'Reportr'],
    ],
}

module.exports = { SERVICIOS, PROYECTOS, CASOS, inicio, servicios, proyectos, columnas }
