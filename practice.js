const p=document.createElement("p")
p.innerHTML="Hey I am Red";
p.style.color="red";
document.body.appendChild(p);


const h3=document.createElement("h3");
h3.innerHTML="Hey I am h3";
h3.style.color="blue";
document.body.appendChild(h3);

const div=document.createElement("div");
div.backgroundColor="prink";
div.style.border="1px solid black";

const h1=document.createElement("h1");
h1.innerHTML="I am in a div";

const anchor=document.createElement("a");
anchor.innerHTML="ME TOO";

div.appendChild(h1);
div.appendChild(anchor);

document.body.appendChild(div);