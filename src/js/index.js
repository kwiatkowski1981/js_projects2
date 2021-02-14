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

const hands = [...document.querySelectorAll('.select img')];

//pierwsza funkcja

function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if ((player === "papier" && ai === "kamień") ||
        (player === "nożyczki" && ai === "papier") ||
        (player === "kamień" && ai === "nożyczki")) {
        return 'win';
    } else {
        return 'loss'
    }
}

// publikacja wyniku




// druga funkcja ====> funkcja sterująca startGame
//************************************************
function startGame() {
    if (!game.playerHand) return alert("wybierz dłoń !!!");

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(game.aiHand)
    console.log(gameResult);
    publishResult();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);
