let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ''

let messageEl = document.getElementById('message-el')
console.log(messageEl)

function startGame() {

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message ='You have got a Blackjack!'
        hasBlackjack = true
    } else {
        message ='You are out of the game!'
        isAlive = false
    }
    messageEl.textContent = message
}
