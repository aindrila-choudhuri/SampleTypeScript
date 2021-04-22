const addUID = (obj: object) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

const docOne = addUID({name: "John", age: 30})

console.log(docOne);

// now if we want to access docOne.name or docOne.age we will get compilation error
// because addUID function doesn't know the type of obj, what properties it has, neither we have accessed the name or age 
// inside addUID
// in this case we can use generics, generics knows the type of the object when it is passed.

const addUIDWithGenerics = <T>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

const docTwo = addUIDWithGenerics({name: "Mike", age: 32})

console.log(docTwo.name);
console.log(docTwo.age);

// we can specify the type of T with what it extends
const addUIDWithGenericsTwo = <T extends object>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

// we cannot pass a string like below
// const docThree = addUIDWithGenericsTwo('Hello')

// or we can have the type as where T accepts an object which has name property, without name property we cannot pass 
// any object
const addUIDWithGenericsThree = <T extends {name: string}>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

const docFour = addUIDWithGenericsThree({name: "Sam", age: 38})

console.log(docFour.name);
console.log(docFour.age);

//Enum
enum ResourceType {
    BOOK = 1,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
    SHOPPINGLIST
}

// here the type of T decides the type of data. if Resource<object> then data can be an object
interface Resource<T> {
    uid: number;
    resourceName: string;
    resourceType: ResourceType;
    data: T;
}

const docFive : Resource<string> = {
    uid: 1,
    resourceName: "person",
    data: "Shaun",
    resourceType: ResourceType.PERSON,
}

const docSix : Resource<string[]> = {
    uid: 10,
    resourceName: "shoppinglist",
    data: ["rice", "milk", "bread"],
    resourceType: ResourceType.SHOPPINGLIST,
}

console.log(docSix);

//Tuples
let arr = ['john', 25, true]
// since this array is of mixed type we can have any type of element at any position
arr[1] = 'janie'
console.log(arr);

// but in case of tuples once it is declared in that position we have to have that type of data
let tup: [string, number, boolean] = ['derek', 25, true];
tup[0]='bailey'
// but we cannot set tup[0] = true
console.log(tup);