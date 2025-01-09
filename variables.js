//simple variable-To store Values
var empName='harshini';
var _empName='mahe';
var $empName=7654;
console.log(empName)
console.log(_empName);
console.log($empName);


//scope  of variablesE
//1.Global scope
var Choco='Dairy Milk';
// var Choco='Eclairs';we can modify
function Chocolates()
{
// var Choco='Dairy Milk';
console.log(Choco);//Access inside the Function.
}
Chocolates()
console.log(Choco);//Access outside the Function.
//2.Local Scope(Function Scope)
function Products()
{
let Choco='Perk';
// var Choco='Perk';
// const Choco='Perk';
console.log(Choco);//Accessible only inside the Function

}
Products()
//3.Block Scope

function Sum()
{
    let num=2;
    // num=3;Can Modify
    const num1=3;
    // num1=4; cannot modify
    console.log(num);
    console.log(num1);
    
}
Sum()