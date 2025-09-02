// src/components/nav.js
import { smoothScrollTo } from '../utils/effects';

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
      if (targetEl) smoothScrollTo(targetEl, 60);
      menu?.classList.remove('activo');
      hamburguesa?.classList.remove('activo');
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
  if (currentScroll > lastScroll) navEl.classList.add('top');
  else navEl.classList.remove('top');
  return currentScroll;
}
