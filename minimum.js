let arr=[10,20,30,40];
let min=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min)