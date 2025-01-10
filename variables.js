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
//In simple Ways-Very Easy Metods
//1.Global Scope
//var
var a=10;
function num()
{
console.log(a);

}
num();
//let
let a=10;
function num()
{
console.log(a);

}
num();
//const
const a=10;
function num()
{
    console.log(a);
    
}
num();//2.Local Scope (or) Function Scope
//var
function num()
{
    var a=10;
    console.log(a);
    
}
num();
//let
function num()
{
    let a=10;
    console.log(a);
    
}
num();
//const
function num()
{
    const a=10;
    console.log(a);
    
}
num();
//3.Block Scope
//let
{
    let a=10
   console.log(a);//accessible inside the block
    
}
console.log(a);//Not Accessible
//const
{
   const a=10
   console.log(a); //accessible inside the block
}
console.log(a);//Not Accessible

