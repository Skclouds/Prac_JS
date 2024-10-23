function oddEvencheck(request){
    if(request=="odd"){
        return function(){
            console.log(n%2!==0);
    }
}else if(request=="even"){
    return function(){
        console.log(n%2==0);
    }
}else{
    console.log("wrong request")
}
}

oddEvencheck("odd")