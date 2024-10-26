let element = document.createElement("div");
element.style.border = "1px solid black";
element.style.backgroundColor = "red";

let input = document.createElement("input");
input.setAttribute("placeholder", "Enter Your Name");
element.appendChild(input);

let button = document.createElement("button");
button.setAttribute("id", "btn");

button.innerText = "Click Me";

element.appendChild(button);

document.body.appendChild(element);

let accessing =document.querySelector('#btn');
accessing.style.backgroundColor="blue";
accessing.style.color="white";

let headingtag=document.createElement("h1");
headingtag.innerText="DOM Practice";
headingtag.style.textDecoration="underline";

document.body.appendChild(headingtag)

let name=document.createElement("p");
name.innerHTML="Apna College <strong>Delta</strong> Practice"
// name.innerText
document.body.appendChild(name)