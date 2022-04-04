/**
 * There's different ways to acces a computed members
 * using the operator dot . and the brackets operator. [] 
 */
var person = new Object();

person["firstName"] = "Hector";
person["lastName"] = "Cardenas";

var firstNameProperty = "firstName";
var lastNameProperty = "lastName"

// console.log(person[firstNameProperty]);
// console.log(person[lastNameProperty]);

var foo = {};

foo.bar = "bar2";
foo.bar.name = "Jose";

console.log(foo);

