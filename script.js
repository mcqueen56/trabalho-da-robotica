const flashcards = [
  {
    frente: "Qual é a fórmula da força gravitacional?",
    verso: "F = G · (m₁ · m₂) / r²",
    imagem: "planetas.jpg"
  },
  {
    frente: "O que acontece com o peso em planetas diferentes?",
    verso: "O peso varia conforme a gravidade local.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  },
  {
    frente: "Qual é a constante gravitacional universal?",
    verso: "G = 6,67 × 10⁻¹¹ N·m²/kg²",
    imagem: "quadro-negro-quadrado-com-equações-37754767.webp"
  },
  {
    frente: "Qual a diferença entre massa e peso?",
    verso: "Massa é a quantidade de matéria; peso é a força da gravidade sobre essa massa.",
    imagem: "ccc.jpg"
  },
  {
    frente: "Como a gravidade influencia órbitas planetárias?",
    verso: "Ela mantém os planetas em órbita ao redor do Sol.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg"
  }
];

const container = document.querySelector(".card-container");

flashcards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  cardElement.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <p>${card.frente}</p>
        <img src="${card.imagem}" alt="Imagem relacionada">
      </div>
      <div class="card-back">
        <p>${card.verso}</p>
      </div>
    </div>
  `;

  cardElement.addEventListener("click", () => {
    cardElement.classList.toggle("flipped");
  });

  container.appendChild(cardElement);
});
