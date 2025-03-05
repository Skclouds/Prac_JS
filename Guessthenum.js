let num = Math.floor(Math.random() * 10) + 1;
let guess;

while (true) {
    guess = prompt("Enter your guess number (or type 'quit' to exit)");     

    if (guess === "quit") {
        alert("Quitting");
        console.log("Quitting");
        break;
    }

    let guessNum = parseInt(guess); 

    if (guessNum === num) {
        alert("You got it right!");
        console.log("You got it right!");
        break;
    } else {
        alert("You got it wrong, try again!");
        console.log("You got it wrong, try again!");
    }
}
