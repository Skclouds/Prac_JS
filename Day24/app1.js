let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1
            if(num>3){
                console.log("Promise Rejected")
            }
            h1.style.color=color;
            resolve("Color changed")
        },delay)
    })
}
       

    async function demo() {
       try{
        await changecolor("red",1000)
        await changecolor("orange",1000)
        await changecolor("yellow",1000)
        await changecolor("green",1000)
        await changecolor("blue",1000)
        await changecolor("indigo",1000)
        await changecolor("violet",1000)
       }
       catch(err){
        console.log("error caught",err  )
       }
       let a=5; 
       console.log(a)
       console.log(a+3)
    }




//  changecolor("red",1000)
//  .then((resolve)=>{
//     console.log("Color changed",resolve)
//  })
// .then((resolve)=>{
//     return changecolor("orange",1000,resolve)
    
// })
// .then((resolve)=>{
//     return changecolor("yellow",1000,resolve)
// })
// .then((resolve)=>{
//     return changecolor("green",1000,resolve)
// })
// .then((resolve)=>{
//     return changecolor("blue",1000,resolve)
// })
// .then((resolve)=>{
//     return changecolor("indigo",1000,resolve)
// })
// .then((resolve)=>{
//     return changecolor("violet",1000,resolve)
// })

// changecolor("red",1000, ()=>{
//     changecolor("orange",1000, ()=>{
//         changecolor("yellow",1000, ()=>{
//             changecolor("green",1000, ()=>{
//                 changecolor("blue",1000, ()=>{
//                     changecolor("indigo",1000, ()=>{
//                         changecolor("violet",1000, ()=>{
                            
//                         })
//                     })
//                 })
//             })
//         })
//         }) 
//         })


// function saveToDb(data,success,failure){

//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){ 
//         success()
//     }else{
//         failure()
//     }
// }

// saveToDb("apna College",()=>{
//     console.log("Your data was saved")
//     saveToDb("Hello world",()=>{
//         console.log("Said Hello")
//     },()=>{
//         console.log("No said Hello World")
//     })
// },()=>{
//     console.log("Weak Connection your data is not saved ")
 
// })

function saveToDb(data){

        return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random()*10)+1;
            if(internetSpeed>4){
                resolve("Data was clear")
            }else{
                reject("Data was unsaved try again")
            }
        })
}

let request=saveToDb("apna college")
request.then((resolve)=>{
    console.log("promise was resolved",resolve)
    console.log(request)
    return saveToDb("Hello World")
})
    .then((resolve)=>{
        console.log("Data 2 updated",resolve)
        return saveToDb("Data 3 Updated")
    
})
.then((resolve)=>{
    console.log("Data 3 Updated",resolve)
})
.catch((reject)=>{
    console.log("promise was rejected",reject )
    console.log(request)
})  
