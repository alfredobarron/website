// alfredobarron.com — lo único interactivo del sitio: las pestañas de «De A a
// B» y el aviso de contacto a la analítica (si está cargada).
(function () {
    var ruta = document.querySelector('[data-ruta]')
    if (ruta) {
        var pestanas = [].slice.call(ruta.querySelectorAll('[role="tab"]'))
        var paneles = [].slice.call(ruta.querySelectorAll('[role="tabpanel"]'))

        function mostrar(i, enfocar) {
            pestanas.forEach(function (p, n) {
                p.setAttribute('aria-selected', n === i ? 'true' : 'false')
                p.tabIndex = n === i ? 0 : -1
            })
            paneles.forEach(function (p, n) {
                p.hidden = n !== i
                p.classList.remove('se-traza')
            })
            // Reinicia la animación: la línea se vuelve a trazar de A a B.
            void paneles[i].offsetWidth
            paneles[i].classList.add('se-traza')
            if (enfocar) pestanas[i].focus()
        }

        pestanas.forEach(function (p, i) {
            p.addEventListener('click', function () { mostrar(i, false) })
            p.addEventListener('keydown', function (e) {
                var n = pestanas.length
                if (e.key === 'ArrowRight') { e.preventDefault(); mostrar((i + 1) % n, true) }
                else if (e.key === 'ArrowLeft') { e.preventDefault(); mostrar((i - 1 + n) % n, true) }
                else if (e.key === 'Home') { e.preventDefault(); mostrar(0, true) }
                else if (e.key === 'End') { e.preventDefault(); mostrar(n - 1, true) }
            })
        })
        ruta.classList.add('con-pestanas')
        mostrar(0, false)
    }

    // Cierra el menú del teléfono al elegir una opción o tocar fuera.
    var menu = document.querySelector('.ab-menu')
    if (menu) {
        document.addEventListener('click', function (e) {
            if (!menu.open) return
            if (!menu.contains(e.target) || e.target.closest('.ab-menu__lista a')) menu.open = false
        })
    }

    // Contactos: si hay analítica (gtag), cuenta cada clic a WhatsApp o correo.
    document.addEventListener('click', function (e) {
        var a = e.target.closest('[data-evento]')
        if (a && typeof window.gtag === 'function') {
            window.gtag('event', 'contacto', { medio: a.getAttribute('data-evento'), pagina: location.pathname })
        }
    })
})()
