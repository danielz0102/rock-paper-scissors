let humanScore = 0, computerScore = 0, round = 1


const resultContainer = document.querySelector('#result')
const result = document.createElement('p')
const playerScore = document.createElement('p')
const botScore = document.createElement('p')
const LAST_ROUND = 5

resultContainer.appendChild(result)
resultContainer.appendChild(playerScore)
resultContainer.appendChild(botScore)

document.querySelector('#buttons-container').addEventListener('click', e => {
    let playerChoice = e.target.id.toUpperCase()
    playRound(playerChoice, getComputerChoice())
})

document.querySelector('#restart').addEventListener('click', () => {
    location.reload()
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    
    return (choice === 0 ? 'ROCK' :
        choice === 1 ? 'PAPER' :
        'SCISSORS'
    )
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        return
    }

    if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS'
        || humanChoice === 'PAPER' && computerChoice === 'ROCK'
        || humanChoice === 'SCISSORS' && computerChoice === 'PAPER'
    ) {
        result.textContent = `${humanChoice} vs ${computerChoice}. You Win!`
        humanScore++
    }
    else if (humanChoice === 'ROCK' && computerChoice === 'PAPER'
        || humanChoice === 'PAPER' && computerChoice === 'SCISSORS'
        || humanChoice === 'SCISSORS' && computerChoice === 'ROCK'
    ) {
        result.textContent = `${humanChoice} vs ${computerChoice}. You Loose!`
        computerScore++
    }
    else {
        result.textContent = `${humanChoice} vs ${computerChoice}. It's a tie!`
    }

    playerScore.textContent = 'Your score: ' + humanScore
    botScore.textContent = 'Bot score: ' + computerScore

    round++
    if (round > LAST_ROUND) showWinner()
}

function showWinner() {
    result.textContent = 'The game is over!'

    if (humanScore < computerScore) {
        result.textContent += ' ... you loose :('
    }
    else if (humanScore > computerScore) {
        result.textContent += ' YOU WIN!'
    } else {
        result.textContent += ' IT\'S A TIE!'
    }
}

function disableButtons() {

}