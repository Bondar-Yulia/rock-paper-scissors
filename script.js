const computerPlay = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
}

const playerPlay = () => prompt('Enter your weapon');

const whoIsWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) return 2;
    if (playerSelection === 'Rock') return (computerSelection === 'Scissors');
    if (playerSelection === 'Paper') return (computerSelection === 'Rock');
    return (computerSelection === 'Paper');
}

const playRound = (playerSelection, computerSelection) => {
    if (whoIsWinner(playerSelection, computerSelection) === 2) return 'It\'s a tie';
    return (whoIsWinner(playerSelection, computerSelection)) ? `You won! ${playerSelection} beats ${computerSelection}` : `You lost! ${playerSelection} is beaten by ${computerSelection}`;
}

const gameResult = (playerScore, computerScore) => {
    let message = (playerScore > computerScore) ? 'You won!' : 
        (playerScore < computerPlay) ? 'You lost' : 'It\'s tie';
    return message + '\n' + `Total score is ${playerScore} : ${computerScore}`;
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {    
        let computerSelection = computerPlay();
        let playerSelection =  playerPlay();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        if(whoIsWinner(playerSelection, computerSelection) === 2){
            playerScore++;
            computerScore++;
        } else if(whoIsWinner(playerSelection, computerSelection)) playerScore++;
        else computerScore++;
        alert(playRound(playerSelection, computerSelection) + '\n' + `Current score is ${playerScore} : ${computerScore}` );
    } 
    alert(gameResult(playerScore, computerScore));
}

game();
