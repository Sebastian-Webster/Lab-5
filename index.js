function rollDice() {
    //Get selected dice
    var buttonID = document.getElementsByClassName('selectedButton')[0].id;

    if (buttonID = 'sixSidedDieButton') {
        const randomNumber = generateRandomNumber(1,6)
        document.getElementById('dicePhoto').src = `diceImages/sixSides/${randomNumber}.png`
    }
}

function generateRandomNumber(min, max) {
    // Answer from https://stackoverflow.com/a/69839611
    let range = {min, max}
    let delta = range.max - range.min

    return Math.round(range.min + Math.random() * delta)
}