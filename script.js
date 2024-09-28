let playerScore = 0, botScore = 0, round = 1

const resultContainer = document.querySelector('#result')
const resultParagraph = document.createElement('p')
const playerScoreParagraph = document.createElement('p')
const botScoreParagraph = document.createElement('p')
const roundParagraph = document.createElement('p')

resultParagraph.classList.add('result-paragraph')

resultContainer.appendChild(resultParagraph)
resultContainer.appendChild(playerScoreParagraph)
resultContainer.appendChild(botScoreParagraph)

document.querySelector('#buttons-container').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        let playerChoice = e.target.id.toUpperCase()
        playRound(playerChoice, getComputerChoice())
    }
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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'
        || playerChoice === 'PAPER' && computerChoice === 'ROCK'
        || playerChoice === 'SCISSORS' && computerChoice === 'PAPER'
    ) {
        resultParagraph.textContent = `${playerChoice} vs ${computerChoice}. You Win!`
        playerScore++
    }
    else if (playerChoice === 'ROCK' && computerChoice === 'PAPER'
        || playerChoice === 'PAPER' && computerChoice === 'SCISSORS'
        || playerChoice === 'SCISSORS' && computerChoice === 'ROCK'
    ) {
        resultParagraph.textContent = `${playerChoice} vs ${computerChoice}. You Loose!`
        botScore++
    }
    else {
        resultParagraph.textContent = `${playerChoice} vs ${computerChoice}. It's a tie!`
    }

    playerScoreParagraph.textContent = 'Your score: ' + playerScore
    botScoreParagraph.textContent = 'Bot score: ' + botScore

    round++

    if (playerScore === 5 || botScore === 5) showWinner()
}

function showWinner() {
    resultParagraph.textContent = 'The game is over!'

    if (playerScore < botScore) {
        resultParagraph.textContent += ' ... you loose :('
    }
    else if (playerScore > botScore) {
        resultParagraph.textContent += ' YOU WIN!'
    } else {
        resultParagraph.textContent += ' IT\'S A TIE!'
    }

    resultParagraph.classList.add('big-text')

    disableButtons()
}

function disableButtons() {
    const buttons = document.querySelectorAll('#buttons-container button')

    buttons.forEach(button => {
        button.disabled = true
    })
}