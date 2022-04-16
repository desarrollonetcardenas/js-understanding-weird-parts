// Put your code safe (I mean avoid scope overriding) is to create a IIFE (Inmediately Invoke Function Expression)
// This is a IIFE (Inmediately Invoke Function Expression)
(function(global){
    // At this point I create a new memory reference that allows me to 
    // replace the local execution context with the values inside of the 
    // local execution context.

    // At this point a new execution context is created, and
    // and a new variables are declared inside of this execution context
    var age = 20;
    var name = 'Inside of a IIFE';

    console.log(age);
    console.log(name);

    // I can access and modify global variables inside of local execution context
    global.age = 11;
    global.firstName = 'Global variable modified';

})(window); //<-- Pass the window (global execution context) as argument

/**
 * At this point the global variables were modified in the IIFE
 */
console.log(window.age);
console.log(window.firstName);

