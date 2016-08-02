/**
 * Created by pcarfrey on 6/28/16.
 */
abstract class ProductCategory {
    protected _imgPath = "img/";

    name: string;

    abstract getImageUrl(): string;
}

class CandyCategory extends ProductCategory{
    name = "Candy";

    getImageUrl():string {
        return this._imgPath + "candy.png";
    }
}

class ChocolateCategory extends ProductCategory{
    name = "Chocolate";

    getImageUrl():string {
        return this._imgPath + "chocolate.png";
    }
}

class ChipsCategory extends ProductCategory{
    name = "Chips";

    getImageUrl():string {
        return this._imgPath + "chips.png";
    }
}

class SodaCategory extends ProductCategory{
    name = "Soda";

    getImageUrl():string {
        return this._imgPath + "soda.png";
    }
}