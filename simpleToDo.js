let todo = [];

let request = prompt("Please enter your request");

while (true) {
    if (request === "quit") {
        console.log("Quitting");
        break;
    }
    if (request === "list") {
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
    } else if (request === "add") {
        let task = prompt("Enter your task");
        console.log(task)
        todo.push(task);
    } else if (request === "delete") {
        let idx = prompt("Enter the index of the task to delete");
        todo.splice(idx, 1);
        console.log(todo)
    }
    
    // Ask the user for another request at the end of the loop
    request = prompt("Please enter your request");
}
