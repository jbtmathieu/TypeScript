"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    Object.defineProperty(Sejour.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_newName) {
            this._name = _newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (_newPrice) {
            this._price = _newPrice;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = new Array(0);
        this.sejours.push(new Sejour('Paris', 500));
        this.sejours.push(new Sejour('Londres', 600));
        this.sejours.push(new Sejour('Nice', 300));
    }
    SejourService.prototype.searchByName = function (_name) {
        for (var _i = 0, _a = this.sejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (_name === sejour.name) {
                return sejour;
            }
        }
        /* Attention code suivant ne retourne pas depuis searchByName
                        this.sejours.forEach((sejour) => {
                            console.log(sejour)
                            console.log(sejour.name);
                            console.log(_name)
                            if (_name === sejour.name){
                                return sejour;
                                }
                    });*/
        try {
            throw new Error("S\u00E9jour '" + _name + "' non trouv\u00E9.");
        }
        catch (e) {
            console.log(e);
        }
    };
    return SejourService;
}());
var sejourService = new SejourService;
console.log(sejourService.searchByName('Paris'));
console.log(sejourService.searchByName('Londres'));
console.log(sejourService.searchByName('Nantes'));
console.log(sejourService.searchByName('Nice'));
