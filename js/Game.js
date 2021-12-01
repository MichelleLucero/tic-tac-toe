export default class Game {
  constructor(gameContentDOM) {
    this.gameContentDOM = gameContentDOM;
    this.squares = this.gameContentDOM.querySelectorAll('.square');
    this.gameStatus = this.gameContentDOM.querySelector('#game-status');
    this.resetButton = this.gameContentDOM.querySelector('.reset');
    this.playerXScoreCount = this.gameContentDOM.querySelector(
      '.playerX .score-count'
    );
    this.tieScoreCount =
      this.gameContentDOM.querySelector('.ties .score-count');
    this.playerOScoreCount = this.gameContentDOM.querySelector(
      '.playerO .score-count'
    );
    this.isGameOver = false;
    this.turn = 'X';
    this.squares.forEach((square) => {
      square.addEventListener('click', (event) => {
        if (this.isSquareEmpty(event) && !this.isGameOver) {
          square.classList.remove('empty');
          this.updateGame(event);
        }
      });
      // EDIT THIS
      square.addEventListener('mouseover', (event) => {
        if (this.isSquareEmpty(event)) {
          square.setAttribute('turn', this.turn);
        }
      });
    });
    this.resetButton.addEventListener('click', (event) => {
      this.resetSquares();
      this.isGameOver = false;
      this.turn = 'X';
      this.gameStatus.textContent = `PLAYER ${this.turn}'S TURN`;
    });
  }
  isSquareEmpty(event) {
    return event.target.textContent === '' ? true : false;
  }
  updateTurn() {
    if (!this.isGameOver) {
      this.turn === 'X' ? (this.turn = 'O') : (this.turn = 'X');
      this.gameStatus.textContent = `PLAYER ${this.turn}'S TURN`;
    }
  }
  updateScore(scoreToUpdate) {
    scoreToUpdate.textContent = parseInt(scoreToUpdate.textContent) + 1;
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
        this.gameStatus.textContent = `PLAYER ${playerType} WON`;
        playerType === 'X'
          ? this.updateScore(this.playerXScoreCount)
          : this.updateScore(this.playerOScoreCount);
        this.isGameOver = true;
        //remove empty class so hover effect doesn't show up after game is over
        this.squares.forEach((square) => {
          if (square.classList.contains('empty')) {
            square.classList.remove('empty');
          }
        });
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
      this.updateScore(this.tieScoreCount);
      this.gameStatus.textContent = 'TIE';
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

  resetSquares() {
    this.squares.forEach((square) => {
      square.classList.add('empty');
      square.textContent = '';
    });
  }
}
