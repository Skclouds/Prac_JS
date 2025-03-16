const input=document.createElement("input");
input.type="text";
document.body.appendChild(input);

const btn=document.createElement("button");
btn.innerHTML="Click Me";
document.body.appendChild(btn);

input.placeholder="username";
btn.id="btn";

document.querySelector("#btn").style.backgroundColor="blue";
document.querySelector("#btn").style.color="white";

const h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";

document.body.appendChild(h1);


h1.style.color="purple";

const p=document.createElement("p");
p.innerHTML="Apna College Delta Practice";
p.style.fontWeight="bold";
document.body.appendChild(p);
