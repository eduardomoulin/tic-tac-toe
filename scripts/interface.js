// VAI FAZER O MEIO DE CAMPO ENTRE O NOSSO HTML E A PARTE DE LÓGICA DO JOGO.

// Ser capaz de reagir a algum evento do usuario, o clique. Saber qual quadrado o usuario clicou.

let vitorioso;

document.getElementById("player1").addEventListener("change", nomeiaJogador);
document.getElementById("player2").addEventListener("change", nomeiaJogador);

function nomeiaJogador() {
  jogador1 = document.getElementById("player1").value;
  jogador2 = document.getElementById("player2").value;
}

document.addEventListener("DOMContentLoaded", () => {
  // Pegar todos os squares.
  let squares = document.querySelectorAll(".square");

  //   Função abaixo foi criada para ouvir os cliques no squares.
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  // O target do evento é o elemento que sofreu a ação de click
  //   console.log(event.target);

  let square = event.target;

  let position = square.id;
  // O ID é a posição que eu quero fazer o movimento no board

  if (handleMove(position)) {
    setTimeout(() => {
      vitorioso = ganhador(playerTime);
      alert("O jogo ACABOU! " + vitorioso + " foi o vencedor!");
    }, 50);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class= '${symbol}'></div>`;
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = "";
  });
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;

  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";

  jogador1 = "";
  jogador2 = "";

  updateSquares();

  
}

function ganhador(playerTime) {
  if (playerTime == "0") {
    return (vitorioso = jogador1);
  } else {
    return (vitorioso = jogador2);
  }
}
