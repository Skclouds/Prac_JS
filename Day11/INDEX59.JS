let student=[
    {name:"Kaushal",
    age:23,
    marks:90,
},
    {
        name:"sharadha",
        age:22,
    marks:94,

    },
    {
        name:"rahul",
        age:21,
        marks:95
    }
]

let gpa=student.map((el)=>{
    return (el.marks/10)
})
console.log(gpa)