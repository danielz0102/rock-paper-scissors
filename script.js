let humanScore = 0, computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    
    return choice === 0 ? 'Rock' :
        choice === 1 ? 'Paper' :
        'Scissors'
}

function getHumanChoice() {
    let choice = prompt('Enter an option: Rock, Paper or Scissors').toLocaleLowerCase().trim()

    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        alert('Sorry, that\'s not correct. Please, choice rock, paper or scissors.')
        return 0
    }

    return choice
}

function playRound(humanChoice, computerChoice) {

}

console.log(getHumanChoice())