import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const btnStart = document.querySelector('.start');
const divSelect = document.querySelector('.select')
const divPanelLeft = document.querySelector('.panel-left');
const divPanelRight = document.querySelector('.panel-right');

const gameSumary = {
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
    console.log(this);
}
hands.forEach(hand => hand.addEventListener('click', handSelection))
