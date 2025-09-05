// src/index.js
import './style.css';
import { frames } from './data/api-images';
import { igualarAltura } from './utils/heroIgualarAltura';
import { updateImgHego } from './utils/updateImageHero';
import { initNav, updateNavOnScroll } from './components/nav';
import { initTestimonials, equalizeTCardsOnce } from './components/testimonials';
import { validateContactForm, sendContactForm } from './utils/validateForm';
import yo_color_0 from './assets/yo_web_color_0.webp';
import yo_color_6 from './assets/yo_web_color_6.webp';
import yo_color_8 from './assets/yo_web_color_8.webp';

// Importes “fantasma” para que Webpack EMITA los 3 assets críticos
import './assets/icons/favicon.ico';
import './assets/apple-touch-icon.jpg';
import './assets/preview-1200x630.png';
import whiteLogo from './assets/logo-plunky-blanco.png';
import bgImgSkills from './assets/fondo-skills.webp';

// Generales ------------------------------------------------------------------------------------------------------------
const imgHero = document.getElementById('imgHero');
const sectionHeight = document.querySelector('.section-height');
const navId = document.getElementById('navFlotante');
const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const navLogo = document.getElementById('nav-logo');
const bgSkills = document.querySelector('.bg-img');
const bars = document.querySelectorAll('.progress-bar');
const contacto = document.querySelector('.contacto');
const formContact = document.querySelector('.contact_main__form');
let lastScroll = 0;
let currentScroll = window.scrollY;

window.onload = () => {
  // 1) Carrusel (una sola vez) + toggle play/pause al click en .t-card
  const swiper = initTestimonials();
  equalizeTCardsOnce(); // iguala alturas de .t-card en base a la más alta

  const root = document.querySelector('.testimonials-swiper');
  if (root && swiper) {
    root.addEventListener('click', (e) => {
      if (e.target.closest('.t-card')) {
        if (swiper.autoplay?.running) swiper.autoplay.stop();
        else swiper.autoplay?.start();
      }
    });
  }

  // 2) Nav: enlazar eventos una sola vez + primer estado visual
  initNav(navId, hamburguesa, menu, menuLinks);
  lastScroll = updateNavOnScroll(navId, window.scrollY, 0);

  // 3) Resto de tu init
  imgHero.src = frames[0];
  contacto.style.backgroundImage = `url(${yo_color_8})`;
  bgSkills.src = bgImgSkills;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  navLogo.src = whiteLogo;
  igualarAltura(imgHero, sectionHeight);
};

// Scroll -------------------------------------------------------------------------------------------
window.addEventListener('scroll', () => {
  currentScroll = window.scrollY;
  updateImgHego(imgHero, frames);
  lastScroll = updateNavOnScroll(navId, currentScroll, lastScroll);
}, { passive: true });

// Resize -------------------------------------------------------------------------------------------
window.addEventListener('resize', () => {
  igualarAltura(imgHero, sectionHeight);
  // Si ves que en tu diseño cambia mucho la altura, puedes re-equalizar:
  // equalizeTCardsOnce();
});

// Progress bars (IntersectionObserver) -------------------------------------------------------------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const bar = entry.target;
    const percent = bar.getAttribute('data-percent');
    if (entry.isIntersecting) bar.style.width = percent + '%';
    else bar.style.width = '0%';
  });
}, { threshold: 0.5 });

bars.forEach(bar => {
  bar.style.width = '0%';
  bar.style.transition = 'width 2s ease';
  observer.observe(bar);
});

if (formContact) {
  const formInputs = formContact.querySelectorAll('input, textarea');
  
  // Función para actualizar el background dependiendo de la validación
  function checkFormValidation() {
    if (validateContactForm(formContact)) {
      contacto.style.backgroundImage = `url(${yo_color_0})`;
    } else {
      contacto.style.backgroundImage = `url(${yo_color_6})`;
    }
  }

  // Agregar listener para "click", "focus" y "input" en textarea
  formInputs.forEach(input => {
    input.addEventListener('click', checkFormValidation);
    input.addEventListener('focus', checkFormValidation);
    if (input.tagName.toLowerCase() === 'textarea') {
      input.addEventListener('input', checkFormValidation);
    }
  });

  formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateContactForm(formContact)) {
      sendContactForm(formContact)
        .then(response => {
          if (response.ok) {
            alert('Mensaje enviado. Gracias por contactarnos.');
            formContact.reset();
          } else {
            response.json().then(data => {
              if (data.errors) {
                alert('Error: ' + data.errors.map(error => error.message).join(', '));
              } else {
                alert('Hubo un problema al enviar el formulario.');
              }
            });
          }
        })
        .catch(error => {
          console.error(error);
          alert('Error al enviar el formulario. Intenta nuevamente más tarde.');
        });
    }
  });
}
