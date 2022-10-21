
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
let player= {
    name :"Per",
    chips: "145"

}
playerEl.textContent = player.name +": " +  player.chips + "$"

function getRandomCard(){
    let num = Math.floor((Math.random() * 13) +1)
    if(num === 1){
        return 11;
    }
     else if(num>10){
        return 10;
    }
    else{
        return num
    }

}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard , secondCard]
    renderGame()
}

function renderGame(){
    if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    
    
    }
    else if(sum > 21){
        message = "You're out of the game"
        isAlive = false
    
    
    }
    else if( sum < 21){
        message ="Do you want to draw a new card?"
    

}
cardsEl.textContent ="Cards: " 
for(i =0 ; i<cards.length; i++){
 cardsEl.textContent += cards[i] + " "

}
messageEl.textContent = message
sumEl.textContent = "Sum: " +sum
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum+= card
        renderGame()
    }
 

    
}
