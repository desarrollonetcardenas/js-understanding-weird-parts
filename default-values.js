function greet(name) {
    // console.log(name);
    name = name || '<Your name here!>';
    console.log(`Hello ${name}`);
}
greet('Pablo');
greet();
// greet(0);