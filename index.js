
let player = {
    name: 'BurnLai',
    chips: 200
    }

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else{
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // general 2 anom nums
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    // Refer to the cards array when rendering out the cards
    cardsEl.textContent = 'Cards: '
    // create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum

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

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}