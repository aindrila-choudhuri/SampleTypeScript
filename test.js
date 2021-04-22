var myVar = 1112223339;
var myVarToString = ('' + myVar);
//var digit = (''+myVar)[1];
console.log(myVarToString);
var sum = 0;
for (var i = 0; i < myVarToString.length; i++) {
    //console.log(parseInt(myVarToString[i], 10)*2);
    sum += parseInt(myVarToString[i], 10) * (1 + i);
}
if ((sum % 11) === 0) {
    console.log("valid");
}
else {
    console.log("invalid");
}
