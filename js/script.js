document.addEventListener("DOMContentLoaded", () => {
  // Slideshow
  const imagens = [
    "img/SlideShow1.jpg",
    "img/SlideShow2.jpg",
    "img/SlideShow3.jpg"
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

  // Quiz interativo
  const quizForm = document.getElementById("quiz-form");
  const resultado = document.getElementById("resultado-quiz");

  const respostasCorretas = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "c",
    q5: "b",
    q6: "b",
    q7: "a",
    q8: "a",
    q9: "a",
    q10: "a"
  };

  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let acertos = 0;
    for (let i = 1; i <= 10; i++) {
      const resposta = quizForm.elements["q" + i].value;
      if (resposta === respostasCorretas["q" + i]) {
        acertos++;
      }
    }

    resultado.textContent = `Você acertou ${acertos} de 10 perguntas.`;
  });

  // Tema claro/escuro/azul
  const cores = {
    claro: "#f4f4f4",
    escuro: "#1a1a1a",
    azul: "#1e90ff"
  };
  document.querySelectorAll(".tema-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.body.style.backgroundColor = cores[btn.dataset.tema];
    });
  });

  // Menu hambúrguer
  const nav = document.querySelector("nav ul");
  const menuToggle = document.createElement("button");
  menuToggle.textContent = "☰";
  menuToggle.className = "menu-toggle";
  document.querySelector(".logo-nav").prepend(menuToggle);
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("ativo");
  });
});
