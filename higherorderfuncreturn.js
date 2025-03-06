function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(n%2==1)}
        }
        else if(request=="even"){
            return function(n){ 
                console.log(n%2==0)
            }
        }else{
            console.log("wrong request")
        }
}

oddEvenTest("odd")(3)
oddEvenTest("even")(10)