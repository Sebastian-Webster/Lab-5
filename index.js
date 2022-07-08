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
    }
}

function changeDiePhoto(ID) {
    if (ID == 'sixSidedDieButton') {
        document.getElementById('dicePhoto').innerHTML = '<img src="diceImages/sixSides/6.png" id="sixSidedDiePhoto" width="200px" height="200px">'
    } else if (ID == 'twentySidedDieButton') {
        document.getElementById('dicePhoto').innerHTML = '<img src="diceImages/twentySides/triangle.png" id="twentySidedDiePhoto" width="200px" height="200px"><h1 class="diceTextValue">20</h1>'
    } else if (ID == 'twelveSidedDieButton') {
        document.getElementById('dicePhoto').innerHTML = '<img src="diceImages/twelveSides/pentagon.png" id="twentySidedDiePhoto" width="200px" height="200px"><h1 class="diceTextValue">12</h1>'
    }
}

function selectButtonWithID(ID) {
   let selectedButton = document.getElementsByClassName('selectedButton')[0]
   selectedButton.classList.remove('selectedButton')

    changeDiePhoto(ID)

   document.getElementById(ID).classList.add('selectedButton')
}

module.exports = generateRandomNumber