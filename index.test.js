const generateRandomNumber = require('./index.js')

const iterations = 10000000

for (let i = 0; i < iterations; i++) {
    const randomNumber = generateRandomNumber(1, 6)
    if (randomNumber < 1) {
        throw Error(`generateRandomNumber(1,6) gave a number below 1. The number was: ${randomNumber}`)
    } else if (randomNumber > 6) {
        throw Error(`generateRandomNumber(1,6) gave a number above 6. The number was: ${randomNumber}`)
    }
}

for (let i = 0; i < iterations; i++) {
    const randomNumber = generateRandomNumber(1, 12)
    if (randomNumber < 1) {
        throw Error(`generateRandomNumber(1,12) gave a number below 1. The number was: ${randomNumber}`)
    } else if (randomNumber > 12) {
        throw Error(`generateRandomNumber(1,12) gave a number above 12. The number was: ${randomNumber}`)
    }
}

for (let i = 0; i < iterations; i++) {
    const randomNumber = generateRandomNumber(1, 20)
    if (randomNumber < 1) {
        throw Error(`generateRandomNumber(1,20) gave a number below 1. The number was: ${randomNumber}`)
    } else if (randomNumber > 20) {
        throw Error(`generateRandomNumber(1,20) gave a number above 20. The number was: ${randomNumber}`)
    }
}