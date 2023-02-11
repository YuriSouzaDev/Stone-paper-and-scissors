//let getUserChoice = prompt('Pedra, papel ou tesoura?')
//let getUserChoice = 'Pedra'
let getUserChoice = Math.random() * 3
    if (getUserChoice < 1) {
        getUserChoice = 'Pedra'
    } else if (getUserChoice <= 2) {
        getUserChoice = 'Papel'
    } else {
        getUserChoice = 'Tesoura'
    }

let getComputerChoice = Math.random() * 3
    if (getComputerChoice < 1) {
        getComputerChoice = 'Pedra'
    } else if (getComputerChoice <= 2) {
        getComputerChoice = 'Papel'
    } else {
        getComputerChoice = 'Tesoura'
    }

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return console.log('É um empate')
    } 
    
    if (computerSelection === 'Pedra') {
        if (playerSelection === 'Papel') {
            console.log('Você ganhou!')
        } else {
            console.log('O computador ganhou!')
        }
    }

    if (computerSelection === 'Papel') {
        if (playerSelection === 'Tesoura') {
            console.log('Você ganhou!')
        } else {
            console.log('O computador ganhou!')
        }
    }

    if (computerSelection === 'Tesoura') {
        if (playerSelection === 'Pedra') {
            console.log('Você ganhou!')
        } else {
            console.log('O computador ganhou!')
        }
    }
}

playerSelection = getUserChoice
computerSelection = getComputerChoice
console.log(`Você escolheu ${playerSelection}`)
console.log(`O computador escolheu ${computerSelection}`)
playRound(playerSelection, computerSelection)