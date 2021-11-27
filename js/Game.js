export default class Game {
  constructor(squares, playerX, playerO) {
    this.turn = 'x';
    this.squares = squares;
    // player1 will always be x
    this.playerX = playerX;
    this.playerO = playerO;
    this.squares.forEach((square) => {
      // console.log(square);
      square.addEventListener('click', (event) => {
        if (this.isSquareEmpty(event)) {
          this.updateBoard(event);
        }
      });
    });
  }
  isSquareEmpty(event) {
    return event.target.textContent === '' ? true : false;
  }
  updateTurn() {
    this.turn === 'x' ? (this.turn = 'o') : (this.turn = 'x');
  }
  updateBoard(event) {
    if (this.turn === 'x') {
      event.target.textContent = 'x';
    } else {
      event.target.textContent = 'o';
    }
    this.updateTurn();
  }
}
