class Cards{
    //static cardsCounter = 0;

    constructor(card, value ){
            this.card = card;
           // this.type = type;
            this.type = value;
    
    }

    get card (){
        return this._card;
    }

    set card (card){
        this._card = card;
    }
/*
    get type (){
        return this._type;
    }

    set type (type){
        this._type = type;
    }
*/
    get value (){
        return this._value;
    }

    set value (value){
        this._value = value;
    }
    nameCard(){
        return this._card; 
    }

    toString(){
        return this.nameCard();
   
    }

}
const deck = [];
// ♠ objects

let A1p = new Cards("A♠", 1);
deck.push(A1p._card);

let A11p = new Cards("A♠", 11);
deck.push(A11p._card);

let N2p = new Cards("2♠", 2);
deck.push(N2p._card);

let N3p = new Cards("3♠", 3);
deck.push(N3p._card);

let N4p = new Cards("4♠", 4);
deck.push(N4p._card);

let N5p = new Cards("5♠", 5);
deck.push(N5p._card);

let N6p = new Cards("6♠", 6);
deck.push(N6p._card);

let N7p = new Cards("7♠", 7);
deck.push(N7p._card);

let N8p = new Cards("8♠", 8);
deck.push(N8p._card);

let N9p = new Cards("9♠", 9);
deck.push(N9p._card);

let N10p = new Cards("10♠", 10);
deck.push(N10p._card);

let NJp = new Cards("J♠", 10);
deck.push(NJp._card);

let NQp = new Cards("Q♠", 10);
deck.push(NQp._card);

let NKp = new Cards("K♠", 10);
deck.push(NKp._card);

// ♥ objects   

let A1c = new Cards("A♥", 1);
deck.push(A1c._card);

let A11c = new Cards("A♥", 11);
deck.push(A11c._card);

let N2c = new Cards("2♥", 2);
deck.push(N2c._card);

let N3c = new Cards("3♥", 3);
deck.push(N3c._card);

let N4c = new Cards("4♥", 4);
deck.push(N4c._card);

let N5c = new Cards("5♥", 5);
deck.push(N5c._card);

let N6c = new Cards("6♥", 6);
deck.push(N6c._card);

let N7c = new Cards("7♥", 7);
deck.push(N7c._card);

let N8c = new Cards("8♥", 8);
deck.push(N8c._card);

let N9c = new Cards("9♥", 9);
deck.push(N9c._card);

let N10c = new Cards("10♥", 10);
deck.push(N10c._card);

let NJc = new Cards("J♥", 10);
deck.push(NJc._card);

let NQc = new Cards("Q♥", 10);
deck.push(NQc._card);

let NKc = new Cards("K♥", 10);
deck.push(NKc._card);


// ♣ objects


let A1t = new Cards("A♣", 1);
deck.push(A1t._card);

let A11t = new Cards("A♣", 11);
deck.push(A11t._card);

let N2t = new Cards("2♣", 2);
deck.push(N2t._card);

let N3t = new Cards("3♣", 3);
deck.push(N3t._card);

let N4t = new Cards("4♣", 4);
deck.push(N4t._card);

let N5t = new Cards("5♣", 5);
deck.push(N5t._card);

let N6t = new Cards("6♣", 6);
deck.push(N6t._card);

let N7t = new Cards("7♣", 7);
deck.push(N7t._card);

let N8t = new Cards("8♣", 8);
deck.push(N8t._card);

let N9t = new Cards("9♣", 9);
deck.push(N9t._card);

let N10t = new Cards("10♣", 10);
deck.push(N10t._card);

let NJt = new Cards("J♣", 10);
deck.push(NJt._card);

let NQt = new Cards("Q♥", 10);
deck.push(NQt._card);

let NKt = new Cards("K♥", 10);
deck.push(NKt._card);

// ♦ objects

let A1d = new Cards("A♦", 1);
deck.push(A1d._card);

let A11d = new Cards("A♦", 11);
deck.push(A11d._card);

let N2d = new Cards("2♦", 2);
deck.push(N2d._card);

let N3d = new Cards("3♦", 3);
deck.push(N3d._card);

let N4d = new Cards("4♦", 4);
deck.push(N4d._card);

let N5d = new Cards("5♦", 5);
deck.push(N5d._card);

let N6d = new Cards("6♦", 6);
deck.push(N6d._card);

let N7d = new Cards("7♦", 7);
deck.push(N7d._card);

let N8d = new Cards("8♦", 8);
deck.push(N8d._card);

let N9d = new Cards("9♦", 9);
deck.push(N9d._card);

let N10d = new Cards("10♦", 10);
deck.push(N10d._card);

let NJd = new Cards("J♦", 10);
deck.push(NJd._card);

let NQd = new Cards("Q♦", 10);
deck.push(NQd._card);

let NKd = new Cards("K♦", 10);
deck.push(NKd._card);

for (let i=0; i < deck.length; i++){
    console.log(deck[i]);

}


