var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "John", age: 30 });
console.log(docOne);
// now if we want to access docOne.name or docOne.age we will get compilation error
// because addUID function doesn't know the type of obj, what properties it has, neither we have accessed the name or age 
// inside addUID
// in this case we can use generics, generics knows the type of the object when it is passed.
var addUIDWithGenerics = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docTwo = addUIDWithGenerics({ name: "Mike", age: 32 });
console.log(docTwo.name);
console.log(docTwo.age);
// we can specify the type of T with what it extends
var addUIDWithGenericsTwo = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
// we cannot pass a string like below
// const docThree = addUIDWithGenericsTwo('Hello')
// or we can have the type as where T accepts an object which has name property, without name property we cannot pass 
// any object
var addUIDWithGenericsThree = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docFour = addUIDWithGenericsThree({ name: "Sam", age: 38 });
console.log(docFour.name);
console.log(docFour.age);
//Enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 5] = "PERSON";
    ResourceType[ResourceType["SHOPPINGLIST"] = 6] = "SHOPPINGLIST";
})(ResourceType || (ResourceType = {}));
var docFive = {
    uid: 1,
    resourceName: "person",
    data: "Shaun",
    resourceType: ResourceType.PERSON
};
var docSix = {
    uid: 10,
    resourceName: "shoppinglist",
    data: ["rice", "milk", "bread"],
    resourceType: ResourceType.SHOPPINGLIST
};
console.log(docSix);
//Tuples
var arr = ['john', 25, true];
// since this array is of mixed type we can have any type of element at any position
arr[1] = 'janie';
console.log(arr);
// but in case of tuples once it is declared in that position we have to have that type of data
var tup = ['derek', 25, true];
tup[0] = 'bailey';
// but we cannot set tup[0] = true
console.log(tup);
