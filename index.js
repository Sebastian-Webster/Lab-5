function generateRandomNumber(min, max) {
    // Answer from https://stackoverflow.com/a/69839611
    let range = {min, max}
    let delta = range.max - range.min

    return Math.round(range.min + Math.random() * delta)
}

function rollDice() {
    //Get selected dice
    let buttonID = document.getElementsByClassName('selectedButton')[0].id.toString();

    if (buttonID == 'sixSidedDieButton') {
        const randomNumber = generateRandomNumber(1,6)
        // Help from https://stackoverflow.com/a/11722422/
        document.getElementById('sixSidedDiePhoto').src = `diceImages/sixSides/${randomNumber}.png`
        //
    } else if (buttonID == 'twentySidedDieButton') {
        const randomNumber = generateRandomNumber(1, 20)
        document.getElementById('dicePhoto').innerHTML = `<img src="diceImages/twentySides/triangle.png" id="twentySidedDiePhoto" width="200px" height="200px"><h1 class="diceTextValue">${randomNumber}</h1>`
    } else if (buttonID == 'twelveSidedDieButton') {
        const randomNumber = generateRandomNumber(1, 12)
        document.getElementById('dicePhoto').innerHTML = `<img src="diceImages/twelveSides/pentagon.png" id="twelveSidedDiePhoto" width="200px" height="200px"><h1 class="diceTextValue">${randomNumber}</h1>`
    } else {
        throw Error(`Invalid button ID generated in rollDice() : ${buttonID}`)
    }
}

function changeDiePhoto(ID) {
    if (ID == 'sixSidedDieButton') {
        document.getElementById('dicePhoto').innerHTML = '<img src="diceImages/sixSides/6.png" id="sixSidedDiePhoto" width="200px" height="200px">'
    } else if (ID == 'twentySidedDieButton') {
        document.getElementById('dicePhoto').innerHTML = '<img src="diceImages/twentySides/triangle.png" id="twentySidedDiePhoto" width="200px" height="200px"><h1 class="diceTextValue">20</h1>'
    } else if (ID == 'twelveSidedDieButton') {
        document.getElementById('dicePhoto').innerHTML = '<img src="diceImages/twelveSides/pentagon.png" id="twentySidedDiePhoto" width="200px" height="200px"><h1 class="diceTextValue">12</h1>'
    } else {
        throw Error(`Invalid button ID provided to changeDiePhoto(ID) : ${ID}`)
    }
}

function toggleTestMode() {
    let elements = document.getElementsByClassName('testMode');

    console.log(elements)

    if (elements[0].style.opacity == 1) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 0
        }
        document.getElementById('pageTitle').innerHTML = 'devInc Dice Generator'
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 1
        }
        document.getElementById('pageTitle').innerHTML = 'Click me to turn Test Mode off'
    }
}

function showErrorText(resultText, message) {
    resultText.style.color = 'red'
    resultText.style.fontWeight = 'bold'
    resultText.innerHTML = message
}

function showCompletionMessage(resultText, message) {
    resultText.style.color = 'green'
    resultText.style.fontWeight = 'normal'
    resultText.innerHTML = message
}

function resetMessageToDefault(resultText) {
    resultText.style.color = 'black'
    resultText.style.fontWeight = 'normal'
    resultText.innerHTML = ''
}

function testProgram() {
    let resultText = document.getElementById('testResult')
    resetMessageToDefault(resultText);
    resultText.innerHTML = 'Running test...'

    setTimeout(() => {
        try {
            testGenerateRandomNumber()
            showCompletionMessage(resultText, 'Congratulations! All tests passed!')
        } catch (error) {
            showErrorText(resultText, `Error occured while testing testGenerateRandomNumber(): ${error}`)
        }
    }, 100);
}

function testGenerateRandomNumber() {
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

    for (let i = 0; i < iterations; i++) {
        const randomNumber = generateRandomNumber(20, 50)
        if (randomNumber < 20) {
            throw Error(`generateRandomNumber(20,50) gave a number below 20. The number was: ${randomNumber}`)
        } else if (randomNumber > 50) {
            throw Error(`generateRandomNumber(20,50) gave a number above 50. The number was: ${randomNumber}`)
        }
    }

    for (let i = 0; i < iterations; i++) {
        const randomNumber = generateRandomNumber(-20, 100)
        if (randomNumber < -20) {
            throw Error(`generateRandomNumber(-20,100) gave a number below -20. The number was: ${randomNumber}`)
        } else if (randomNumber > 100) {
            throw Error(`generateRandomNumber(-20,100) gave a number above 100. The number was: ${randomNumber}`)
        }
    }
}

function selectButtonWithID(ID) {
   let selectedButton = document.getElementsByClassName('selectedButton')[0]
   selectedButton.classList.remove('selectedButton')

    changeDiePhoto(ID)

   document.getElementById(ID).classList.add('selectedButton')
}

module.exports = generateRandomNumber