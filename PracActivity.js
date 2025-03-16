let btn=document.createElement("button");
btn.innerHTML="Click Me";
document.body.appendChild(btn);

btn.addEventListener("click",function(){
  console.log("Button Clicked");
    btn.style.backgroundColor="green";
})