/**
 * Callbacks are first class functions
 * because are functions passed as argument to another function.
 * 
 * At the end of the day functions are objects, that's why functions can be
 * passed as argument to another functions, just like objects does.
 * Example:
 */
var sendEmail = function send(){
    console.log('sending email...');
}

function email() {
    return {
        getAll: function(callback){
            return new Promise((resolve, reject) => {
                console.log('Updating inbox...');
                resolve(callback);
            })
        }
    }
}

var user = email;

user()
.getAll(sendEmail)      //<---Pass the function 'sendEmail' as argument to another function
.then(result => result());  //Then execute the function 'result()' after the function getAll() finishes its execution