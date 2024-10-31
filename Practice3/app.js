let accessor=document.querySelector("input");
let heading=document.querySelector("h2");

accessor.addEventListener("input",function(){
   accessor.value = accessor.value.replace(/[^a-zA-Z\s]/g, '');

   heading.innerHTML=accessor.value

   if(accessor.value==="@#$%^&*"){
    alert("Please Enter Your Name")
   }
})
