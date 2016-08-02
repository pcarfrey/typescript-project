/**
 * Created by pcarfrey on 6/28/16.
 */
///<reference path="ProductCategory.ts"/>

interface IProduct {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements IProduct {
    name = "please select a product";
    price = 0;
}

class CocaCola implements IProduct{
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();
}

class Pepsi implements IProduct{
    name = "Pepsi";
    price = 2.29;
    category = new SodaCategory();
}

class Lollipop implements IProduct {
    name: string = "Lollipop";
    price = 1.10;
    category = new CandyCategory();
}

class Gummies implements IProduct {
    name: string = "Gummies";
    price = 2.50;
    category = new CandyCategory();
}

class Hersey implements IProduct {
    name = "Hersey's";
    price = 1.80;
    category = new ChocolateCategory();
}

class Milkyway implements IProduct {
    name = "Milky Way";
    price = 1.95;
    category = new ChocolateCategory();
}

class Doritos implements IProduct {
    name = "Doritos";
    price = 1.25;
    category = new ChipsCategory();
}

class Pringles implements IProduct {
    name = "Pringles";
    price = 1.49;
    category = new ChipsCategory();
}