import Game from './Game.js';
import Player from './Player.js';

const squares = document.querySelectorAll('.square');
const gameStatus = document.querySelector('#game-status');
// const playerX = new Player('x');
// const playerO = new Player('o');
const game = new Game(squares, gameStatus);
console.log('main');

// const hello = (e) => {
//   console.log(e.target);
//   alert(`You clicked button number!`);
// };

// for (let i = 0; i < squares.length; i++) {
//   squares[i].addEventListener('click', hello);
// }