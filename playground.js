"use strict";
exports.__esModule = true;
var invoice_1 = require("./classes/invoice");
//var message = "Hello world";
var message = "Hello world";
console.log(message);
var message2 = "Hello world 2";
console.log(message2);
var strArr = ["ram", "shyam", "lakshman"];
strArr.push("Yadu");
console.log(strArr);
// We cannot push to an array without initialising it, so the below code will throw error
// let strArr1 : string[];
// strArr1.push("Yadu");
// console.log(strArr1);
var mixed = ["john", 1, 2, "janie", 5, false, 1, true];
console.log(mixed);
var greet;
greet = function (name) {
    console.log("Hi there, " + name);
};
greet("John");
// function with parameter type, default value, optional parameter and return type
// default value cannot be passed to optional parameter
var add = function (a, b, c) {
    if (b === void 0) { b = 10; }
    console.log(a + b);
    return a + b;
};
add(5, 10, 'Sir');
add(8, 20);
add(8);
var greetObj = function (user) {
    console.log(user.name + " with UID " + user.uid + " says hello");
};
greetObj({ name: 'Janie', uid: 123 });
//function signature
var calc;
calc = function (numberOne, numberTwo, action) {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    if (action === 'sub') {
        return numberOne - numberTwo;
    }
    if (action === 'mul') {
        return numberOne * numberTwo;
    }
    return 0;
};
var result = calc(1000, 2000, 'mul');
console.log(result);
// //classes
// class Invoice {
//     readonly client: string;
//     private details: string;
//     amount: number;
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
//     format(){
//         // this.client = "John";
//         return `${this.client} owes ${this.amount} for ${this.details}`;
//     }
// }
var invOne = new invoice_1.Invoice('Adam', 'work on the Adam website', 25000);
// cannot assign new value to readonly field even from inside the class, but it can be accessed from outside
// invOne.client = "John";
var res = invOne.format();
console.log(res);
var invTwo = new invoice_1.Invoice('Eve', 'work on the Eve website', 30000);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.amount, inv.clientName, inv.format);
});
var me = {
    name: "Bill",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log(this.name + " spent " + amount);
        return amount;
    }
};
var you = {
    name: "Neil",
    age: 30,
    speak: function (text) {
        console.log(this.name + " loves speaking " + text);
    },
    spend: function (amount) {
        console.log(this.name + " loves spending " + amount);
        return amount;
    }
};
// console.log(me);
you.speak("useful stuffs");
you.spend(15000);
// since inv3 is of HasFormatter type, we can define it as Invoice type too, since Invoice implements HasFormatter
var inv3;
inv3 = new invoice_1.Invoice("Joe", "construction work", 8000);
var res1 = inv3.format();
console.log(res1);
