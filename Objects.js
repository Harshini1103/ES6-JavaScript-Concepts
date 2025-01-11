const personDetails={
    id:1,
    fName:"Harshini",
    lName:"casbian",
    age:30,
    favColors:["blue","red","black"],
    parent:{
    mother:"Amma",
    father:"Appa"
    },
    isAlive:true,
    fullName()//Methods

    {
        // return (this.fName+' '+this.lName)
        return `${this.fName} ${this.lName}`
        
    }
}

// console.log(personDetails.fullName());
// document.getElementById('result').innerHTML=personDetails.fullName();//- Dom Manipulation to view in UI
// console.log(personDetails.parent);
// console.log(personDetails.parent.father);
//Object Merging
const personDetails2={


    dateOfBirth(){
        return new Date().getFullYear() - this.age;
        

    }
}
// Object.assign(personDetails, personDetails2)
// console.log(personDetails.dateOfBirth());
//Spread Operator

const overAll={...personDetails,...personDetails2}
// console.log(overAll);
//delete
delete personDetails.lName
//object Property Utilizer
function FullNamess(firstName,lastName)
{
return{
    firstName,
    lastName
}
}
// console.log(FullNamess('harsh','joseph'))

//object Cloning
// const copyDetails=Object.assign({},personDetails)
// personDetails.fName="trisha";
// personDetails.age=45;
// console.log(copyDetails,personDetails);


