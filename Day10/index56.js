let num=[1,2,3,4]
let finalVal=num.reduce((res,el)=>{
    console.log(res)
console.log("--------------------------------")
console.log(el)
console.log("--------------------------------")
    return res+el
})

console.log(finalVal)