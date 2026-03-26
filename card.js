// let firstcard=getRandomCard()
// let secondcard=getRandomCard()
// // for an arr 
// let cards = [firstcard, secondcard]
// let sum = firstcard + secondcard
let player = {
    name: "Per",
    chips: 200
}
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl= document.getElementById("messageel")
let sumEl= document.getElementById("sum-el")
let cardsEl=document.getElementById("cardsEl")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function startgame() {
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
        // calling that aaray 
        // cardsEl.textContent = "Cards: "+ cards[0]+ " "+ cards[1]

        sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newgame(){
    if(isAlive===true && hasBlackJack===false){
    let card=getRandomCard()
    sum+=card
cards.push(card)
renderGame()
    }
}











