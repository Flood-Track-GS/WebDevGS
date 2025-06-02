
document.addEventListener("DOMContentLoaded", () => {
  // Slideshow simples (automático)
  const imagens = [
    "img/Enchente.jpg",
    "img/Tecnologia1.png",
    "img/Uso.jpg"
  ];
  let index = 0;
  const slide = document.createElement("img");
  slide.className = "imagem-secao";
  document.getElementById("slideshow").appendChild(slide);

  function trocarSlide() {
    slide.src = imagens[index];
    slide.alt = `Slide ${index + 1}`;
    index = (index + 1) % imagens.length;
  }
  trocarSlide();
  setInterval(trocarSlide, 3000);
  });

