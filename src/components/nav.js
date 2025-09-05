// src/components/nav.js
import { smoothScrollTo } from '../utils/effects';
let isNavClicked = false;
/**
 * Enlaza los eventos del nav UNA sola vez.
 */
export function initNav(navEl, hamburguesa, menu, menuLinks) {
  if (!navEl || navEl.dataset.bound) return;

  // Toggle menú hamburguesa
  hamburguesa?.addEventListener('click', () => {
    menu?.classList.toggle('activo');
    hamburguesa.classList.toggle('activo');
  });

  // Scroll suave y cierre del menú al hacer click en un link
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = targetId ? document.querySelector(targetId) : null;
      if (targetEl) {
        smoothScrollTo(targetEl, 56).then(() => {
          // Cuando la animación se completa, desactivar la bandera
          isNavClicked = false;
        });
      }
      menu?.classList.remove('activo');
      hamburguesa?.classList.remove('activo');
      
      // Forzar que el nav quede en top
      navEl.classList.add('top');
      isNavClicked = true;
    });
  });

  // Bandera para no volver a enlazar
  navEl.dataset.bound = 'true';
}

/**
 * Actualiza el estado visual del nav según la dirección del scroll.
 * Devuelve el currentScroll para reutilizar como nuevo lastScroll.
 */
export function updateNavOnScroll(navEl, currentScroll, lastScroll) {
  if (!navEl) return currentScroll;
  if (isNavClicked && currentScroll !== 0) {
    navEl.classList.add('top')
    return lastScroll;
  }
  if (currentScroll > lastScroll) navEl.classList.add('top');
  else navEl.classList.remove('top');
  return currentScroll;
}
