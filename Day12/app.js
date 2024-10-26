// let appjs=document.getElementsByClassName("images")
// for(i=0;i<appjs.length;i++){
//     console.log(appjs[i].src)
// }


// let colorchange=document.querySelectorAll(".box a")
// for (let i=0;i<colorchange.length;i++){
//     colorchange[i].style.color="red"
//     console.log(colorchange[i].style.color)
// // }
// }
let para=document.createElement("p");
para.innerText="Hey I am Red!";
para.style.color="red";
document.body.appendChild(para);

let heading3=document.createElement("h3");
heading3.innerText="I am blue h3!";
heading3.style.color="blue";
document.body.appendChild(heading3)

let div=document.createElement("div");
div.style.border="1px solid black";
div.style.backgroundColor="pink";


let headingh1=document.createElement("h1");
headingh1.innerText="I am in a div";
div.appendChild(headingh1);

let para1=document.createElement("p");
para1.innerText="ME TOO!";
div.appendChild(para1);

document.body.appendChild(div);