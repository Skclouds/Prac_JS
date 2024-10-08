// Write a switch statement top print the following output: - 1. January - 2. February - 3. March - 4. April - 5. May - 6. June - 7. July - 8. August - 9. September - 10. October - 11. November - 12. December - Invalid month number

let quater=prompt("Enter the month number");
switch(quater){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid month number");
}