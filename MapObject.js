//Map Object
const Cosmetics=[{
    id:1,
    Category:"Lipstick",
    Brand:"Nykaa",
    Cost:200

},{
    id:2,
    Category:"Eyeliner",
    Brand:"Lakme",
    Cost:300

},{
    id:3,
    Category:"Nail Polish",
    Brand:"Dazzler",
    Cost:200 

}]
// console.log(Cosmetics[1].Brand);
//To PUSH some values
const SportsTools=new Map();
SportsTools.set("Cricket","Bat");
SportsTools.set("Badmiton","shuttle");
SportsTools.set("FootBall","Ball");
SportsTools.set("Wrestling","Bands");
SportsTools.set("Boxing","jacket")
// To GET some values
// console.log(SportsTools.get("Cricket"));
// To Check the size
// console.log(SportsTools.size)
//Methods
//To check if have or not
// console.log(SportsTools.has('Boxing'));
//To Delete All key and Values
// console.log(SportsTools.clear());
//To
// console.log(SportsTools.entries());
// for(let equipments of SportsTools)
// {
//     console.log(equipments[0],equipments[1]);
    
// }
//By using Destructuring in arrays by using for loop
// console.log(SportsTools.entries());
// for(let [key,value] of SportsTools)
// {
//     console.log(key,value);
    
// }
//forEach loop
// SportsTools.forEach(equipments=>{
//     console.log(equipments);
    
// })
// console.log(SportsTools);


// console.log(SportsTools.entries());
//TO want Keys
// console.log(SportsTools.keys());
//TO want Values
// console.log(SportsTools.values());
//To delete any key with value
// console.log(SportsTools.delete('Wrestling'));

// console.log(SportsTools);


const AnotherObj=new Map()
// AnotherObj.set({},'emptyObj');
// console.log(AnotherObj.get({}));//output:undefined
const myEmptyObj={}
AnotherObj.set(myEmptyObj,'emptyObj');
console.log(AnotherObj.get(myEmptyObj))//Empty object
