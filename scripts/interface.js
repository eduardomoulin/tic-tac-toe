// VAI FAZER O MEIO DE CAMPO ENTRE O NOSSO HTML E A PARTE DE LÓGICA DO JOGO.

// Ser capaz de reagir a algum evento do usuario, o clique. Saber qual quadrado o usuario clicou.

let vitorioso;

let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");

let jogador1 = window.prompt("Jogador 1, por favor insira seu nome:");
let jogador2 = window.prompt("Jogador 2, por favor insira seu nome:");

function nomeiaPlayer() {
  player1.innerHTML = jogador1;
  player2.innerHTML = jogador2;
}

nomeiaPlayer();

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

  player1.innerHTML = "Player1";
  player2.innerHTML = "Player2";

  jogador1 = "";
  jogador2 = "";

  updateSquares();
  
  window.location.reload(); // Faz com que a pagina seja recarregada e podemos inserir os nomes dos jogadores novamente.
}

function ganhador(playerTime) {
  if (playerTime == "0") {
    return (vitorioso = jogador1);
  } else {
    return (vitorioso = jogador2);
  }
}
