// /**
//  * There's different ways to acces a computed members
//  * using the operator dot . and the brackets operator. [] 
//  */
// var person = new Object();

// person["firstName"] = "Hector";
// person["lastName"] = "Cardenas";

// var firstNameProperty = "firstName";
// var lastNameProperty = "lastName"

// // console.log(person[firstNameProperty]);
// // console.log(person[lastNameProperty]);

// var foo = {};

// foo.bar = "bar2";
// foo.bar.name = "Jose";

// console.log(foo);


// function greetings(){
//     console.log('Hello');
// }
// greetings.lang = 'English';
// console.log(greetings());
// console.log(greetings.lang);
// greetings();

// function chained(){
//     console.log('chained 1');
// }

// chained.then = function(){
//     console.log('execution then');
// }

// chained();
// chained.then();


/**
 * Functions in javascript are objects, you can add properties and methods to a function
 */
function bar(){
    console.log('Hello bar');
}
bar.propertyObject = 'this is a property added to a function';
console.log(bar.propertyObject);

/**
 * How to create chained functions
 */
function first() {
    var age = 10;
    console.log(age);
    // console.log('first')
    // console.log(this);
    return {
        second: function () {
            // console.log('second');
            // console.log(this);
            return {
                third: function(){
                    // console.log('third');
                    // console.log(this);
                }
            }
        }
    }
}

first().second().third();