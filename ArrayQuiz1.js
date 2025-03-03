let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<=arr.length;i++){
    if(arr[i]===num){
        arr.splice(i,1);
    }
}
console.log(arr)


let num1=287152;
let count=0;
for(let temp=num1;temp>0;temp=Math.floor(temp/10)){
    count++;
}
console.log(count)


let num2=287152;
let count1=0;
for(let temp=num2;temp>0;temp=Math.floor(temp/10)){
    count1=count1+temp%10
}
console.log(count1)


let num3=10;
let fact=1
for(let i=1;i<=num3;i++){
    fact=fact*i;
}
console.log(fact)


let arr2=[50,12,20,2,30];
let count3=arr2[0];
for(let i=1;i<arr2.length;i++){
    if(arr[i]>count3){
        count3=arr[i]
    }
}
console.log(count3)
