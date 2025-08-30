export function nav(nav, hamburguesa, menu, menuLinks, currentScroll, lastScroll) {
    
    
    if (currentScroll > lastScroll) {
        nav.classList.add('top'); // scrollea hacia abajo → nav arriba
    } else {
        nav.classList.remove('top'); // scrollea hacia arriba → nav abajo
    }
    lastScroll = currentScroll;
    hamburguesa.addEventListener('click', () => {
        menu.classList.toggle('activo');
        hamburguesa.classList.toggle('activo'); // activa animación hamburguesa → X
    });
    menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // evita el salto inmediato
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            smoothScrollTo(targetElement, 60); // 👈 ahora solo pasas el offset
        }

        // cerrar menú hamburguesa
        menu.classList.remove('activo');
        hamburguesa.classList.remove('activo');
    });
});
return lastScroll
}