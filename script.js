function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    
    return choice === 0 ? 'Rock' :
        choice === 1 ? 'Paper' :
        'Scissors'
}

function getHumanChoice() {
    let choice = +prompt('Enter a number between 1 and 3')

    return choice === 1 ? 'Rock' :
        choice === 2 ? 'Paper' :
        choice === 3 ? 'Scissors' :
        'Sorry, that\'s not correct. You have to enter a number between 1 and 3.'
}

console.info(getHumanChoice())