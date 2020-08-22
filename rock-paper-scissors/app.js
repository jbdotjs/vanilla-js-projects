let userScore = 0;
let computerScore = 0;

const user = 'user'.fontsize(3).sub();
const comp = 'comp'.fontsize(3).sub();

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.getElementById('result');
const badgeUser_span = document.getElementById('user-label');
const badgeComputer_span = document.getElementById('computer-label');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function animateBadge(userScore, computerScore) {
    if (userScore > computerScore) {
        badgeUser_span.style.background = 'lightgreen';
        badgeComputer_span.style.background = 'red';
    } else if (userScore < computerScore) {
        badgeComputer_span.style.background = 'lightgreen';
        badgeUser_span.style.background = 'red';
    } else {
        badgeComputer_span.style.background = 'red';
        badgeUser_span.style.background = 'red';
    }
}

function animateChoice(userChoice, className) {
    const element = document.getElementById(userChoice);
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, 500)
}

function renderScore(userScore, computerScore) {
    computerScore_span.textContent = computerScore;
    userScore_span.textContent = userScore;
}

function handleWin(userChoice, computerChoice) {
    userScore++;
    result_p.innerHTML = `${userChoice}${user} beats ${computerChoice}${comp} : you Win!`;
    renderScore(userScore, computerScore);
    animateBadge(userScore, computerScore);
    animateChoice(userChoice, 'green-glow');
}

function handleLose(userChoice, computerChoice) {
    computerScore++;
    result_p.innerHTML = `${computerChoice}${comp} beats ${userChoice}${user} : you Lose!`;
    renderScore(userScore, computerScore);
    animateBadge(userScore, computerScore);
    animateChoice(userChoice, 'red-glow')
}

function handleDraw(userChoice, computerChoice) {
    result_p.innerHTML = `${userChoice}${user} and ${computerChoice}${comp} cancelled each other`;
    renderScore(userScore, computerScore);
    animateBadge(userScore, computerScore);
    animateChoice(userChoice, 'grey-glow')
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        handleDraw(userChoice, computerChoice);
    }

    if ((userChoice == 'rock' && computerChoice == 'paper') ||
        (userChoice == 'paper') && (computerChoice == 'scissors') ||
        (userChoice == 'scissors') && (computerChoice == 'rock')
    ) {
        handleWin(userChoice, computerChoice);
    }

    if ((userChoice == 'paper' && computerChoice == 'rock') ||
        ((userChoice == 'rock') && (computerChoice == 'scissors')) ||
        ((userChoice == 'scissors') && (computerChoice == 'paper'))
    ) {
        handleLose(userChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game('rock');
    });
    paper_div.addEventListener('click', () => {
        game('paper');
    });
    scissors_div.addEventListener('click', () => {
        game('scissors');
    });
}

main();
