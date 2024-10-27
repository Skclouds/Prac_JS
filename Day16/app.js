let btnsel=document.querySelector("button")
btnsel.addEventListener("click",function(){
    console.dir(this.innerText);
    this.style.color="red"
})

let paraji=document.querySelector("p")
paraji.addEventListener("click",function(){
    console.dir(this.innerText);
    paraji.style.backgroundColor="blue"
})

let heading1=document.querySelector("h1")
heading1.addEventListener("click",function(){
    console.dir(this.innerText);
    heading1.style.color="blue";

})

let heading3=document.querySelector("h3")
heading3.addEventListener("click",function(){
    console.dir(this.innerText);
    heading3.style.backgroundColor="blue"
})

document.body.appendChild(btnsel)