var saludo = "greet";
var saludo = "hola!!";

console.log(saludo);
/**
 * In the last example we saw two variables overwrited each other
 * In order to avoid this. We can create 'fake namespaces'
 * using only objects.
 */
var spanish = {
    saludo: 'hola!!'
}
var english = {
    saludo: 'hello'
}