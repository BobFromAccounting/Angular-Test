(function () {
    'use strict';

    var app = angular.module("CartTest", []);

    app.controller('CartController', function () {
        this.items = [];

        this.newItem = {
            quantity: "1"
        };

        this.addItem = function (itemsForm) {
            this.items.push(this.newItem);

            this.newItem = {
                quantity: "1"
            };

            $('#name').focus();

            itemsForm.$setPristine();
            itemsForm.$setUntouched();
        };

        this.getSubtotal = function () {
            var subtotal = 0;
            
            for (var i = 0; i < this.items.length; i += 1) {
                subtotal += this.items[i].quantity * this.items[i].price;
            }

            return subtotal;
        };

        this.getTaxes = function () {
            var taxes = .08125;

            var price = this.getSubtotal();

            var setTax = price * taxes;

            return setTax;
        };

        this.getShipping = function () {
            var shipping = 1.25;
            var totalShipping = 0;
            for (var i = 0; i < this.items.length; i += 1) {
                totalShipping += shipping * this.items[i].quantity;
            }

            return totalShipping;
        };

        this.getTotal = function () {
            var total = 0;

            total = this.getSubtotal() + this.getTaxes() + this.getShipping();

            return total;
        };

        this.destroyItem = function (index) {
            this.items.splice(index, 1);
        };
    });
})();