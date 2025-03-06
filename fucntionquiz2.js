    let str="abcdabcdefggh";
    let result;

    function sorter(str){
        for(let i=0;i<str.length;i++){
            if(str[i]===str[i+1]){
                result=str[i];
            }
        }
        console.log(result)
    }

    console.log(sorter(str));