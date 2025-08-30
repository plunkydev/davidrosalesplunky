function applyFade(imgHero, scrollFraction) {
  imgHero.style.setProperty("--fade-start", (100 - scrollFraction * 220) + "%");
}

function applyOpacity(imgSkills, scrollFraction) {
  let opacity = scrollFraction * 0.7;
  opacity = Math.min(Math.max(opacity, 0), 1);
  imgSkills.style.opacity = opacity;
}

function smoothScrollTo(target, offset = 60) {
  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + start - offset;
  const distance = end - start;
  let startTime = null;

  // 👇 factor para ajustar la velocidad (ms por cada 1000px recorridos)
  const speedFactor = 0.4; // más alto = más lento
  const duration = Math.abs(distance) * speedFactor; 

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // easing easeInOutQuad
    const ease = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export { applyFade, applyOpacity, smoothScrollTo };