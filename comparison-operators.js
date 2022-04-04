/**
 * This sentence is solved applying operators precedence and coercion
 * First sentence to be evaluated is 1 < 2 which is true, then
 * javascript evaluates true < 0, 'true' is coerced to an integer value
 * at the end the expression evaluated is 1 < 0.
 * The final result is false.
 * 
 * Boolean coercion expression
 * 
 * false = 0
 * true = 1
 * 
 */
//-------------------------------------------------------------------------------------------
var result = 1 < 2 < 1;
// console.log(result);
/**
 * Output
 * false
 */
//-------------------------------------------------------------------------------------------
// result = '11' > 10;
// console.log(result);

// result = '10' >= 10;
// console.log(result);

// console.log('a' > 10);

// console.log(NaN > 10);
// console.log(Number('a'));

// console.log(10 - '1' * 10);

const fncString = Number.toString();
console.log(fncString);

//-------------------------------------------------------------------------------------------
result = Number('-1');
// console.log(typeof result);
/**
 * 
 */
//-------------------------------------------------------------------------------------------
result = '-1';
// console.log(typeof result);
result = Number('-1');
// console.log(typeof result);
/**
 * string
 * number
 */