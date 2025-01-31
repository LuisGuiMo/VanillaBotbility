document.addEventListener('DOMContentLoaded', () => {
    // Forzar renderizado inicial
    gsap.set([".feature-card", ".whatsapp-button", ".messenger-button", ".stat-item"], {
        visibility: "visible"
    });

    // Animación del logo
    gsap.from('.logo', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power4.out'
    });

    // Animación del título
    gsap.from('h1', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: 'back.out(1.4)'
    });

    // Animación de las tarjetas
    gsap.to('.feature-card', {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power2.out',
        startAt: { y: 50, opacity: 0 }
    });

    // Animación de los botones
    gsap.to('.whatsapp-button, .messenger-button', {
        duration: 1,
        scale: 1,
        opacity: 1,
        delay: 0.8,
        ease: 'elastic.out(1, 0.5)',
        startAt: { scale: 0.8, opacity: 0 }
    });

    // Animación de estadísticas
    gsap.to('.stat-item', {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.2,
        ease: 'power2.out',
        startAt: { y: 20, opacity: 0 }
    });
});