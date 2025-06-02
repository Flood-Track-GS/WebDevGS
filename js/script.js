
document.addEventListener("DOMContentLoaded", () => {
  // Slideshow simples (automático)
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
  const perguntas = [
    { q: "O que causa enchentes urbanas?", a: "chuvas intensas" },
    { q: "Qual tecnologia ajuda a prever enchentes?", a: "inteligência artificial" },
    { q: "Qual órgão brasileiro emite alertas?", a: "cemaden" },
    { q: "Enchentes causam risco à saúde?", a: "sim" },
    { q: "O que pode reduzir o impacto das enchentes?", a: "planejamento urbano" },
    { q: "O que é sensoriamento remoto?", a: "monitoramento por satélite" },
    { q: "O que é big data?", a: "grande volume de dados" },
    { q: "Qual aplicativo envia alertas?", a: "alertagov" },
    { q: "Qual cidade sofreu com enchente em 2024?", a: "canoas" },
    { q: "Como ajudar em uma enchente?", a: "seguir alertas oficiais" }
  ];

  const quizSecao = document.getElementById("quiz-container");
  perguntas.forEach((p, i) => {
    const bloco = document.createElement("div");
    bloco.innerHTML = `
      <label>${i + 1}. ${p.q}<br>
        <input type="text" data-index="${i}" placeholder="Resposta">
      </label><br><br>
    `;
    quizSecao.appendChild(bloco);
  });

  document.getElementById("enviar-quiz").addEventListener("click", () => {
    let acertos = 0;
    document.querySelectorAll("#quiz-container input").forEach((input, i) => {
      if (input.value.trim().toLowerCase() === perguntas[i].a.toLowerCase()) {
        acertos++;
      }
    });
    document.getElementById("resultado-quiz").textContent = `Você acertou ${acertos} de 10 perguntas.`;
  });

  // Temas
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

  // Menu hambúrguer para mobile
  const nav = document.querySelector("nav ul");
  const menuToggle = document.createElement("button");
  menuToggle.textContent = "☰";
  menuToggle.className = "menu-toggle";
  document.querySelector(".logo-nav").prepend(menuToggle);
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("ativo");
  });
});
