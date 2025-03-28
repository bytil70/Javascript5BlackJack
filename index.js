let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ''

if (sum <= 20) {
    message = 'Do you want to draw a new card? 🤔'
} else if (sum === 21) {
    message ='Wohoo! You have got a Blackjack! 🥳'
    hasBlackjack = true
} else {
    message ='You are out of the game! 😭'
    isAlive = false
}

console.log(message)
