FavMovie="Heera Pheri";

let guess=prompt("Guess my favorite movie");
while(guess!=FavMovie){
    guess=prompt("Guess my favorite movie");
    alert(guess==FavMovie?"You won":"You lose");
}