//DESTRUCTURING
const personDetails={
    id:1,
    fName:"Harshini",
    lName:"Leona",
    favColor:"red",
    age:21,
    fullName(){
        return `${this.fName} ${this.lName}`
    }
}
// const {favColor:MyfavColor,id,age,favFood="Biriyani"}=personDetails

// console.log(MyfavColor,id,age,favFood);
//Destructuring Without Defining

// let favActor,favActress;
// ({favActor,favActress,...otherNames}={
//     favSports:"Badmiton",
//     favColor:"blue",
//     favFood:"Biryani",
//     favActor:"Jayam Ravi",
//     favActress:"Hansika Motwani"

// })
// console.log(favActor,favActress,otherNames);

//  const {id,fName,lName,...otherNames}=personDetails;//By using Rest Operator
//  console.log(id,fName,lName,otherNames);
 

//Object Destructuring in Functions
// function viewAll(datas)
// {
// console.log(`Hello this is ${datas.fName} ${datas.lName}`)
// }
// viewAll(personDetails)
function viewAll({fName,lName,favColor:likedColor})
{
console.log(`Hello this is ${fName} ${lName} and my favourite colour is ${likedColor}`)
}
viewAll(personDetails)
