let str="abcdabcdefgggh";

function getUnique(str){
     let ans="";
     for(let i=0;i<str.length;i++){
        let curreChar=str[i];
        if(ans.indexOf(curreChar)==-1){
            ans=ans+curreChar;
        }
     }
     return ans
}

console.log(getUnique(str))
