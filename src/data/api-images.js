function importAllFrames(r) {
  return r.keys().map(r);
}

const frames = importAllFrames(
  require.context(
    '../assets/frames-completo-video-yo', // 👈 SIN el "src" aquí
    false,                               // no recorrer subcarpetas
    /\.webp$/                            // solo archivos .webp
  )
);

export const frame = (num) => {
  const img = new Image();
  img.src = frames[num];
  img.alt = `Frame ${num}`;
  img.title = `Frame david rosales ${num}`;
  img.id = `frame${num}`;
  img.classList.add('frame');
  return img
}