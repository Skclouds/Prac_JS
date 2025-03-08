const aarayArrange=(a,b,c)=>{
    return (a+b+c)/3;
}
console.log(aarayArrange(3,3,3));

const isEven=(num)=>{
    if(num%2==0){
        console.log(`${num} is even number`);
    }else{
        console.log(`${num} is not even`);
    }
}

console.log(isEven(2))






const object1={
    message:"Hello World",

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);
//Here the logmessage function is inside the object and it will be not accessed from the outside of the obj 



let length= 4;
function callback(){
    console.log(this.length);


}

const object={
    length:5,
    method(callback){
        callback();
    },
};

object.method(callback,1,2);