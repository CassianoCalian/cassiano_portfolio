document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card, .card-project"); // Corrigido aqui

  cards.forEach(function (card) {
    VanillaTilt.init(card, {
      max: 25,
      speed: 400,
    });
  });
});

window.onload = function () {
  const imagem = document.querySelector(".imagem-perfil");
  let posicao = 0;
  let direcao = 1;
  const velocidade = 6;

  setInterval(function () {
    posicao += direcao * velocidade;

    imagem.style.top = posicao + "px";

    if (posicao >= 400 || posicao <= 0) {
      direcao *= -1;
    }
  }, 20);
};
