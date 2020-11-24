const choices = ['paper', 'rock', 'scissors'];

const buttons = document.querySelectorAll('.btn-circles');

let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        console.log(userChoice);
    });
})

function RandomChoice() {
    return choices[Math.floor(Math.random()  * choices.length)];
}
