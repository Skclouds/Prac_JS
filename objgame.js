const rollButton=document.getElementById("rollbutton");

rollButton.addEventListener("click",function(){    
    let num=Math.floor(Math.random()*6)+1;
    alert("You rolled a "+num);
})