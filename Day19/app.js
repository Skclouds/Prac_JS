let charmove = document.querySelector("input");

charmove.addEventListener("keydown", function(event) {
    if (event.code=== "KeyU") {
        console.log("Character moved up");
    } else if (event.code === "KeyD") {
        console.log("Character moved down");
    } else if (event.code === "KeyL") {
        console.log("Character moved left");
    } else if (event.code === "KeyR") {
        console.log("Character moved right");
    } 
});
