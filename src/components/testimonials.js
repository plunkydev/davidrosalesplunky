// src/components/testimonials.js
import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import t1 from '../assets/maryfel-alvarado.webp';
import t2 from '../assets/sopy.webp';
import t3 from '../assets/sony.webp';
import t4 from '../assets/samanta.webp';
import t5 from '../assets/Joxu.webp';
import t6 from '../assets/vanesa.webp';

const DEFAULT_ITEMS = [
    {
        img: t1, nombre: 'Maryfel Alvarado Méndez', cargo: 'Editora y redactora SEO Senior',
        texto: 'Profesional disciplinado y detallista; siempre da lo mejor. Auténtico, innovador y creativo en diseño y desarrollo web.'
    },
    {
        img: t2, nombre: 'Marcelo andree González Díaz', cargo: 'Maestro Carpintero en Diseño de Cocinas y Clósets',
        texto: 'David tiene un gran talento para transformar ideas en espacios únicos. Su visión, detalle y creatividad hacen que cada diseño de interiores cobre vida.'
    },
    {
        img: t3, nombre: 'Sony Valles', cargo: 'Diseñadora Gráfica Digital e Impresa',
        texto: 'Destaca por su madurez, compromiso y creatividad. Siempre atento, paciente y audaz, genera ideas brillantes y proyectos únicos con excelencia.'
    },
    {
        img: t4, nombre: 'Samanta Ruiz (Fabiana F.)', cargo: 'SEO on page - Optimización SEO Blogs de empresas',
        texto: 'Trabajar con David fue excelente: escuchó mis ideas, aportó propuestas innovadoras y entregó un sitio moderno, optimizado y fácil de usar. ¡Totalmente recomendable!'
    },
    {
        img: t5, nombre: 'Hilder Josue Nuñez', cargo: 'Diseñador, Compositor y Productor Audiovisual',
        texto: 'A David le das una idea y aparte de mejorarla la lleva a la realidad con procesos originales; aparte despierta la creatividad en uno.'
    },
    {
        img: t6, nombre: 'Victoria Sangiovani', cargo: 'Consultora de Empresas Familiares',
        texto: 'Excelente experiencia con David Rosales: profesionalismo, creatividad y detalle impresionantes. La web desarrollada es moderna, funcional y fácil de navegar. Comunicación clara, eficiente. ¡Altamente recomendado!.'
    }
];

/**
 * Inicializa el carrusel de testimonios.
 * @param {Object} options
 * @param {string} [options.root='.testimonials-swiper']
 * @param {Array} [options.items=DEFAULT_ITEMS]
 * @param {boolean} [options.startPaused=false] - si true, inicia pausado
 */
export function initTestimonials({
    root = '.testimonials-swiper',
    items = DEFAULT_ITEMS,
    startPaused = false
} = {}) {
    const rootEl = document.querySelector(root);
    if (!rootEl) return;

    const wrapper = rootEl.querySelector('.swiper-wrapper');
    if (!wrapper) return;

    // Inyecta slides
    items.forEach(({ img, nombre, cargo, texto }) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
      <figure class="t-card">
        <img class="t-avatar" src="${img}" alt="Foto de ${nombre}" loading="lazy" width="96" height="96">
        <blockquote class="t-quote">“${texto}”</blockquote>
        <figcaption class="t-meta">${nombre} — <span>${cargo}</span></figcaption>
      </figure>`;
        wrapper.appendChild(slide);
    });

    const swiper = new Swiper(root, {
        modules: [Navigation, Pagination, A11y, Autoplay],
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 16,
        // si hay 1 solo item, no tiene sentido el autoplay
        autoplay: items.length > 1
            ? { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }
            : false,
        pagination: { el: '.testimonials-pagination', clickable: true },
        navigation: { enabled: true, nextEl: '.testimonials-next', prevEl: '.testimonials-prev' },
        a11y: { enabled: true },
        breakpoints: {
            640: { slidesPerView: 1, navigation: { enabled: false } },
            900: { slidesPerView: 1, navigation: { enabled: true } }
        },
        on: {
            init(sw) { if (startPaused && sw.params.autoplay) sw.autoplay.stop(); }
        }
    });

    // helpers para usar fácil desde fuera
    swiper.pause = () => swiper.autoplay && swiper.autoplay.stop();
    swiper.play = () => swiper.autoplay && swiper.autoplay.start();
    return swiper;
}

// src/utils/equalizeTCards.js
export function equalizeTCardsOnce(root = '.testimonials-swiper') {
  const cards = [...document.querySelectorAll(`${root} .t-card`)];
  if (!cards.length) return;

  // reset por si ya se llamó antes
  cards.forEach(c => { c.style.minHeight = ''; });

  const max = Math.max(...cards.map(c => c.offsetHeight || 0));
  if (Number.isFinite(max) && max > 0) {
    cards.forEach(c => { c.style.minHeight = `${max}px`; });
  }
}
