const max= prompt("Enter the maximum number");
const random = Math.floor(Math.random(max))+1;
 
let guess = prompt("Guess the random number");

while(true){
    if(guess=="quit"){
        console.log("User quits the game")
        break
    }
    if(guess==random){
        console.log("You won")
        break
    }
    else if(guess>random){
        guess=prompt("Guess is to small ")
    }else if(guess<random){
        guess=prompt("Guess is to big ")
    }
}