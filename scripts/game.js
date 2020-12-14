// RESPONSÁVEL POR LIDAR COM A LÓGICA DO JOGO, CHAMADO A REGRA DO NEGÓCIO, SÃO COISAS QUE NÃO TEM HAVER COM A INTERFACE GRÁFICA.

// iniciar minhas variaveis que vão ser responsaveis por gerenciar todo o estado, jogador, espaços etc.

let board = ["", "", "", "", "", "", "", "", ""]; // Começam vazias mas em algum momento podem ter um X ou um O.
let playerTime = 0;
let gameOver = false;

let symbols = ["o", "x"];

//  Função para ver o vencedor
//  São 8 opções de vitórias

//  Variavel para condições de vitórias.
let winStates = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

function handleMove(position) {
  // colocar o simbolo dentro de um square, a position é a posição que a gnt quer efetuar o move.

  if (gameOver) {
    return;
  }

  // Não deixa colocar outro simbolo em um square que ja tem um simbolo definido.

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();
    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    // Cada um dos elementos de winStates significa uma posição no nosso board

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}
