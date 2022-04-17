
function printHello () {
    const lastName = 'Cardenas';

    return function showName(param) {
        const firstName = 'Hector';

        console.log(`${firstName} ${lastName}`);
        console.log(`Parameter: ${param}`);
    }
}

printHello()('Jose Luis');

let _firstname = 'Jose Perez';

function person(){
    let _firstname, _lastName;
    return {
        setFirstName: function(firstName){
            _firstname = firstName;
        },
        setLastName: function(lastName){
            _lastName = lastName;
        },
        printName: function(){
            console.log(`My name is: ${_firstname} ${_lastName}`);
        }
    };
}

const pablo = person();

pablo.setFirstName('Hector Pablo');
pablo.setLastName('Cardenas');
pablo.printName();


function sumValues(){
    let a = 0;
    return function (){
        let b = 0;
        console.log(++a, ++b);
    }

}

let sum = sumValues();

sum();
sum();