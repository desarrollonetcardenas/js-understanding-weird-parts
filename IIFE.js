//A function statement
function printString() {
    console.log('Hello');
};

//function expression
var hello = function returnHello() {
    return 'Hello';
};

//Inmediately Invoked Function Expression
(function(hello) {
    console.log('Print ' + hello);
})('Hello');