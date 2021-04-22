import {Invoice} from "./classes/invoice";
import {HasFormatter} from "./interfaces/hasFormatter";


//var message = "Hello world";
let message = "Hello world";
console.log(message);

let message2 : string = "Hello world 2";
console.log(message2);

let strArr : string[] = ["ram", "shyam", "lakshman"];
strArr.push("Yadu");
console.log(strArr);

// We cannot push to an array without initialising it, so the below code will throw error
// let strArr1 : string[];
// strArr1.push("Yadu");
// console.log(strArr1);

let mixed : (string|number|boolean)[] = ["john", 1, 2, "janie", 5, false, 1, true];
console.log(mixed);

let greet: Function;

greet = (name) => {
    console.log(`Hi there, ${name}`);
}

greet("John");

// function with parameter type, default value, optional parameter and return type
// default value cannot be passed to optional parameter
const add = (a: number, b: number = 10, c ?: number|string): number => {
    console.log(a+b);
    return a+b;
}

add(5, 10, 'Sir');
add(8, 20);
add(8);

// type alias
type StringOrNumber = string | number;
type obj = {
    name: string, 
    uid: StringOrNumber
}
const greetObj = (user: obj) => {
    console.log(`${user.name} with UID ${user.uid} says hello`);
}

greetObj({name: 'Janie', uid:123})

//function signature
let calc : (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) : number => {
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
}

const result = calc(1000, 2000, 'mul');
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


const invOne = new Invoice('Adam', 'work on the Adam website', 25000) 
// cannot assign new value to readonly field even from inside the class, but it can be accessed from outside
// invOne.client = "John";
const res = invOne.format();
console.log(res);

const invTwo = new Invoice('Eve', 'work on the Eve website', 30000) 
let invoices : Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach((inv) => {
    console.log(inv.amount, inv.clientName, inv.format);
});


//Interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string) : void;
    spend(a: number) : number;
}

const me : IsPerson = {
    name: "Bill",
    age: 30,
    speak(text: string) : void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`${this.name} spent ${amount}`);
        return amount;
    }
}

const you : IsPerson = {
    name: "Neil",
    age: 30,
    speak(text: string) : void {
        console.log(`${this.name} loves speaking ${text}`);
    },
    spend(amount: number): number {
        console.log(`${this.name} loves spending ${amount}`);
        return amount;
    }
}

// console.log(me);
you.speak("useful stuffs");
you.spend(15000);

// since inv3 is of HasFormatter type, we can define it as Invoice type too, since Invoice implements HasFormatter
let inv3: HasFormatter;

inv3 = new Invoice("Joe", "construction work", 8000);
const res1 = inv3.format();
console.log(res1);




