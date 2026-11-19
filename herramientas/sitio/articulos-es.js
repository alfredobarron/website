// Artículos de alfredobarron.com (docs/MARKETING.md §5): uno al mes, en
// español, cada uno responde una pregunta que hace un prospecto antes de
// contratar. Misma regla que el resto del sitio: solo datos públicos y
// comprobables, sin cifras internas ni precios que no se hayan decidido publicar.
//
// Cada artículo: `clave` (también es su dirección, /articulos/<clave>/), `fecha`
// (AAAA-MM-DD; `actualizado` si se corrige después), `respuesta` (el párrafo que
// contesta la pregunta de entrada), `cuerpo` (bloques) y `casos` (claves de
// CASOS en datos-es.js). El más nuevo va primero.
// Bloques del cuerpo: ['h2', texto] · ['p', html] · ['ul', [html…]] ·
// ['ol', [html…]] · ['tabla', { cabeza: [...], filas: [[...]] }]

const { SERVICIOS, PROYECTOS } = require('./datos-es')

const liga = (ruta, texto) => `<a href="${ruta}">${texto}</a>`

const articulos = [
    {
        clave: 'software-a-la-medida-o-comercial',
        fecha: '2026-11-19',
        titulo: 'Software a la medida o comercial: cómo decidir | Alfredo Barrón',
        descripcion: 'Cuándo conviene comprar un programa ya hecho y cuándo mandar a hacer el tuyo: las señales, una tabla comparativa y cinco preguntas para decidir.',
        og: 'articulo-software-a-la-medida-o-comercial',
        h1: 'Software a la medida o software comercial: cómo decidir',
        respuesta: 'Conviene un software comercial cuando tu proceso es igual al de muchas otras empresas, como la contabilidad o la nómina. Conviene uno a la medida cuando el proceso es propio de tu negocio, ningún programa lo resuelve bien y lo que hoy pagas en licencias o en trabajo a mano ya pesa más que construirlo.',
        mensaje: 'Hola Alfredo, leí tu artículo sobre software a la medida o comercial y quiero platicar de mi caso.',
        cuerpo: [
            ['h2', 'Qué es cada uno'],
            ['p', 'Un <strong>software comercial</strong> es un programa que ya existe y que se vende igual a todos: pagas una licencia o una mensualidad, lo configuras y empiezas a usarlo. Un <strong>software a la medida</strong> se construye para una sola empresa, a partir de cómo trabaja, y la empresa es dueña del código.'],
            ['p', 'Ninguno es mejor por sí mismo. La pregunta útil no es cuál es mejor, sino qué tan parecido es tu proceso al de los demás.'],

            ['h2', 'Cuándo conviene uno comercial'],
            ['p', 'Si miles de empresas hacen lo mismo que tú y de la misma forma, alguien ya construyó un buen programa para eso y lo mantiene con el dinero de todos sus clientes. Es difícil competir contra eso con un desarrollo propio. Conviene cuando:'],
            ['ul', [
                'El proceso es estándar o lo marca la ley: contabilidad, nómina, facturación.',
                'Lo necesitas funcionando esta semana, no en unos meses.',
                'Tu equipo es chico y el costo por usuario todavía es bajo.',
                'Puedes ajustar tu forma de trabajar al programa sin perder nada importante.',
            ]],
            ['p', `Yo mismo vendo uno. ${liga(PROYECTOS.privada, 'Privada')} es un software para fraccionamientos: control de acceso, cuotas y avisos. Si administras un fraccionamiento, mandar a hacer un sistema desde cero casi nunca tiene sentido, porque el problema es el mismo en todos y ya está resuelto.`],

            ['h2', 'Cuándo conviene uno a la medida'],
            ['p', 'Un sistema propio se justifica cuando el proceso es parte de lo que te distingue, o cuando ningún programa lo cubre sin forzarlo. Las señales más comunes:'],
            ['ul', [
                'La operación vive en hojas de Excel que solo una persona entiende.',
                'Tu equipo captura el mismo dato en dos o tres lugares.',
                'Pagas licencias por usuario de un programa del que usas una parte pequeña.',
                'Necesitas que varios sistemas se hablen entre sí y ninguno lo permite.',
                'Ya probaste dos o tres programas y en todos terminaste trabajando «por fuera».',
            ]],
            ['p', `Un ejemplo: ${liga(PROYECTOS.autovision, 'Auto Vision')} reúne a muchas tiendas de autopartes usadas. Cada pieza es única, lleva fotos, el auto al que le queda y su lugar en la bodega, y además se publica en MercadoLibre. Ningún programa de inventario comercial hace esa combinación, así que se construyó uno.`],

            ['h2', 'Las diferencias, lado a lado'],
            ['tabla', {
                cabeza: ['', 'Comercial', 'A la medida'],
                filas: [
                    ['Para empezar', 'Días', 'De dos a cuatro meses para una primera versión'],
                    ['Costo al inicio', 'Bajo', 'Alto: pagas la construcción'],
                    ['Costo con el tiempo', 'Mensualidad por usuario, que sube al crecer', 'Mantenimiento y servidores; no depende del número de usuarios'],
                    ['Se adapta a ti', 'Hasta donde el programa lo permita', 'Se construye sobre tu proceso'],
                    ['Conexión con otros sistemas', 'Las que el proveedor ofrezca', 'Las que necesites'],
                    ['El código y los datos', 'Los datos son tuyos; el programa, del proveedor', 'Los dos son tuyos'],
                    ['Si el proveedor cambia o cierra', 'Te toca migrar', 'Otro equipo puede continuar el código'],
                ],
            }],

            ['h2', 'Cinco preguntas para decidir'],
            ['ol', [
                '<strong>¿Mi proceso es igual al de mis competidores?</strong> Si la respuesta es sí, busca primero un programa comercial.',
                '<strong>¿Qué tanto tendría que cambiar mi forma de trabajar?</strong> Si es poco, adáptate. Si lo que tendrías que cambiar es justo lo que te da ventaja, no.',
                '<strong>¿Cuánto pago hoy en licencias y en horas de trabajo a mano?</strong> Súmalo a tres años: esa es la cifra contra la que se compara un desarrollo.',
                '<strong>¿Con qué otros sistemas tiene que conectarse?</strong> Muchas decisiones se resuelven aquí: lo comercial falla en la conexión, no en la función.',
                '<strong>¿Quién lo va a mantener?</strong> Un sistema propio necesita a alguien responsable después del lanzamiento. Pregúntalo antes de firmar.',
            ]],

            ['h2', 'La opción que casi nadie considera'],
            ['p', 'No tienes que elegir uno solo. Muchas veces lo mejor es usar un programa comercial para lo estándar y construir únicamente la pieza que falta: la que conecta dos sistemas, el panel que junta la información o la app que usa tu gente en la calle. Es más barato que un sistema completo y resuelve justo lo que te duele.'],

            ['h2', 'Dos errores comunes'],
            ['p', '<strong>Mandar a hacer lo que ya existe.</strong> Un sistema propio de facturación o de nómina cuesta mucho y siempre va a ir detrás de los cambios fiscales.'],
            ['p', '<strong>Vivir años adaptando la empresa al programa.</strong> Cuando hay más hojas de Excel alrededor del sistema que trabajo dentro de él, el programa ya no te está sirviendo.'],
            ['p', `Si no tienes claro de qué lado estás, eso se resuelve en una llamada. Y si un programa comercial ya hace lo que necesitas, te lo digo: es parte de lo que reviso antes de cotizar un ${liga(SERVICIOS.software, 'software a la medida')}.`],
        ],
        preguntas: [
            ['¿Qué es más barato, un software a la medida o uno comercial?', 'Al inicio, casi siempre el comercial. Con el tiempo depende del número de usuarios: la mensualidad por usuario crece con tu equipo, mientras que un sistema propio cuesta lo mismo con diez usuarios que con cien. Por eso conviene comparar el costo a tres años y no solo el primer mes.'],
            ['¿Puedo empezar con un programa comercial y cambiar después?', 'Sí, y muchas veces es lo más sensato. Usar un programa comercial uno o dos años te deja claro qué necesitas de verdad. Lo importante es confirmar desde el principio que puedes exportar tus datos.'],
            ['¿De quién es el código de un software a la medida?', 'De la empresa que lo paga, si así queda en el contrato. Pídelo por escrito, junto con el acceso al repositorio y a los servidores.'],
        ],
        casos: ['autovision', 'privada'],
        cierre: 'Cuéntame qué proceso estás evaluando',
    },
]

for (const a of articulos) a.ruta = `/articulos/${a.clave}/`

const indice = {
    ruta: '/articulos/',
    titulo: 'Artículos sobre software para empresas | Alfredo Barrón',
    descripcion: 'Respuestas a lo que se pregunta un dueño de negocio antes de contratar un desarrollo: cuánto cuesta, cuándo conviene y qué preguntar.',
    h1: 'Artículos',
    respuesta: 'Respuestas a lo que se pregunta un dueño de negocio antes de contratar un desarrollo, con ejemplos de los proyectos que he construido.',
}

module.exports = { articulos, indice }
