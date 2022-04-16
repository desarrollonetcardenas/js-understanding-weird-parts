/**
 * Copy by value, applied to primitive types
 * number, string, boolean, undefined, null, all of the above are primitive types in Javascript
 * Copy a value into two separates spots in memory
 */
var a = 10, b = a;

console.log(a);
console.log(b);

/**
 * I can modify variable 'a' and it doesn't affect to 'b' because they're two
 * different values and spots in memory
 */
a = 11;

console.log(a);
console.log(b);

/**
 * Copy by reference. Creates a new reference or pointer to specific
 * memory reference.
 */
var person = { name: 'Jose' };

//now variable 'man' gets a reference memory to 'person'
var man = person;

//If I modify a name-value pair of 'man' the effect it's inmediately 
//reflected in 'person' variable, because of reference memory.
man.name = 'Mario';


console.log(man.name);
console.log(person.name);