let btn=document.querySelector("button");

let color=()=>{
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let newColor=`rgb(${red},${green},${blue})`
    document.querySelector("div").style.backgroundColor=newColor;

    return newColor
}

btn.addEventListener("click",()=>{
    let generatedcolor=color();
    document.querySelector("h2").innerHTML=generatedcolor
})