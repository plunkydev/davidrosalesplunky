// src/components/testimonials.js
import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// CSS de Swiper (queda encapsulado en este módulo)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa tus imágenes para que Webpack las emita
import t1 from '../assets/maryfel-alvarado.webp';
import t2 from '../assets/sopy.webp';
import t3 from '../assets/sony.webp';
import t4 from '../assets/samanta.webp';
import t5 from '../assets/Joxu.webp';

// Datos por defecto (puedes pasarlos desde fuera si quieres)
const DEFAULT_ITEMS = [
    {
        img: t1,
        nombre: 'Maryfel Alvarado Méndez',
        cargo: 'Editora y redactora SEO Senior',
        texto: 'Profesional disciplinado y detallista; siempre da lo mejor. Auténtico, innovador y creativo en diseño y desarrollo web.'
    },
    {
        img: t2,
        nombre: 'Marcelo andree González Díaz',
        cargo: 'Maestro Carpintero en Diseño de Cocinas y Clósets',
        texto: 'David tiene un gran talento para transformar ideas en espacios únicos. Su visión, detalle y creatividad hacen que cada diseño de interiores cobre vida.'
    },
    {
        img: t3,
        nombre: 'Sony Valles',
        cargo: 'Diseñadora Gráfica Digital e Impresa',
        texto: 'Destaca por su madurez, compromiso y creatividad. Siempre atento, paciente y audaz, genera ideas brillantes y proyectos únicos con excelencia.'
    },
    {
        img: t4,
        nombre: 'Samanta Ruiz (Fabiana F.)',
        cargo: 'SEO on page - Optimización SEO Blogs de empresas',
        texto: 'Trabajar con David fue excelente: escuchó mis ideas, aportó propuestas innovadoras y entregó un sitio moderno, optimizado y fácil de usar. Su trato cercano y profesional hizo el proceso muy ameno. ¡Totalmente recomendable!'
    },
    {
        img: t5,
        nombre: 'Hilder Josue Nuñez',
        cargo: 'Diseñador, Compositor y Productor Audiovisual',
        texto: 'A David le das una idea y aparte de mejorarla la lleva a la realidad con procesos originales aparte despierta la creatividad en uno.'
    }
];

/**
 * Inicializa el carrusel de testimonios.
 * @param {Object} options
 * @param {string} [options.root='.testimonials-swiper'] - selector del contenedor Swiper
 * @param {Array} [options.items=DEFAULT_ITEMS] - lista de testimonios {img,nombre,cargo,texto}
 */
export function initTestimonials({ root = '.testimonials-swiper', items = DEFAULT_ITEMS } = {}) {
    const rootEl = document.querySelector(root);
    if (!rootEl) return; // no hay contenedor, no hacemos nada

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
      </figure>
    `;
        wrapper.appendChild(slide);
    });

    // Inicializa Swiper
    // (opciones sensatas para testimonios; ajusta a tu gusto)
    return new Swiper(root, {
        modules: [Navigation, Pagination, A11y, Autoplay],
        loop: true,
        slidesPerView: 1,
        speed: 1000, // duración de la transición (ms)
        spaceBetween: 16,
        autoplay: { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false },
        pagination: { el: '.testimonials-pagination', clickable: true },
        navigation: { nextEl: '.testimonials-next', prevEl: '.testimonials-prev' },
        a11y: { enabled: true },
        navigation: { enabled: false, nextEl: '.testimonials-next', prevEl: '.testimonials-prev' },
        breakpoints: { 
            640: { slidesPerView: 1, navigation: { enabled: false } },
            900: { slidesPerView: 1, navigation: { enabled: true } }
        },
    });
}
