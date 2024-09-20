let humanScore = 0, computerScore = 0

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
        console.log(`${humanChoice} vs ${computerChoice}. You Win!`)
        humanScore++
    }
    else if (humanChoice === 'ROCK' && computerChoice === 'PAPER'
        || humanChoice === 'PAPER' && computerChoice === 'SCISSORS'
        || humanChoice === 'SCISSORS' && computerChoice === 'ROCK'
    ) {
        console.log(`${humanChoice} vs ${computerChoice}. You Loose!`)
        computerScore++
    }
    else {
        console.log(`${humanChoice} vs ${computerChoice}. It\'s a tie!`)
    }

    console.info('Your score: ' + humanScore)
    console.info('Bot score: ' + computerScore)
}

function playGame() {
    let rounds = 1
    const LAST_ROUND = 5

    while (rounds <= 5) {
        let humanChoice = getHumanChoice()
        
        if (humanChoice === 'ROCK' || humanChoice === 'PAPER' || humanChoice === 'SCISSORS') {
            playRound(humanChoice, getComputerChoice())
        } else {
            break
        }
        
        if (rounds === 5) {
            break
        }
        rounds++
    }
    
    if (rounds === LAST_ROUND) {
        showWinner()
    } else {
        console.log('The game was cancelled')
    }
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

playGame()