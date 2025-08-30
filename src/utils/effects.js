function applyFade(imgHero, scrollFraction) {
  imgHero.style.setProperty("--fade-start", (100 - scrollFraction * 220) + "%");
}

function applyOpacity(imgSkills, scrollFraction) {
  let opacity = scrollFraction * 0.7;
  opacity = Math.min(Math.max(opacity, 0), 1);
  imgSkills.style.opacity = opacity;
}

export { applyFade, applyOpacity };