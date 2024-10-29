let accessor=document.querySelector("#user")
let para=document.querySelector("p")

accessor.addEventListener("input",function(){
    para.innerHTML=accessor.value
})