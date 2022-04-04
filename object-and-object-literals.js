/**
 * There's two ways of create new objects
 */
var dog = new Object();
var newWay = {};

console.log(dog);
console.log(newWay);

/**
 * I can initialize and create a new object at the same time
 * This is much faster way to create new javascript Objects.
 */
var ball = {
    type: 'basketball',
    quantity: 10
};
console.log(ball);
/**
 * Objects can create another objects
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
 * We can create objects on the fly, passing as a arguments to a
 * function. this function will return a new object.
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
 * I can create an object on the fly and send it
 * as a parameter to the function
 */
car({brand: 'Toyota', model: 1998});