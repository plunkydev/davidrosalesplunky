import './style.css'
import { frames } from './data/api-images'
import { igualarAltura } from './utils/heroIgualarAltura'
import { updateImgHego } from './utils/updateImageHero'
import { nav } from './components/nav'
import { initTestimonials } from './components/testimonials'

// Importes “fantasma” para que Webpack EMITA los 3 assets críticos
import './assets/icons/favicon.ico'
import './assets/apple-touch-icon.jpg'
import './assets/preview-1200x630.png'
import whiteLogo from './assets/logo-plunky-blanco.png'
import bgImgSkills from './assets/fondo-skills.webp'

// Generales ------------------------------------------------------------------------------------------------------------
const imgHero = document.getElementById('imgHero')
const sectionHeight = document.querySelector('.section-height')
const navId = document.getElementById('navFlotante')
const hamburguesa = document.getElementById('hamburguesa')
const menu = document.getElementById('menu')
const menuLinks = document.querySelectorAll('#menu a')
const navLogo = document.getElementById('nav-logo')
const bgSkills = document.querySelector('.bg-img')
const bars = document.querySelectorAll('.progress-bar')
let lastScroll = 0

window.onload = () => {
    // Inicializa el carrusel UNA sola vez
    const swiper = initTestimonials()

    // Toggle play/pause al hacer click en cualquier tarjeta
    const root = document.querySelector('.testimonials-swiper')
    if (root && swiper) {
        root.addEventListener('click', (e) => {
            if (e.target.closest('.t-card')) {
                if (swiper.autoplay?.running) swiper.autoplay.stop()
                else swiper.autoplay?.start()
            }
        })
    }

    // Resto de tu init
    imgHero.src = frames[0]
    bgSkills.src = bgImgSkills
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    navLogo.src = whiteLogo
    igualarAltura(imgHero, sectionHeight)
    nav(navId, hamburguesa, menu, menuLinks, 0, lastScroll)
}

// Generales ------------------------------------------------------------------------------------------------------------
// Área inicio ----------------------------------------------------------------------------------------------------------
window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY
    updateImgHego(imgHero, frames)
    lastScroll = nav(navId, hamburguesa, menu, menuLinks, currentScroll, lastScroll)
}, 30)

window.addEventListener('resize', () => igualarAltura(imgHero, sectionHeight))

// Crea un observador que detecta cuando los elementos skills entran en la vista (viewport)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bar = entry.target
        const percent = bar.getAttribute('data-percent')

        if (entry.isIntersecting) {
            bar.style.width = percent + '%'
        } else {
            bar.style.width = '0%'
        }
    })
}, { threshold: 0.5 })

bars.forEach(bar => {
    bar.style.width = '0%'
    bar.style.transition = 'width 2s ease'
    observer.observe(bar)
})
// Área inicio fin ------------------------------------------------------------------------------------------------------
