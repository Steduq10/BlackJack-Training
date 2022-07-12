class Cards{
    //static cardsCounter = 0;

    constructor(card, value ){
            this.card = card;
            this.value = value;
    
    }

    get card (){
        return this._card;
    }

    set card (card){
        this._card = card;
    }

    get value (){
        return this._value;
    }

    set value (value){
        this._value = value;
    }
    

}

class Player {

    constructor(name, award){
        this.name = name;
        this.award = award;
        
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
    
    get award(){
        return this._award;
    }

    set award(award){
        this._award = award;
    
    }
    
}





const deck = [];
const deckValues = [];

// ♠ objects

//let A1p = new Cards("A♠", 1);
//deck.push(A1p._card);
//eckValues.push(A1p._value);

let A11p = new Cards("A♠", 11);
deck.push(A11p._card);
deckValues.push(A11p._value);


let N2p = new Cards("2♠", 2);
deck.push(N2p._card);
deckValues.push(N2p._value);

let N3p = new Cards("3♠", 3);
deck.push(N3p._card);
deckValues.push(N3p._value);

let N4p = new Cards("4♠", 4);
deck.push(N4p._card);
deckValues.push(N4p._value);

let N5p = new Cards("5♠", 5);
deck.push(N5p._card);
deckValues.push(N5p._value);

let N6p = new Cards("6♠", 6);
deck.push(N6p._card);
deckValues.push(N6p._value);

let N7p = new Cards("7♠", 7);
deck.push(N7p._card);
deckValues.push(N7p._value);

let N8p = new Cards("8♠", 8);
deck.push(N8p._card);
deckValues.push(N8p._value);

let N9p = new Cards("9♠", 9);
deck.push(N9p._card);
deckValues.push(N9p._value);

let N10p = new Cards("10♠", 10);
deck.push(N10p._card);
deckValues.push(N10p._value);

let NJp = new Cards("J♠", 10);
deck.push(NJp._card);
deckValues.push(NJp._value);

let NQp = new Cards("Q♠", 10);
deck.push(NQp._card);
deckValues.push(NQp._value);

let NKp = new Cards("K♠", 10);
deck.push(NKp._card);
deckValues.push(NKp._value);

// ♥ objects   

//let A1c = new Cards("A♥", 1);
//deck.push(A1c._card);
//deckValues.push(A1c._value);

let A11c = new Cards("A♥", 11);
deck.push(A11c._card);
deckValues.push(A11c._value);

let N2c = new Cards("2♥", 2);
deck.push(N2c._card);
deckValues.push(N2c._value);

let N3c = new Cards("3♥", 3);
deck.push(N3c._card);
deckValues.push(N3c._value);

let N4c = new Cards("4♥", 4);
deck.push(N4c._card);
deckValues.push(N4c._value);

let N5c = new Cards("5♥", 5);
deck.push(N5c._card);
deckValues.push(N5c._value);

let N6c = new Cards("6♥", 6);
deck.push(N6c._card);
deckValues.push(N6c._value);

let N7c = new Cards("7♥", 7);
deck.push(N7c._card);
deckValues.push(N7c._value);

let N8c = new Cards("8♥", 8);
deck.push(N8c._card);
deckValues.push(N8c._value);

let N9c = new Cards("9♥", 9);
deck.push(N9c._card);
deckValues.push(N9c._value);

let N10c = new Cards("10♥", 10);
deck.push(N10c._card);
deckValues.push(N10c._value);

let NJc = new Cards("J♥", 10);
deck.push(NJc._card);
deckValues.push(NJc._value);

let NQc = new Cards("Q♥", 10);
deck.push(NQc._card);
deckValues.push(NQc._value);


let NKc = new Cards("K♥", 10);
deck.push(NKc._card);
deckValues.push(NKc._value);


// ♣ objects


//let A1t = new Cards("A♣", 1);
//deck.push(A1t._card);
//deckValues.push(A1t._value);

let A11t = new Cards("A♣", 11);
deck.push(A11t._card);
deckValues.push(A11t._value);

let N2t = new Cards("2♣", 2);
deck.push(N2t._card);
deckValues.push(N2t._value);

let N3t = new Cards("3♣", 3);
deck.push(N3t._card);
deckValues.push(N3t._value);

let N4t = new Cards("4♣", 4);
deck.push(N4t._card);
deckValues.push(N4t._value);

let N5t = new Cards("5♣", 5);
deck.push(N5t._card);
deckValues.push(N5t._value);

let N6t = new Cards("6♣", 6);
deck.push(N6t._card);
deckValues.push(N6t._value);

let N7t = new Cards("7♣", 7);
deck.push(N7t._card);
deckValues.push(N7t._value);

let N8t = new Cards("8♣", 8);
deck.push(N8t._card);
deckValues.push(N8t._value);

let N9t = new Cards("9♣", 9);
deck.push(N9t._card);
deckValues.push(N9t._value);

let N10t = new Cards("10♣", 10);
deck.push(N10t._card);
deckValues.push(N10t._value);

let NJt = new Cards("J♣", 10);
deck.push(NJt._card);
deckValues.push(NJt._value);

let NQt = new Cards("Q♥", 10);
deck.push(NQt._card);
deckValues.push(NQt._value);

let NKt = new Cards("K♥", 10);
deck.push(NKt._card);
deckValues.push(NKt._value);

// ♦ objects

//let A1d = new Cards("A♦", 1);
//deck.push(A1d._card);
//deckValues.push(A1d._value);

let A11d = new Cards("A♦", 11);
deck.push(A11d._card);
deckValues.push(A11d._value);

let N2d = new Cards("2♦", 2);
deck.push(N2d._card);
deckValues.push(N2d._value);

let N3d = new Cards("3♦", 3);
deck.push(N3d._card);
deckValues.push(N3d._value);

let N4d = new Cards("4♦", 4);
deck.push(N4d._card);
deckValues.push(N4d._value);

let N5d = new Cards("5♦", 5);
deck.push(N5d._card);
deckValues.push(N5d._value);

let N6d = new Cards("6♦", 6);
deck.push(N6d._card);
deckValues.push(N6d._value);

let N7d = new Cards("7♦", 7);
deck.push(N7d._card);
deckValues.push(N7d._value);

let N8d = new Cards("8♦", 8);
deck.push(N8d._card);
deckValues.push(N8d._value);

let N9d = new Cards("9♦", 9);
deck.push(N9d._card);

let N10d = new Cards("10♦", 10);
deck.push(N10d._card);
deckValues.push(N10d._value);

let NJd = new Cards("J♦", 10);
deck.push(NJd._card);
deckValues.push(NJd._value);

let NQd = new Cards("Q♦", 10);
deck.push(NQd._card);
deckValues.push(NQd._value);

let NKd = new Cards("K♦", 10);
deck.push(NKd._card);
deckValues.push(NKd._value);

/*
for (let i=0; i < deckValues.length; i++){
    console.log(deckValues[i]);

}
*/

// Selectedcard array

let selectedCards = [];
let selectedCardsValue = [];

const i_firstCard=Math.floor(Math.random() * deck.length);
const i_secondCard=Math.floor(Math.random() * deck.length);

function startGame(){
    //TO DO: Add the first 2 cards randomly to the user
    //Math.random() - 0 - cards.length
    
    while(i_firstCard == i_secondCard){
        const i_secondCard=Math.floor(Math.random() * deck.length);
    }
        const firstCard=deck[i_firstCard];
        const secondCard=deck[i_secondCard];

        const firstCardValue = deckValues[i_firstCard];
        const secondCardValue = deckValues[i_secondCard];
  
        selectedCards.push(firstCard);
        selectedCards.push(secondCard);
        selectedCardsValue.push(firstCardValue);
        selectedCardsValue.push(secondCardValue);

        
        
        console.log("Cards: "+ selectedCards);
        sumCards(selectedCardsValue);
        //playingGame(sum);

        


  }

