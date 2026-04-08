// ===== MAIN =====
(function () {
    // Year en footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Smooth scroll para anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 70;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // GitHub placeholder - evita navegar
    const ghLink = document.getElementById('githubLink');
    if (ghLink) {
        ghLink.addEventListener('click', (e) => {
            if (ghLink.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    }
})();
