import './style.css'
import { frames } from './data/api-images'
import { igualarAltura } from './utils/heroIgualarAltura'
import { updateImgHego } from './utils/updateImageHero'
// Importes “fantasma” para que Webpack EMITA los 3 assets críticos
// (el HTML los referencia con nombre fijo; aquí solo forzamos su inclusión en el build)
import './assets/icons/favicon.ico'
import './assets/apple-touch-icon.jpg'
import './assets/preview-1200x630.png'
//Generales--------------------------------------------------------------------------------------------------------------
const imgHero = document.getElementById('imgHero');
const sectionHeight = document.querySelector(".section-height");
//Generales--------------------------------------------------------------------------------------------------------------
//Area inicio--------------------------------------------------------------------------------------------------------------
window.addEventListener("scroll", () => {
    updateImgHego(imgHero, frames);
}, 30);

window.onload = () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    imgHero.src = frames[0];
    igualarAltura(imgHero, sectionHeight);
};
window.addEventListener('resize', () => igualarAltura(imgHero, sectionHeight));
//Area inicio fin--------------------------------------------------------------------------------------------------------------
