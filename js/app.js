var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function () {
    function Coin(_value) {
        this._value = _value;
        this._imgPath = "img/";
    }
    Object.defineProperty(Coin.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Coin;
}());
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        _super.call(this, .25);
    }
    Quarter.prototype.getImageUrl = function () {
        return this._imgPath + "quarter.png";
    };
    return Quarter;
}(Coin));
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        _super.call(this, .1);
    }
    Dime.prototype.getImageUrl = function () {
        return this._imgPath + "dime.png";
    };
    return Dime;
}(Coin));
var Nickel = (function (_super) {
    __extends(Nickel, _super);
    function Nickel() {
        _super.call(this, .05);
    }
    Nickel.prototype.getImageUrl = function () {
        return this._imgPath + "nickel.png";
    };
    return Nickel;
}(Coin));
var Penny = (function (_super) {
    __extends(Penny, _super);
    function Penny() {
        _super.call(this, .01);
    }
    Penny.prototype.getImageUrl = function () {
        return this._imgPath + "penny.png";
    };
    return Penny;
}(Coin));
var ProductCategory = (function () {
    function ProductCategory() {
        this._imgPath = "img/";
    }
    return ProductCategory;
}());
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        _super.apply(this, arguments);
        this.name = "Candy";
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this._imgPath + "candy.png";
    };
    return CandyCategory;
}(ProductCategory));
var ChocolateCategory = (function (_super) {
    __extends(ChocolateCategory, _super);
    function ChocolateCategory() {
        _super.apply(this, arguments);
        this.name = "Chocolate";
    }
    ChocolateCategory.prototype.getImageUrl = function () {
        return this._imgPath + "chocolate.png";
    };
    return ChocolateCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        _super.apply(this, arguments);
        this.name = "Chips";
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this._imgPath + "chips.png";
    };
    return ChipsCategory;
}(ProductCategory));
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        _super.apply(this, arguments);
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this._imgPath + "soda.png";
    };
    return SodaCategory;
}(ProductCategory));
var Initial = (function () {
    function Initial() {
        this.name = "please select a product";
        this.price = 0;
    }
    return Initial;
}());
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Pepsi = (function () {
    function Pepsi() {
        this.name = "Pepsi";
        this.price = 2.29;
        this.category = new SodaCategory();
    }
    return Pepsi;
}());
var Lollipop = (function () {
    function Lollipop() {
        this.name = "Lollipop";
        this.price = 1.10;
        this.category = new CandyCategory();
    }
    return Lollipop;
}());
var Gummies = (function () {
    function Gummies() {
        this.name = "Gummies";
        this.price = 2.50;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Hersey = (function () {
    function Hersey() {
        this.name = "Hersey's";
        this.price = 1.80;
        this.category = new ChocolateCategory();
    }
    return Hersey;
}());
var Milkyway = (function () {
    function Milkyway() {
        this.name = "Milky Way";
        this.price = 1.95;
        this.category = new ChocolateCategory();
    }
    return Milkyway;
}());
var Doritos = (function () {
    function Doritos() {
        this.name = "Doritos";
        this.price = 1.25;
        this.category = new ChipsCategory();
    }
    return Doritos;
}());
var Pringles = (function () {
    function Pringles() {
        this.name = "Pringles";
        this.price = 1.49;
        this.category = new ChipsCategory();
    }
    return Pringles;
}());
var ProductFactory = (function () {
    function ProductFactory() {
    }
    ProductFactory.getProduct = function () {
        var randomNumber = Math.floor(Math.random() * 8);
        switch (randomNumber) {
            case 0: return new CocaCola();
            case 1: return new Pepsi();
            case 2: return new Lollipop();
            case 3: return new Gummies();
            case 4: return new Hersey();
            case 5: return new Milkyway();
            case 6: return new Doritos();
            case 7: return new Pringles();
        }
    };
    return ProductFactory;
}());
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this._paid = ko.observable(0);
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quarter(), new Dime(), new Nickel(), new Penny];
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.canAfford = ko.pureComputed(function () { return _this._paid() - _this.selectedCell().product.price >= 0; });
        this.acceptCoin = function (coin) {
            var oldTotal = _this._paid();
            _this._paid(Math.round((oldTotal + coin.value) * 100) / 100);
        };
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.pay = function () {
            var outOfStock = _this.selectedCell().stock() < 1;
            if (outOfStock) {
                alert("Sorry, out of stock!");
            }
            else {
                var currentPaid = _this._paid();
                _this._paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
                var currentStock = _this.selectedCell().stock();
                _this.selectedCell().stock(currentStock - 1);
                _this.selectedCell().sold(true);
            }
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = ProductFactory.getProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map