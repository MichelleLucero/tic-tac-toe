import Game from './Game.js';
import Player from './Player.js';

const squares = document.querySelectorAll('.square');
// const playerX = new Player('x');
// const playerO = new Player('o');
const game = new Game(squares);
console.log('main');

// const hello = (e) => {
//   console.log(e.target);
//   alert(`You clicked button number!`);
// };

// for (let i = 0; i < squares.length; i++) {
//   squares[i].addEventListener('click', hello);
// }
