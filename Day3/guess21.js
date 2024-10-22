let favMovie="Harry Potter";
let guess=prompt("Guess my favorite movie");
while((guess!=favMovie)&&(guess!="cancel")){  
    guess=prompt("Guess my favorite movie");
}
alert(guess=="cancel"?"You lose":"You won")