const brand = document.querySelector("header");  
const logo = document.getElementById("logo");
const title = document.querySelector("header h1");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // Rango de scroll en el que desaparece el bloque
  const start = 50;   
  const end = 200;    

  // Progreso entre 0 y 1
  let progress = (y - start) / (end - start);
  progress = Math.min(Math.max(progress, 0), 1);

  // Movimiento del logo y título
  logo.style.transform = `translateY(${-progress * 60}px)`;
  title.style.transform = `translateY(${-progress * 60}px)`;
  logo.style.opacity = 1 - progress;
  title.style.opacity = 1 - progress;

  // Cuando termina de desaparecer, añade la clase compacta
  if (progress >= 1) {
    brand.classList.add("header--compact");
  } else {
    brand.classList.remove("header--compact");
  }
});
