class Player {


    constructor(name, award){
        this.name = name;
        this.award = award;
        //award = 0;
        
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