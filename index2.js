// array - order list of items

let featuredPosts = [
    'check out my Netflix clone',
    'Here\'s the code for my project',
    'I\'ve just relaunched my profolio'
]

console.log(featuredPosts[0])
console.log(featuredPosts.length)

// create an array that list your i.e., experience, education, licenses, skill...
// The items of the array should be strings

let experience = ['CEO at Scrimba', 'Fronted developer at Xeneta', 'People counter for Norstat']
console.log(experience[0])
console.log(experience[1])

// array of multi data type

let per = ['Per Harald Borgen', 35, true]

let cards = [7, 4]

cards.push(6)
console.log(cards) //output [7, 4, 6]

let messages = [
    'Hey, how\'s it going?',
    'I\'m great, thank you! How about you?',
    'All good. Been working on my portfolio lately.'
]

let newMessage = 'Same here!'

messages.push(newMessage)

console.log(messages)

// How can you remove the last item in an array?
messages.pop()
console.log(messages)

// count in JavaScript
// star finish step
for(let count = 1; count < 11; count += 2) {
    console.log(count)
}

// create a for loop in JavaScript
for(let i = 0; i < 6; i += 1) {
    console.log(i)
}

// write array base loop
let cards = [7, 3, 9]
for (let i = 0; i < cards.length; i += 1) {
    console.log(cards[i])
}

//DOM
let sentence = ['Hello', 'my', 'name', 'is', 'Per']
let greetingEl = document.getElementById('greeting-el')

for(let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + ' ' 
}

// return value in function
let player1Time = 102
let player2Time = 107

function getFasterRaceTime() {
    if(player1Time > player2Time) {
        return player1Time
    } else if (player2Time > player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getFasterRaceTime()
console.log(totalTime)

//use random in JavScript to create a ie function
let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

console.log(rollDice())

let hasCompletedCourse = false
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

if (hasCompletedCourse === true || givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log('Generating certification...')
}

// Objects -store data in-depth - composite / complex data type
// key-valve pairs

let course = {
    title: 'Learn CSS Grid for free',
    lesson: 16,
    creator: 'Per Harald Borgen',
    length: 63,
    level: 2,
    isFree: true,
    tags: ['html', 'css']
}

console.log(course.tags)

// create your first object
// create an object that represents an airbnb castle listing
// it should contain at least one boolean, one string, one numr and one array
// log out at least two of the keys using the dot notaion

let castle = {
    title: 'Live like a king in my castle',
    price: 190,
    isSuperHost: true,
    images:['img/castle1.png', 'img/castle2.png']
}

console.log(castle.price)
console.log(castle.isSuperHost)