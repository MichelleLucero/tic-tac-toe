export default class Game {
  constructor(squares) {
    this.isGameOver = false;
    this.turn = 'x';
    this.squares = squares;
    this.squares.forEach((square) => {
      // console.log(square);
      square.addEventListener('click', (event) => {
        if (this.isSquareEmpty(event) && !this.isGameOver) {
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
  checkWin(playerType) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningCombos.forEach((combos) => {
      const [index1, index2, index3] = combos;
      if (
        this.squares[index1].textContent === playerType &&
        this.squares[index2].textContent === playerType &&
        this.squares[index3].textContent === playerType
      ) {
        alert(`${playerType} won`);
        this.isGameOver = true;
        return true;
      }
      return false;
    });
  }
  isBoardFull() {
    const totalSquares = this.squares.length;
    let count = 0;
    this.squares.forEach((square) => {
      if (square.textContent != '') {
        count += 1;
      }
    });
    this.isFull = totalSquares === count;
  }
  updateBoard(event) {
    if (this.turn === 'x') {
      event.target.textContent = 'x';
      this.checkWin('x');
    } else {
      event.target.textContent = 'o';
      this.checkWin('o');
    }
    this.isBoardFull();
    if (this.isFull) {
      alert('tie');
      this.isGameOver = true;
    }
    this.updateTurn();
  }
}
