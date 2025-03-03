let favMovie="Avator";
let guess=prompt("Enter your fav movie");
while((guess!==favMovie)&&(guess!="quit")){
    alert("wrong");
    guess=prompt("Enter your fav movie");
    if(guess===favMovie){
        alert("You got it right")
    }else{
        alert("You got it wrong")
    }
    }

