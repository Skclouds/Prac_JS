let str=["kaushal","singh"];
function concat(str){
    let result;

    for(let i=0;i<str.length;i++){
        result=result+str[i];
    }
    return result
}
console.log(concat(str))