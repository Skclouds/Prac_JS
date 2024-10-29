let input=document.querySelector("input")
input.addEventListener("keypress",function(event){
    console.log("The key for this is "+event.key)
    console.log("The code for this is "+event.code)
 
})