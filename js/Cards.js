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