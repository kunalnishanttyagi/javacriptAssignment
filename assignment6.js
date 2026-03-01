/*
Question 6: Simple Algebraic Operations
Task:
Create a calculator function that can perform basic arithmetic operations:
Addition +
Subtraction -
Multiplication *
Division /
Modulus %
Example:
 
Plain Text
add(5, 3) -> 8
multiply(4, 2) -> 8
modulus(10, 3) -> 1
*/

class Calculator{
    constructor(a,b){
        this.a=Number(a);
        this.b=Number(b);
        console.log("Calculator initialized with values: ",this.a,this.b);
    }
    add(){
        return this.a+this.b;
    }
    subtract(){
        return this.a-this.b;
    }
    multiply(){
        return this.a*this.b;
    }
    divide(){
        return this.a/this.b;
    }
    modulus(){
        return this.a%this.b;
    }
}

let calculator=new Calculator(5,3);
console.log(calculator.add()); // 8
console.log(calculator.subtract()); // 2
console.log(calculator.multiply()); // 15
console.log(calculator.divide()); // 1.66    
console.log(calculator.modulus()); // 2






