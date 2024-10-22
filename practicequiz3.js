let num=287152;
let sum=0;
for(let i=num;i>0;i=Math.floor(i/10)){
  sum=sum+(i%10)
}
console.log(sum)