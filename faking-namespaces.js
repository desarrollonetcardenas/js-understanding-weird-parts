/**
 * In the above example we can see two variables that are overwrited each other
 */
var saludo = "greet";
var saludo = "hola!!";

console.log(saludo);
/**
 * In order to avoid this. We can create 'fake namespaces'
 * using objects.
 * 
 */
var spanish = {
    saludo: 'hola!!'
}
var english = {
    saludo: 'hello'
}

/**
 * 
 * Now, these two variables  dont override each other, because, they 
 * were created in different objects using the object literal syntax, thereby, 
 * these propoerties are contained into objects.
 */
console.log(spanish.saludo);
console.log(english.saludo);

english.saludo = {
        americanGreet: 'hey dude',
        argentinoGreet: 'Che boludo'
}
console.log(english);