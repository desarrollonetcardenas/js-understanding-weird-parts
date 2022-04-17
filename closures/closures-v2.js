// Closure is a Javascript feature (it's created by Javascript itself) that allows to 
// access to variables and functions created in the outer scope. 
// This feature encloses the variables that resides in the outer reference
// function in order to has access to them in the inner scope.
function buildFunctions(){
    var arr = [];

    for (var i = 0; i < 3; i++) { //<-- At this point, variable 'i'
        arr.push(
            ((j) => {
                return () => {
                    console.log(j); // <--Here I can access to variable 'i' passed as argument.
                }
            })(i)   // <-- pass variable 'i' as argument to IIFE. Need to invoke the function to has access to variable 'i'
        );
    }

    return arr;
}

var list = buildFunctions(); // This line returns an array of function expressions

list[0]();  // <-- Here execute the function expression in the position 0
list[1]();
list[2]();