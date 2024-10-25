let arr=[2,90,34,56,1,0];
let max=arr.reduce((res,el)=>{
    if(res<el){
        return res
    }else{
        return el
    }
})

console.log(max)