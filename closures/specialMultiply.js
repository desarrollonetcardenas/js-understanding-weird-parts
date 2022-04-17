/* <h1>CLOSURE EXERCISES</h1>

<h3>
 <h1>AUFGABE 2</h1> <br>
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
<br><br>
Examples: 
<br>
    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
</h3> */

function specialMultiply(param1, param2){
    if (arguments.length === 2)
        return param1 * param2;
    
    if (arguments.length === 1)
        return function(param){
            return param1 * param;
        }
}

let result = specialMultiply(3, 4);
console.log(result);

result = specialMultiply(3)(4);
console.log(result);