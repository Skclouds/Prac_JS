let arr=[1,2,3,4,5,6,7,8,9,10]

let sqrSum=arr.map((el)=>el*el)
let sum=sqrSum.reduce((res,el)=>res+el)
console.log(sqrSum)
console.log(sum)