  function sumCards(selectedCardsValue){
    let sum = 0;
    for (let i=0; i < selectedCardsValue.length; i++){
    //console.log(selectedCardsValue[i]);
    sum += selectedCardsValue[i];
    }
    console.log("Sum: " + sum);
    playingGame(sum);
  }

  function playingGame(sum){
    console.log(sum);
    if(sum<18){
      //console.log("Do you want to draw a card? (Y/N)"); //Input
      drawCard();
    }
    else if(sum >= 18 && sum <= 21 ){
        console.log("¡BlackJack!");
    }else{
        console.log("You lose. GAME OVER");
    }
  }


function drawCard(){
    const readline = require('readline');
      let interfazCaptura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
      interfazCaptura.question("Do you want to draw a card? (Y/N): ", function(answer){
        //console.log("Answer: " + answer);
        switch(answer){
            case "Y" || "y":
                console.log("Drawing the card...");
                //newCard(i_firstCard, i_secondCard);
                newCard();
                break;
            case "N" || "n":
                console.log("Game over");
                break;
                default:
                    console.log("Invalid input. ");
                    break;
          }

        interfazCaptura.close();
      });
  }

    function newCard (){
        const i_newCard=Math.floor(Math.random() * deck.length);
    while(i_firstCard == i_secondCard || i_newCard == i_secondCard || i_newCard == i_firstCard){
        const i_newCard=Math.floor(Math.random() * deck.length);
    }
        const newCard=deck[i_newCard];

        const newCardValue = deckValues[i_newCard];
        
  
        selectedCards.push(newCard);
        
        selectedCardsValue.push(newCardValue);
       

        
        
        console.log("Cards: "+ selectedCards);
        sumCards(selectedCardsValue);
        drawCard();
    }




  
console.log("*****************************************");
console.log("               Blackjack                 ");
console.log("*****************************************");
console.log("");
console.log("Feeling with luck? - Give it a try~~");
console.log("");

var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);
    rl.question('What is your name? ', (name) => {
        console.log('Welcome: ' + name);
        let award = 0;
        let player = new Player(name,award);
        startGame();
    });
    
      


