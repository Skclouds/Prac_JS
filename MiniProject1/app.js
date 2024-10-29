let heading1 = document.createElement("h1");
heading1.innerText = "Generate Random Color";
heading1.style.textAlign = "center";
document.body.appendChild(heading1);

let btn = document.createElement("button");
btn.innerText = "Generate Color";
btn.style.border = "1px solid black";
btn.style.display = "block";
btn.style.margin = "20px auto";
document.body.appendChild(btn);

let divColor = document.createElement("div");
divColor.style.border = "1px solid black";
divColor.style.width = "750px";
divColor.style.height = "200px";
divColor.style.margin = "20px auto";
document.body.appendChild(divColor);

let para = document.createElement("p"); 
para.innerHTML = "<strong>This is your New Color</strong>";
para.style.textAlign = "center";
divColor.appendChild(para);

function randomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;

}

btn.addEventListener("click",()=>{
    const newColor=randomColor();


    heading1.innerText=`Your New Generated RGB value is ${newColor}`;

    divColor.style.backgroundColor=newColor;
})