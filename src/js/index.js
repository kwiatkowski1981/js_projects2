import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: "",
    playerHandHTML: "",
}

const hands =[... document.querySelectorAll('.select img')];
// console.log(hands);

//pierwsza funkcja

function handSelection() {
    // console.log(this);
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult() {



}

// druga funkcja ====> funkcja sterująca startGame
//************************************************
function startGame() {
if (!game.playerHand) return alert("wybierz dłoń !!!");

game.aiHand = aiChoice();
const gameResult = checkResult(game.playerHand, game.aiHand);
console.log(game.aiHand)

}


hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);
