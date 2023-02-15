const playerbuttons = document.querySelectorAll('#btn')
const playAgain = document.querySelector('.playAgain')
let playerScoreUp = 0
let computerScoreUp = 0

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    return choice [Math.floor(Math.random() * choice.length)]
}

function disableButtons() {
    playerbuttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let scoreInfo = document.querySelector('.scoreInfo')
    let info = document.querySelector('.choose')
    let playerScore = document.querySelector('.playerScore')
    let computerScore = document.querySelector(`.computerScore`)
    let scoreRes = document.querySelector('.score-res')

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScoreUp += 1
        info.innerHTML = ('You win this round!')
        scoreInfo.innerHTML = (`You choose ${playerSelection} and computer ${computerSelection}`)
        playerScore.innerHTML = (playerScoreUp)


        if (playerScoreUp == 5) {
            scoreRes.innerHTML = ('<br><br>You won the game!')
            playAgain.style.visibility = 'visible'
            disableButtons()
        }


    } else if (computerSelection == playerSelection) {
        info.innerHTML = ('It\s a tie!')
        scoreInfo.innerHTML = (`You choose ${playerSelection} and computer ${computerSelection}`)
    } else {
        computerScoreUp += 1
        info.innerHTML = ('Computer win this round!')
        scoreInfo.innerHTML = (`You choose ${playerSelection} and computer ${computerSelection}`)
        computerScore.innerHTML = (computerScoreUp)
       
        if (computerScoreUp == 5) {
            scoreRes.innerHTML = ('<br><br>Computer win the game!')
            playAgain.style.visibility = 'visible'
            disableButtons()
        }

    }
    return
}

playerbuttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

function resetGame() {
      window.location.reload(true)
    }
