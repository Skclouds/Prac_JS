let todo=[];

let req=prompt("Enter your task");

while(true){
    if(req=="quit"){
        console.log("You have quit the app");
        break
    }
    if(req=="list"){  
        console.log("-----------------");  
    for(task of todo){
        console.log(task)
        

    }
    console.log("-----------------");
    }else if(req=="add"){
        let task=prompt("Enter task");  
        todo.push(task);
        console.log("Task added")
    }else if(req=="delete"){

    }
    req=prompt("Enter your task");
}

