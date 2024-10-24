const student={
    name:"Kaushal",
    marks:94,
    getname:function(){
        console.log(this.name)
    },
    getMarks:()=>{
        console.log(this.marks)// as here the arrow function is not able to access the marks element from its parent 
        
    }
}

student.getname()
student.getMarks()