let p=document.querySelector("p")
let h1=document.querySelector("h1")
let h3=document.querySelector("h3")
let btn=document.querySelector("button")




function changer(){
    this.style.backgroundColor="red"
}




p.addEventListener("click",changer)

h1.addEventListener("click",changer)

h3.addEventListener("click",changer)

btn.addEventListener("click",changer)  