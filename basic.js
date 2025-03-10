// // var name="kaushal"
// // name="nikki"
// // console.log(name)

// let name="kaushal"
// name="nikki"
// console.log(name)

// const name="kaushal"
// name="nikki"
// console.log(name)   


let age=15;
if(age>=18){
    console.log("you can vote")
}else if(age<=17){
    console.log("you cannot vote")
}

// **

console.log(2**2)
console.log(2**3)
console.log(2**4)
console.log(2**5)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)

// •	Comparison (==, ===, !=, !==, <, >, <=, >=)

console.log(2=="2")
console.log(2==="2")

let age1=28;

if((age1==15)||(age1>=18)){
    console.log("you can vote")
}else{
    console.log("you cannot vote")
}


// Ternary operator

let age2=17;
age2>=18?console.log("you can vote"):console.log("you cannot vote")


let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    default:
        console.log("Just another day");
}


// Array

let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[2]);
console.log(arr.length);
console.log(arr.push(6));
console.log(arr.pop(2));
console.log(arr);






let obj={
    name:"kaushal",
    roll:"54",
    marks:[1,2,3,4,5],
    address:"kota"
}

console.log(obj.roll)


// In Array we store the store in the form of 
//  so it is called as 
// collective and in obj we stor the data in the form of key and value







let arr1=[1,2,3,4,56,78,0,45,-1,-2,-3,-4,-100,50,10,12,22,52,-200,2,6,5,8,9,10,23,,520,5,3,0,5,6,6,3,3,3,6,8,42,0];

let min=arr1[0];

for(let i=0;i<arr1.length;i++){
    if(arr1[i]<=min){
        min=arr1[i]

        } 
   }
   console.log(min)