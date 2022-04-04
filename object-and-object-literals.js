/**
 * There's two ways of create Objects
 */
var dog = new Object();
var newWay = {};

console.log(dog);
console.log(newWay);

/**
 * I can initialize and create a new object at the same time
 * This is much faster way to create Objects.
 */
var ball = {
    type: 'basketball',
    quantity: 10
};
console.log(ball);
/**
 * Objects can have nested objects
 */
var computer = {
    model: '2021',
    characteristics: {
        color: 'gray',
        processor: 'Apple M1'
    }
}
console.log(computer);
/**
 * I can create a new object and send it to a function
 * as a parameter, then use it inside a function.
 * 
 * This is the object literal syntax
 */
var tornado = {
    model: 2021,
    brand: 'Chevrolet',
    type: 'sedan'
}

function car(typeCar){
    console.log(`Hello your brand car is ${typeCar.brand}`);
    console.log(`Hello your car is model ${typeCar.model}`);
}

car(tornado);
/**
 * I can create objects on the fly and send it
 * as a parameter to the function and the result will be the same
 */
car({brand: 'Toyota', model: 1998});

/**
 * In javascript I can create objects and nested objects using
 * the dot syntax object.
 */

var monitor = {};
monitor.model = 'Samsumng';
monitor.color = 'black';
monitor.size = {
    value: '32 inchs'
}

console.log(monitor);

