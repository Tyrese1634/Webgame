let playerWins = 0;
let computerWins = 0;
let matchesPlayed = 0;

function playGame(playerChoice) {
    if (matchesPlayed >= 3) {
        setTimeout(function () {
            alert('The game is over. Click "Restart Game" to play again.');
        }, 0);
        return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    displayChoice('player-choice', playerChoice);
    displayChoice('computer-choice', computerChoice);

    const result = determineWinner(playerChoice, computerChoice);

    updateScore(result);
}

function displayChoice(elementId, choice) {
    const choiceElement = document.getElementById(elementId);

    const imageMap = {
        'rock': 'stone.png',
        'paper': 'paper.png',
        'scissors': 'scissors.png'
    };

    const imageName = imageMap.hasOwnProperty(choice) ? imageMap[choice] : '';

    // Set the inner HTML to the image tag with a class for styling
    choiceElement.innerHTML = `<img class="game-image" src="img/${imageName}" alt="${choice}">`;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        playerWins++;
        return 'You win!';
    } else {
        computerWins++;
        return 'Computer wins!';
    }
}

function updateScore(result) {
    matchesPlayed++;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Match ${matchesPlayed}: ${result}`;

    if (matchesPlayed === 3) {
        displayFinalResult();
    } else {
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Score - You: ${playerWins}, Computer: ${computerWins}`;
    }
}

function displayFinalResult() {
    const scoreElement = document.getElementById('score');
    if (playerWins > computerWins) {
        scoreElement.textContent = 'You win the game!';
    } else if (playerWins < computerWins) {
        scoreElement.textContent = 'Computer wins the game!';
    } else {
        scoreElement.textContent = 'It\'s a tie! No overall winner.';
    }
}

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    matchesPlayed = 0;

    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = '';

    displayChoice('player-choice', '');
    displayChoice('computer-choice', '');
}

