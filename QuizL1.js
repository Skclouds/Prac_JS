// Q What is the Value of age after this code runs?
let age=23;
age+2;//Here the value for the age will be same
age=age+2;//Here the value will be updated and it will be 25
console.log(age)

// Q What is the value of avg after the code runs?

let hindi=80;
let eng=90;
let math=100;
let avg=(hindi+eng+math)/3;
console.log(avg);


// Q What is the value of each variable in each line of code?

let num=5;
let newNum=num++;
newNum=++num
console.log(newNum)


// Q Declare your name as a string and print its length in JS
 let name="Kaushal Singh";
 console.log(name);
 console.log(name.length);
 console.log(name[0]);
 console.log(name[12]);

 console.log("apnacollege"+123)


//  A good string is a string  that starts from the letter 'a' & has a length > 3. Write a Program to find if a string is good or not 

let string="apple";
if(string[0]=="a"&&string.length>3){
    console.log("Good String")
}else{
    consolelog("It is very bad string")
}


// Predict the Output for the code 

let num2 =12;
if((num%3==0)&&((num+1==15)||(num-1==11))){
    console.log("safe")
}else{
    console.log("unsafe")
}


let msg="help!"
let msg1=msg.trim().toUpperCase();
console.log(msg1);

let name1="ApnaCollege"
console.log(name1.slice(4,9));
console.log(name1.indexOf("na"))
console.log(name1.replace("Apna","Our"))


