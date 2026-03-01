/*

Question 10: Write a function calculate(a, b, operation) where operation is a callback (add, subtract, multiply). Verify it works with all three operations.

*/

function calculate(a,b,operation){
    return operation(a,b);
}

// 


console.log(calculate(5,3,function(a,b){return a+b})); // 8
console.log(calculate(5,3,function(a,b){return a-b})); // 2
console.log(calculate(5,3,function(a,b){return a*b})); // 15
function multiply(a,b){
    return a*b;
}
console.log(calculate(5,3,multiply)); // 1.66
function divide(a,b){
    return a/b;
}
console.log(calculate(5,3,divide)); // 2






