//TOPIC =  FUNCTIONS
//Method-1 Function Declaration(type-1)
// function doActivity()
// {
// console.log("Hi I'M walking in the Road");

// }
// doActivity();
//Function Declaration(type-2)
// (function doActivity()
// {
//     console.log("Hi I'M Dancing on the stage");
    
// })
// ()
//Method-2 Function expression
// const Sum=function Addition()
// {
// console.log(1+2);

// }
// Sum()
//Method-3 Anonymous Function
// const Sum=function()//without Function Name called Anonymous Function
// {
// console.log(1+2);

// }
// Sum()

//Arrow Functions
// const numProduct=()=>
// {
// console.log(2*3);

// }
// numProduct();
//Arrow Function with Single Arguments
// const Squaring=(x)=>
// {
// return x * x 
// }
// console.log(Squaring(2));
//or
// const Squaring=(a)=>
// {
// return a*a;
// }
// const num=Squaring(3);
// console.log(num);
//Arrow Function with Multiple Arguments
// const Addition=(a,b,c)=>
// {
// return a+b+c;
// }
// console.log(Addition(4,8,4));

//In concise way
// const Addition=(a,b)=>a+b
// console.log(Addition(2,2));
//Arrow Fnuction in Object
// const empDetails={
//     id:1,
//     name:"Harshini",
//     Address:"Chennai",
//     firstMonthSalary:5000,
//     SecondMonthSalary:10000,
//     Dept:"ECE",
//     totalSalary:()=>{
//         return empDetails.firstMonthSalary+empDetails.SecondMonthSalary
//     }
// }
// console.log(empDetails.totalSalary());
//Arrow Function as Callback
// const numbers=[1,2,3,4,5]
// console.log(numbers.map((number)=>
// {
//     return number * number

// }));

//In concise way
// const numbers=[1,2,3,4,5]
// console.log(numbers.map((num)=>num*num));
// Returning Objects in Arrow Function
// const chocoVariety=()=>

//    {
//    return{
//         name:"Dairy Milk",
//         cost:20,
//         quantity:2
//     }
//    }
//    console.log(chocoVariety());const chocoVariety=()=>
//In concise way
//     const chocoVariety=()=>
   
//    ({
//          name:"Dairy Milk",
//          cost:20,
//          quantity:2
//      })
    
//     console.log(chocoVariety());
   

//In SetTimeOut

setTimeout(()=>
{
console.log("I will be back in 4 seconds");

},4000)
