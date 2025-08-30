import './style.css'
import { frames } from './data/api-images'
import { igualarAltura } from './utils/heroIgualarAltura'
import { updateImgHego } from './utils/updateImageHero'
import { nav } from './components/nav'
// Importes “fantasma” para que Webpack EMITA los 3 assets críticos
// (el HTML los referencia con nombre fijo; aquí solo forzamos su inclusión en el build)
import './assets/icons/favicon.ico'
import './assets/apple-touch-icon.jpg'
import './assets/preview-1200x630.png'
import whiteLogo from './assets/logo-plunky-blanco.png'
//Generales--------------------------------------------------------------------------------------------------------------
const imgHero = document.getElementById('imgHero');
const sectionHeight = document.querySelector(".section-height");
const navId = document.getElementById('navFlotante');
const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const navLogo = document.getElementById('nav-logo');
let lastScroll = 0;
window.onload = () => {
    imgHero.src = frames[0];
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    navLogo.src = whiteLogo;
    igualarAltura(imgHero, sectionHeight);
    nav(navId, hamburguesa, menu, menuLinks, 0, lastScroll);
};
//Generales--------------------------------------------------------------------------------------------------------------
//Area inicio--------------------------------------------------------------------------------------------------------------
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    updateImgHego(imgHero, frames);
    lastScroll = nav(navId, hamburguesa, menu, menuLinks, currentScroll, lastScroll);
}, 30);

window.addEventListener('resize', () => igualarAltura(imgHero, sectionHeight));
//Area inicio fin--------------------------------------------------------------------------------------------------------------
