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

