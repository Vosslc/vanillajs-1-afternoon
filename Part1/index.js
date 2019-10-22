function play() {
  const playerSpan = document.getElementById('player');

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
  } else {
    playerSpan.innerText = 'X';
  }
}

const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);

  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  //winning combos
  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} gets the winner winner chicken dinner!`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} gets the winner winner chicken dinner!`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} gets the winner winner chicken dinner!`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} gets the winner winner chicken dinner!`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} gets the winner winner chicken dinner!`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} gets the winner winner chicken dinner!`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} gets the winner winner chicken dinner!`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} gets the winner winner chicken dinner!`);
    return;
  }

  // No winner.........
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}