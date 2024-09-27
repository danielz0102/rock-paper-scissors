let humanScore = 0, computerScore = 0, round = 1

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const resultContainer = document.querySelector('#result')
const result = document.createElement('p')
const playerScore = document.createElement('p')
const botScore = document.createElement('p')

resultContainer.appendChild(result)
resultContainer.appendChild(playerScore)
resultContainer.appendChild(botScore)

document.body.addEventListener('click', e => {
    let playerChoice

    playerChoice = (e.target === rockBtn ? 'ROCK' :
        e.target === paperBtn ? 'PAPER' :
        'SCISSORS'
    )
    
    playRound(playerChoice, getComputerChoice())
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
    if (round > 5) showWinner()
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