let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let title = document.querySelector('h1');
let info = document.querySelector('.info');
const modal = document.querySelector('.modal');
let player = document.querySelector('.player');
let computer = document.querySelector('.computer');


const computerPlay = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
}

const identifyWeaponSign = (weapon) => {
    return (weapon === 'Rock') ? '✊' :
        (weapon === 'Paper') ? '✋' :
        '✌';
}

showChosenWeapon = () => {
    let playerWeapon = document.querySelector('.playerWeapon');
    let computerWeapon = document.querySelector('.computerWeapon');
    playerWeapon.textContent = identifyWeaponSign(playerChoice);
    computerWeapon.textContent = identifyWeaponSign(computerChoice);
}

const findWinner = () => {
    if (playerChoice === computerChoice) return 2;
    if (playerChoice === 'Rock') return (computerChoice === 'Scissors');
    if (playerChoice === 'Paper') return (computerChoice === 'Rock');
    return (computerChoice === 'Paper');
}

const showRoundResult = () => {
    const whoIsWinner = findWinner();
    if (whoIsWinner === 2){
        title.textContent =  'It\'s a tie';
        info.textContent = `${playerChoice} ties with ${computerChoice}`;
    } else if (whoIsWinner){
        title.textContent =  'You won!';
        info.textContent =  `${playerChoice} beats ${computerChoice}`
    } else {
        title.textContent =  'You lost!';
        info.textContent = `${playerChoice} is beaten by ${computerChoice}`;
    }
}

const countScore = () => {
    const whoIsWinner = findWinner();
    if (whoIsWinner === 2){
        playerScore++;
        computerScore++;
    } else if (whoIsWinner){
        playerScore++;
    } else computerScore++;
}

const showRoundScore = () => {
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

const playRound = (e) => {
    if (!e.target.closest('button')) return;
    const chosenButton = e.target.closest('button');
    playerChoice = chosenButton.dataset.weapon;
    computerChoice = computerPlay();
    showChosenWeapon();
    showRoundResult();
    countScore();
    showRoundScore();
}

const showModal = () => {
    const modalResult = document.querySelector('.modalResult');
    const modalScore = document.querySelector('.modalScore');
    modalResult.textContent = (playerScore > computerScore) ? 'You won' : 'You lost';
    modalScore.textContent = `${playerScore} : ${computerScore}`;
    modal.classList.add('active');
    const restartButton = document.querySelector('.restartBtn');
    restartButton.addEventListener('click', restart);
}

const restart = () => {
    modal.classList.remove('active');
    playerScore = 0;
    computerScore = 0;
    title.textContent =  'Choose your weapon';
    info.textContent = 'First to score 5 points wins the game';
    player.textContent = playerScore;
    computer.textContent = computerScore;
    buttons.addEventListener('click', playGame);
}

const playGame = (e) => {
    playRound(e);
    if (playerScore === 5 || computerScore === 5){
        buttons.removeEventListener('click', playGame);
        showModal();
    }
}  

const buttons = document.querySelector('.buttons');   
buttons.addEventListener('click', playGame);

