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

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Zwycięstwo";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Porażka";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = "black";
    }
}

function gameReset() {
    game.playerHand = "";
    game.aiHand = "";
    hands.forEach(hand => hand.style.boxShadow = '');
}


// =======> funkcja sterująca startGame  <========
//************************************************
function startGame() {
    if (!game.playerHand) return alert("wybierz dłoń !!!");

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(game.aiHand)
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    gameReset(game.playerHand, game.aiHand);
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);
