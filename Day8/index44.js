function multiGreet(func,n){
    for(let i=0;i<=n;i++){
        func();
    }
}

let greet=function(){
    console.log("Hello")
}

multiGreet(greet,100)