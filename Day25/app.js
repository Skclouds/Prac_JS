// as we have defined the function with async it make the function into promises 
async function message(){
    // return "hello"
    throw new Error("No data");
    
}


//it can be used with the arrow function 
let demo=async()=>{
    return 5
}
console.log(demo())

