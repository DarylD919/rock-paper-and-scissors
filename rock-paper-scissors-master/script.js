const buttons = document.querySelectorAll('.pick');
const scoreEL = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');



const choices = ['paper', 'rock', 'scissors'];



let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
})


function checkWinner() {
    const computerChoice = RandomChoice();

    if(userChoice === computerChoice ){
        // draw
    } else if (userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'paper')
        {
            // user wins
            updateScore(1);
        } else {
            //user lost
            updateScore(-1);
        }

        //show main | hide main

        main.style.display = 'none';
        selection.style.display = 'flex';
}

function updateScore(value){
    score += value;

    scoreEL.innerText = score;
}

function RandomChoice() {
    return choices[Math.floor(Math.random()  * choices.length)];
}
