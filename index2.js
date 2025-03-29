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

let list = [7, 4]

cards.push(6)
console.log(list) //output [7, 4, 6]

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

// create a person object that contains 3 keys: name, age, and country
// Use yourself as an example to set the values for name, age and country

// Use a function, logData(), that use the person object t; create a 
// string into the following format:
// 'Burn is 69 years old and live in Hong Kong'

// call the logData() function to verify that it works

let person = {
    name: 'Burn',
    age: 69,
    country: 'Hong Kong'
}

function logData () {
    console.log(person.name + ' is ' + person.age + ' years old and live in ' + person.country)
}

logData() // output the person content

// study if
let age = 15
if (age < 6) {
    console.log('free')
} else if (age < 18) {
    console.log('child discount')
} else if (age < 27) {
    console.log('student discount')
} else if (age < 67) {
    console.log('full price')
} else {
    console.log('senior citizen discount')
}

//4:20 loops and array
let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']
// use a for loop to log the countries to the cnsole

console.log('The 5 largest Countries in the world:')
for (let i = 0; i < largeCountries.length; i ++) {
    console.log('- ' + largeCountries[i])
}

// Lesson 4: push, pop, unshift, shift challenge
let bigCountries = ['Tavalu', 'India', 'USA', 'Indonesia', 'Monaco']
// You need to fixup the bigCountries array so that
// China and Pakistan are add back into their respective places

// use push() and pop() and their counterparts unshift() and shift()
// Google how to use unshift() and shift()

bigCountries.pop() // del the last
bigCountries.push('Pakistan') // add to the end
bigCountries.shift() // del the first
bigCountries.unsfift('China') // add it on the beginning
console.log(bigCountries)

// Lesson 5: Logical Operators
let dayOfMonth = 13
let weekday = 'Friday'

// if it is Friday the 13th, log out this spooky face: 😱
// use the logical 'And operator' -> &&

if (dayOfMonth === 13 && weekday === 'Friday') {
    console.log('😱')
}

let hands = ['rock', 'paper', 'scissors']
// create a function that returns a random item from the array

// Lesson 6: random pick item
function getHand() {
    let randomIndex = Math.floor(Math.random() * 3) // 0-2.999999
    return hands[randomIndex]
}

console.log(getHand())

// Lesson 7: Sorting Fruits
let fruit = ['🍎','🍊','🍎','🍊','🍎']
let appleShelf = document.getElementById('apple-shelf')
let orangeShelf = document.getElementById('orange-shelf')

// create a function that put the apple onto the appleShelf
// and the orange onto the orangeShelf. Use a for loop
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i = 0; i < fruit.length; i ++) {
        if (fruit[i] === '🍎') {
            appleShelf.textContent += '🍎'
        } else if (fruit[i] === '🍊') {
            orangeShelf.textContent += '🍊'
        }
    }
}

sortFruit()