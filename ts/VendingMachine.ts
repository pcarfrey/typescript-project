/**
 * Created by pcarfrey on 6/28/16.
 */
///<reference path="Coin.ts"/>
///<reference path="IProduct.ts"/>
///<reference path="ProductFactory.ts"/>


enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: IProduct) {}
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private _paid = ko.observable(0);
    cells = ko.observableArray([]);
    acceptedCoins : Array<Coin> = [new Quarter(), new Dime(), new Nickel(), new Penny];
    selectedCell = ko.observable(new Cell(new Initial()));
    canAfford = ko.pureComputed(() => this._paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product = ProductFactory.getProduct();
            this.cells.push(new Cell(product));
        }
    }

    acceptCoin = (coin : Quarter) : void => {
        let oldTotal = this._paid();
        this._paid(Math.round((oldTotal + coin.value) * 100) / 100);
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    pay = (): void => {
        let outOfStock = this.selectedCell().stock() < 1;
        if (outOfStock) {
            alert("Sorry, out of stock!");
        } else {
            let currentPaid = this._paid();
            this._paid(Math.round(((currentPaid - this.selectedCell().product.price)*100))/100);
            let currentStock = this.selectedCell().stock();
            this.selectedCell().stock(currentStock - 1);
            this.selectedCell().sold(true);
        }
    }

}