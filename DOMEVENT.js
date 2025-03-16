const btn=document.createElement("button");
btn.innerHTML="Click Me";
document.body.appendChild(btn);

btn.onclick=function(){
    alert("Button Clicked");
}