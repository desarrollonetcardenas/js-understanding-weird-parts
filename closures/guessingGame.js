// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.
// <br><br>
// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
// <br><br>
// You will have to make use of closure to solve this problem.
// <br><br>
// Examples (yours might not be like this, since the answer is random every time):

//     var game = guessingGame(5)
//     game(1) // "You're too low!"
//     game(8) // "You're too high!"
//     game(5) // "You're too low!"
//     game(7) // "You got it!"
//     game(1) // "You are all done playing!"

//     var game2 = guessingGame(3)
//     game2(5) // "You're too low!"
//     game2(3) // "You're too low!"
//     game2(1) // "No more guesses the answer was 0"
//     game2(1) // "You are all done playing!"
// */</br>
function guessingGame(amount){
    
    let answer = Math.random() * 10;
    let attempts = 0;

    return function(guess){
        console.log(`guess: [${guess}]`);
        console.log(`Rand number: [${answer}]`);
        if (++attempts > amount){
            console.log("You are all done playing!");
            return;
        }
        if (guess === answer){
            console.log("You got it!!");
        }
        else if (guess > answer){
            console.log("your guess is too high!!");
        }
        else if (guess < answer)
            console.log("Your guess is too low!!");

        return;
    }
}

var game = guessingGame(5);

game(1);
game(5);
game(3);
game(3);
game(3);
game(3);