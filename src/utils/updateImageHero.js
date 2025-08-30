import { applyFade, applyOpacity } from "./effects";
export function updateImgHego(imgHero, frames) {
    const scrollTop = window.scrollY;
    if(scrollTop === 0) imgHero.style.setProperty("--fade-start", 100 + "%");;
    const maxScrollTop = (document.body.scrollHeight - window.innerHeight) / 100;
    const maxScrollTopEfect = (document.body.scrollHeight - window.innerHeight) / 10;
    const scrollFraction = scrollTop / maxScrollTopEfect;
    const currentImg = Math.floor(scrollTop / maxScrollTop);
    if (currentImg >= 1 && currentImg < 38) {
        if (currentImg >= 1 && currentImg <= 20) {
            applyFade(imgHero, scrollFraction);
        }
        imgHero.src = frames[currentImg];
        imgHero.style.transition = "opacity 0.8s ease";
        imgHero.style.opacity = 0.8;
    }
    /* applyOpacity(scrollFraction); */
    setTimeout(() => {
        imgHero.style.opacity = 1;
        imgHero.style.transition = "opacity 0.3s ease";
    }, 30);
}