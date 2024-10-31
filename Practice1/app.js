    // let accessing=document.querySelector("input");

    // accessing.addEventListener("mouseout",function(event){
    //     console.log("Mouse out")
    // })

    // accessing.addEventListener("keypress",function(){
    //     console.log("key pressed")
    // })

    let accessing = document.querySelector("#scrollable");

    accessing.addEventListener("scroll", function () {
      console.log("scrolling");
    });
    
    window.addEventListener("load", (event) => {
        console.log("page is fully loaded");
      });
      