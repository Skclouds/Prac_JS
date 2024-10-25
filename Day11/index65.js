function sum(...number){
    return number.reduce((acc,el)=>acc+el)
}
console.log(sum(1,2,3,5,6,8,100))