export default class Game {
  constructor(squares, gameStatus) {
    this.isGameOver = false;
    this.turn = 'X';
    this.gameStatus = gameStatus;
    this.squares = squares;
    this.squares.forEach((square) => {
      // console.log(square);
      square.addEventListener('click', (event) => {
        if (this.isSquareEmpty(event) && !this.isGameOver) {
          this.updateGame(event);
        }
      });
    });
  }
  isSquareEmpty(event) {
    return event.target.textContent === '' ? true : false;
  }
  updateTurn() {
    if (!this.isGameOver) {
      this.turn === 'X' ? (this.turn = 'O') : (this.turn = 'X');
      this.gameStatus.textContent = `Player ${this.turn}'s Turn`;
    }
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
        this.gameStatus.textContent = `Player ${playerType} won`;
        this.isGameOver = true;
        return true;
      }
    });
    return false;
  }
  checkTie() {
    const totalSquares = this.squares.length;
    let count = 0;
    this.squares.forEach((square) => {
      if (square.textContent != '') {
        count += 1;
      }
    });
    if (totalSquares === count) {
      this.isGameOver = true;
      this.gameStatus.textContent = "It's a tie!";
      return true;
    }
    return false;
  }

  updateGame(event) {
    event.target.textContent = this.turn;
    this.checkWin(this.turn);
    if (!this.isGameOver) {
      this.checkTie();
    }
    this.updateTurn();
  }
}
