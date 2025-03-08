let arr=[1,2,3,4,5];

let print=function (arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

console.log(print(arr));



let arr1=[
    {
        name:"kaushal",
        marks:'93'
    },
    {
        name:"Nikki",
        marks:97,
    },
    {
        name:"Nikko",
        marks:87,
    }
];

arr1.forEach((element)=> {
    console.log(element.name);
});