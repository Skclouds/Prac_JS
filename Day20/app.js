let formsubmission=document.querySelector("form")
formsubmission.addEventListener("submit",function(event){
        // let user=document.getElementById("#user")
        // let pass=document.getElementById("#pass")

        let user=this.elements[0]
        let pass=this.elements[1]
        event.preventDefault()
        console.log(user.value)
        console.log(pass.value)
        alert(`Hello ${user.value} your password is ${pass.value} and has been updated`)
})