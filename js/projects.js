// ===== PROJECT GALLERY (carousel por dots + autoplay) =====
(function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const imgs = project.querySelectorAll('.project__img');
        const dots = project.querySelectorAll('.project__dot');
        if (imgs.length === 0) return;

        let current = 0;
        let timer;

        const show = (idx) => {
            imgs.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            imgs[idx]?.classList.add('active');
            dots[idx]?.classList.add('active');
            current = idx;
        };

        const next = () => show((current + 1) % imgs.length);

        const startAuto = () => {
            stopAuto();
            timer = setInterval(next, 4500);
        };
        const stopAuto = () => clearInterval(timer);

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                show(i);
                startAuto();
            });
        });

        project.addEventListener('mouseenter', stopAuto);
        project.addEventListener('mouseleave', startAuto);

        startAuto();
    });
})();
