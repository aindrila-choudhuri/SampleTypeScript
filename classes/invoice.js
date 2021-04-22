"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(clientName, details, amount) {
        this.clientName = clientName;
        this.details = details;
        this.amount = amount;
    }
    // every class which is implementing the HasFormatter interface must have the format() function
    // the function implementation can be different in each class, but the arguments and return type should be same
    Invoice.prototype.format = function () {
        return this.clientName + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
