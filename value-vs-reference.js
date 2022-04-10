/**
 * Copy by value, applied to primitive types
 * number, string, boolean.
 * Copy a value into two separates spots in memory
 */
var a = 10, b = a;

console.log(a);
console.log(b);

/**
 * I can modify variable 'a' and it doesnt affect to 'b' because they're two
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
var man = person;

man.name = 'Mario';

console.log(man.name);
console.log(person.name);