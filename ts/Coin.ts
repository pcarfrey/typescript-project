/**
 * Created by pcarfrey on 6/28/16.
 */
    
abstract class Coin {

    protected _imgPath = "img/";

    constructor(protected _value: number) {}

    get value():number {
        return this._value;
    }

    abstract getImageUrl(): string;
}

class Quarter extends Coin {

    constructor() {
        super(.25);
    }

    getImageUrl():string {
        return this._imgPath + "quarter.png";
    }
}

class Dime extends Coin {

    constructor() {
        super(.1);
    }

    getImageUrl():string {
        return this._imgPath + "dime.png";
    }
}

class Nickel extends Coin {

    constructor() {
        super(.05);
    }

    getImageUrl():string {
        return this._imgPath + "nickel.png";
    }
}

class Penny extends Coin {

    constructor() {
        super(.01);
    }

    getImageUrl():string {
        return this._imgPath + "penny.png";
    }
}