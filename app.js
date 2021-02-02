//jshint esversion:6
const wordEl = document.getElementById('word');
const textEl = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const gameOverEl = document.getElementById('game__over__container');
const settingsBtnEl = document.getElementById('settings__btn');
const settingsEl = document.getElementById('settings');
const settingsForm = document.getElementById('settings__form');
const difficultySelectEl = document.getElementById('difficulty');

// list of random words for the game
const words = ['sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north',
    'dependent', 'steer', 'silver', 'superficial'
];

let randomWord;
let score = 0;
let time = 10;


function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM(){
    randomWord = getRandomWord();
    wordEl.innerHTML = randomWord;
}

function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}


textEl.addEventListener('input', e => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        e.target.value = '';
        updateScore();
    } else {
        
    }
});

addWordToDOM();























