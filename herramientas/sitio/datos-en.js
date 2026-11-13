// English home page of alfredobarron.com. Only the home is translated: the
// service and project pages live in Spanish, so the English cards link to
// each project's live site.

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
                enlace: ['https://uconstrurama.com', 'Visit uconstrurama.com'],
                imagen: 'uconstrurama-web-movil',
                alt: 'Website of Universidad Construrama',
            },
            {
                pestana: 'Auto parts',
                a: 'Thousands of used auto parts in a warehouse: knowing which ones are in stock, where they are and which car they fit depends on the memory of whoever is at the counter.',
                b: 'Auto Vision: every part with photos, location and price, for sale online',
                texto: 'An inventory where each part is entered with its photos and its place in the warehouse, a public catalog to search by car and model, and MercadoLibre listings published from the same system.',
                datos: ['Inventory and web catalog', 'Connected to MercadoLibre', 'Many stores, since 2018'],
                enlace: ['https://autovision.mx', 'Visit autovision.mx'],
                imagen: 'autovision-web-movil',
                alt: 'Auto Vision auto parts catalog',
            },
            {
                pestana: 'Delivery',
                a: 'An errand service that runs on phone calls and text messages: nobody knows where the courier is or what to charge for the trip.',
                b: 'Tráeme: three apps that quote, assign and track every order',
                texto: 'One app for the customer, one for the courier and one for the operations team, all on a single API. Each order is quoted on the spot and tracked on the map to the door.',
                datos: ['iOS and Android', 'Monterrey and Parral', 'Since 2019'],
                enlace: ['https://traeme.app', 'Visit traeme.app'],
                imagen: 'traeme-web-movil',
                alt: 'Website of Tráeme, a delivery app',
            },
            {
                pestana: 'Gated communities',
                a: 'The gatehouse writes visitors down in a notebook, dues are tracked in Excel and notices get lost in a WhatsApp group.',
                b: 'Privada: residents, gatehouse and management in one system',
                texto: 'QR code access, dues collection that enforces itself and an entry log with evidence. A device at the gatehouse keeps the barrier working when the internet goes down.',
                datos: ['Two apps on the App Store and Google Play', 'Web dashboard', 'Our own gate hardware'],
                enlace: ['https://privada.mx', 'Visit privada.mx'],
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
            { nombre: 'Custom software', para: 'Web platforms, dashboards and internal tools', texto: 'A system shaped around the way your business works. It replaces spreadsheets and manual steps, connects with the tools you already use and grows with you in the cloud.' },
            { nombre: 'Mobile apps', para: 'iOS and Android', texto: 'iPhone and Android apps from a single React Native codebase: notifications, camera, maps and payments, plus publishing on the App Store and Google Play.' },
            { nombre: 'Websites', para: 'Business and product sites', texto: 'Fast, clear pages that rank well on Google, explain what you do and lead visitors to contact you.' },
            { nombre: 'Technical consulting', para: 'Architecture, AWS and project rescue', texto: 'A second opinion before you invest, the architecture for a new system, an AWS setup put in order, or help with a project that got stuck.' },
        ],
    },
    proyectos: {
        id: 'work',
        titulo: 'Projects I designed, built and still run',
        bajada: 'Each one started at a point A, with a process done by hand, and is now a system in production.',
        rotuloA: 'Before',
        rotuloB: 'Today',
        casos: [
            {
                tipo: 'Training platform', nombre: 'Universidad Construrama', url: 'https://uconstrurama.com',
                a: 'Training a network of retailers spread across the country, with their stores and staff.',
                b: 'An online platform with student registration, courses, terms and certificates, running since 2018.',
                enlace: 'Visit uconstrurama.com', imagen: 'uconstrurama-web-escritorio', alt: 'Universidad Construrama website',
            },
            {
                tipo: 'Auto parts inventory and catalog', nombre: 'Auto Vision', url: 'https://autovision.mx',
                a: 'Thousands of used auto parts in a warehouse: what is in stock, where it is and which car it fits lives in someone\'s memory.',
                b: 'An inventory with photos and a location for every part, an online catalog searched by car and model, and MercadoLibre listings from the same system.',
                enlace: 'Visit autovision.mx', imagen: 'autovision-web-escritorio', alt: 'Auto Vision auto parts catalog',
            },
            {
                tipo: 'Delivery app, my own product', nombre: 'Tráeme', url: 'https://traeme.app',
                a: 'An errand service that depends on calls and messages: nobody knows where the courier is or what to charge.',
                b: 'Three apps and one API that quote the trip, assign a courier and track every order on the map, in two Mexican cities.',
                enlace: 'Visit traeme.app', imagen: 'traeme-web-escritorio', alt: 'Home page of traeme.app',
            },
            {
                tipo: 'Software for gated communities, my own product', nombre: 'Privada', url: 'https://privada.mx',
                a: 'The gatehouse logs visitors in a notebook, dues live in Excel and notices get lost in a WhatsApp group.',
                b: 'Residents, gatehouse and management in one system: QR access, dues that enforce themselves and a gate that keeps working offline.',
                enlace: 'Visit privada.mx', imagen: 'privada-web-escritorio', alt: 'Privada website with a 3D model of a gated community',
            },
        ],
        otros: {
            titulo: 'I have also built',
            lista: [
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
                ['2020 to 2022', 'Gericare', 'Lead Full Stack Developer', 'Built custom platforms and portals for healthcare operations, with Laravel, Vue and AWS.'],
                ['2013 to 2018', 'Vialux', 'Senior Full Stack Developer', 'Developed an ERP with budgeting, procurement, reporting and SAP connectivity, with Laravel, Angular and AWS.'],
                ['2012 to 2013', 'Tecnológico de Monterrey', 'Full Stack Developer', 'Helped turn university courses into web formats that read well on phones and tablets.'],
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
            ['What technologies do you use?', 'Laravel (PHP) on the server, Vue for web dashboards, React Native with Expo for iOS and Android apps, and Amazon Web Services for infrastructure. I also use Python with FastAPI for APIs and services, and AI assists me through the whole development process. They all have large communities, so any other team can continue the project.'],
        ],
    },
}

const columnas = {
    servicios: [['/en/#services', 'Custom software'], ['/en/#services', 'Mobile apps'], ['/en/#services', 'Websites'], ['/en/#services', 'Technical consulting']],
    proyectos: [['https://uconstrurama.com', 'Universidad Construrama'], ['https://autovision.mx', 'Auto Vision'], ['https://traeme.app', 'Tráeme'], ['https://privada.mx', 'Privada']],
}

module.exports = { inicio, columnas }
