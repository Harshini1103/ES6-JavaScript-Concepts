//Array Constructor Method
// const favSports=new Array("Cricket","Hockey","Football","Badmiton");
// console.log(favSports);
//Array Literal Method
// const favSports=["Cricket","Hockey","Football","Badmiton"];
// console.log(favSports[0]);

//Array of Objects
const Dresses=[
    {
        id:1,
        Category:"Chudhidar",
        Brand:"Raymond",
        cost:350

},{
    id:2,
    Category:"Sarees",
    Brand:"Silk",
    cost:5000

},{
    id:3,
    Category:"Pants",
    Brand:"Nylon",
    cost:350

}]
// console.log(Dresses);
// document.getElementById("result").innerHTML=Dresses[1].Brand;//javascript DOM-To show in UI
// console.log(Dresses[i].Brand);


//By Using For Loop
// for(let i=0;i<Dresses.length;i++)
// {
//     console.log("Dresses Variety",Dresses[i].Brand);
    
// }
//for-in Loop
// for(let dressType in Dresses){
//     console.log(Dresses[dressType].Category);
    
// }
//for-of Loop
// for(let dressType of Dresses){
//         console.log(dressType.Category);
// }   
//for-each Loop
// Dresses.forEach((dress)=>
//     console.log(dress.cost)
// )
//Another Way to Show in UI
// Dresses.forEach((dress)=>
// {
//     document.getElementById("result").innerHTML+="<li>"+dress.cost+"</li>"
// })
//Multi-Dimension Arrays
const Numbers=[
    [11,12,13],
    [21,22,23],
    [31,[1,2,3],33],
]
// console.log(Numbers);
console.log(Numbers.flat(3));
