
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul")

btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerHTML=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delbtn");
    li.appendChild(delbtn);
    ul.appendChild(li);
    

   inp.value=""})

   ul.addEventListener("click",function(event){
    if(event.target.nodeName==="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();

    }
   })

