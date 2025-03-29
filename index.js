let firstCard = 10
let secondCard = 4
// create a new array - cards - that contain firstCard and secondCard
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ''

let messageEl = document.getElementById('message-el')

let sumEl = document.getElementById('sum-el')

let cardsEl = document.getElementById('cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    // Refer to the cards array when rendering out the cards
    cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1]
    // render out all the cards we have
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
    console.log('Drawing a new card from the deck!')
    let card = 6
    sum += card
    // push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}
