let creation=document.createElement("button");

creation.innerText="Click Me";
creation.addEventListener("click",function(){
    let style=creation.style.backgroundColor="green";
})
document.body.appendChild(creation);