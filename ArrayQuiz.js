// Write a JavaScript program to get the first n elements of an array. 
let arr=[7,9,0,-2];
let n=3;
console.log(arr.slice(0,n))

// Q2 Write a javaScript program to get the last n element of an array.

let arr1=[7,9,0,-2];
let n1=3;
console.log(arr1.slice(-n1))

// Q3 Write a javaScript program to check whether a string is blank or not
let str="";
if(str.length===0){
    console.log("it is blank")
}else{
    console.log("it is not blank")
}

// Q4 Write a JavaScript Program to test whether the character at the given (character ) index is lower case

let char='a';
if(char===char.toLowerCase()){
    console.log("it is lower case")
}else{
    console.log("it is not lower case")
}
