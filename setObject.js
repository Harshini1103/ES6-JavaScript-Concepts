//Set Object
const myDailyRoutine=["Wakup early","Freshup","Meditation","Studying","Self-Motivating","Studying","Breakfast","Break","dinner","Playing","Dinner","Sleeping"]


const myDailyRoutineset=new Set(myDailyRoutine);
myDailyRoutineset.add("Cooking");
myDailyRoutineset.add(function(){

})//funtion

myDailyRoutineset.add({work:"cleaning"})//object
console.log(myDailyRoutine,myDailyRoutineset);

//set Methods
// console.log(myDailyRoutineset.has("dinner"));//has 
// console.log(myDailyRoutineset.entries());//entries
// console.log(myDailyRoutineset.keys());//keys
// console.log(myDailyRoutineset.values());//values
myDailyRoutineset.delete("playing");//delete
console.log(myDailyRoutineset);
const file=document.querySelector("#result");
myDailyRoutineset.forEach(timeTable=>{

    file.innerHTML +='<li>'+ timeTable+ '</li>'
});

