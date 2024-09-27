let humanScore = 0, computerScore = 0

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const resultContainer = document.querySelector('#result')
const combat = document.createElement('p')
const playerScore = document.createElement('p')
const botScore = document.createElement('p')

resultContainer.appendChild(combat)
resultContainer.appendChild(playerScore)
resultContainer.appendChild(botScore)

document.body.addEventListener('click', e => {
    if (e.target === rockBtn) playRound('ROCK', getComputerChoice())
    if (e.target === paperBtn) playRound('PAPER', getComputerChoice())
    if (e.target === scissorsBtn) playRound('SCISSORS', getComputerChoice())
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    
    return choice === 0 ? 'ROCK' :
        choice === 1 ? 'PAPER' :
        'SCISSORS'
}

function getHumanChoice() {
    let choice = prompt('Enter an option: Rock, Paper or Scissors')

    if (choice !== null) {
        choice = choice.toUpperCase().trim()

        if (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS') {
            console.error('Sorry, that\'s not correct. Please, choice rock, paper or scissors.')
            choice = getHumanChoice()
        }
    }

    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        return
    }

    if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS'
        || humanChoice === 'PAPER' && computerChoice === 'ROCK'
        || humanChoice === 'SCISSORS' && computerChoice === 'PAPER'
    ) {
        combat.textContent = `${humanChoice} vs ${computerChoice}. You Win!`
        humanScore++
    }
    else if (humanChoice === 'ROCK' && computerChoice === 'PAPER'
        || humanChoice === 'PAPER' && computerChoice === 'SCISSORS'
        || humanChoice === 'SCISSORS' && computerChoice === 'ROCK'
    ) {
        combat.textContent = `${humanChoice} vs ${computerChoice}. You Loose!`
        computerScore++
    }
    else {
        combat.textContent = `${humanChoice} vs ${computerChoice}. It's a tie!`
    }

    playerScore.textContent = 'Your score: ' + humanScore
    botScore.textContent = 'Bot score: ' + computerScore
}

function showWinner() {
    const score = `
    You: ${humanScore}
    Bot: ${computerScore}
    `

    if (humanScore < computerScore) {
        console.log(score + 'You loose :\'(')
    }
    else if (humanScore > computerScore) {
        console.log(score + 'You Win! :D')
    } else {
        console.log(score + 'It\'s a tie!')
    }
}