const buttons = document.querySelectorAll('.pick');
const scoreEL = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

const choices = ['paper', 'rock', 'scissors'];


let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
})

reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
})



function checkWinner() {
    const computerChoice = RandomChoice();


    //update

    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);

    if(userChoice === computerChoice ){
        // draw

        winner.innerText = 'draw';
    } else if (userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'paper')
        {
            // user wins
            updateScore(1);

            winner.innerText = 'win';
        } else {
            //user lost
            updateScore(-1);

            winner.innerText = 'lost';
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


function updateSelection(selectionEl, choice) {
    // reset
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-paper');
    
    //update
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}