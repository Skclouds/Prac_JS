let gameSeq = []
let userSeq = []

let started = false;
let level = 0;

let btns= ["yellow", "purple", "red", "green"]

let h2 = document.querySelector("h2")
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("key pressed")
        started = true

        levelup()
    }
})

function btnflash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 1000)
}
function levelup() {
    userSeq=[]
    level++
    h2.innerText = `Level ${level}`

    let rndIdx = Math.floor(Math.random() * 3)
    let randColor = btns[rndIdx]
    let randbtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(gameSeq)
    btnflash(randbtn);
  
    
}

function checkAns(idx){
 
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(levelup,1000)
        }
        
    }else{
        h2.innerHTML=`Game Over! Your score is  <b>${level}</b> Press any key to restart`
        document.body.style.backgroundColor="red"
        setTimeout(reset,2000)
    }
}

function btnPress(){
   let btn=this
   btnflash(btn)
   let userColor=btn.getAttribute("id")
   
   userSeq.push(userColor)
   console.log(userSeq)
   checkAns(userSeq.length-1)
    
}

let allBtn=document.querySelectorAll(".btn")

for(btn of allBtn){
    btn.addEventListener("click",btnPress

) }

function reset(){
    started=false
    gameSeq=[]
    userSeq=[]
    level=0
}