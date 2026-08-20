const flashcards = [
  {
    frente: "Qual é a fórmula da força gravitacional?",
    verso: "F = G · (m₁ · m₂) / r²"
  },
  {
    frente: "O que acontece com o peso em planetas diferentes?",
    verso: "O peso varia conforme a gravidade local, pois depende da aceleração gravitacional."
  },
  {
    frente: "Qual é a constante gravitacional universal?",
    verso: "G = 6,67 × 10⁻¹¹ N·m²/kg²"
  },
  {
    frente: "Qual a diferença entre massa e peso?",
    verso: "Massa é a quantidade de matéria; peso é a força da gravidade sobre essa massa."
  },
  {
    frente: "Como a gravidade influencia órbitas planetárias?",
    verso: "Ela mantém os planetas em órbita ao redor do Sol, equilibrando força centrípeta e inércia."
  }
];

const container = document.querySelector(".card-container");

flashcards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  cardElement.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${card.frente}</div>
      <div class="card-back">${card.verso}</div>
    </div>
  `;

  cardElement.addEventListener("click", () => {
    cardElement.classList.toggle("flipped");
  });

  container.appendChild(cardElement);
});
