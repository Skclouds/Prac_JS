let num=[2,3,4,5,3,4,7,8,1,2]

let result=num.reduce((max,rel)=>{
    if(rel>max){
        return rel
    }else{
        return max
    }
})
console.log(result)