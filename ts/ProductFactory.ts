/**
 * Created by pcarfrey on 6/28/16.
 */
///<reference path="IProduct.ts"/>
    
class ProductFactory {
    static getProduct(): IProduct {
        let randomNumber = Math.floor(Math.random() * 8);
        switch(randomNumber) {
            case 0: return new CocaCola();
            case 1: return new Pepsi();
            case 2: return new Lollipop();
            case 3: return new Gummies();
            case 4: return new Hersey();
            case 5: return new Milkyway();
            case 6: return new Doritos();
            case 7: return new Pringles();
        }
    }
}