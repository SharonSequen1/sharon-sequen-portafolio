// ===== NAVBAR =====
(function () {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const menu   = document.getElementById('navMenu');
    const links  = document.querySelectorAll('.navbar__link');

    // Scroll effect
    const onScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu toggle
    if (toggle) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            menu.classList.toggle('open');
        });
    }

    // Cerrar menú al click en link (mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle?.classList.remove('open');
            menu?.classList.remove('open');
        });
    });

    // Active link según sección visible
    const sections = document.querySelectorAll('section[id]');
    const setActive = () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            const link = document.querySelector(`.navbar__link[href="#${id}"]`);
            if (!link) return;
            if (scrollY >= top && scrollY < top + height) {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
})();
