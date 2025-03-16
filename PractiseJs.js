let inp=document.querySelector("input");
let h2=document.querySelector("h2");

inp.addEventListener("input",function(){
    let filterValue=inp.value.replace(/[^a-zA-Z]/g,"");
    inp.value=filterValue;
    h2.innerText=filterValue;
})