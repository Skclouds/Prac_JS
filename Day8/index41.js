let sum=54 // Global Scope

function calci(a,b){
    let sum=a+b;// Functional Scope 

}

calci(10,20)
console.log(sum)