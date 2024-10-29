let access=document.querySelector("#user");

access.addEventListener("change",function(){
    console.log("just change")
    console.log("final value =",this.value)
})

access.addEventListener("input",function(){
    console.log("input changer")
    console.log("final value =",this.value)
})