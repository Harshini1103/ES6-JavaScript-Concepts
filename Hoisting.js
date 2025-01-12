//Hoisting Has Two Types
//1.Variable Hoisting with Var
// console.log(Name);//output:undefined
// var Name="Harshini"
// console.log(Name);//output:Harshini
//Variable Hoisting with let and const
// console.log(Name);//Cannot access 'Name' before initialization

// let Name="Harshini"
// console.log(Name);//Cannot access 'Name' before initialization

// const Name="Harshini"



//2.Function Hoisting
//Function Declaration
// greet(); // Output: "Hello World!"

// function greet() {
//     console.log("Hello World!");
    
// }
//Function Expression
sayHello(); // TypeError: sayHello is not a function
var sayHello = ()=> {
    console.log("Hello!");
};

