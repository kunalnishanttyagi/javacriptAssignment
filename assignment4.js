/*

Question 4: Variable Arguments Calculator
Task:
Implement a function to perform operations where the number of arguments is unknown.
Example: Addition of multiple numbers.
Example:
 
Plain Text
add_multiple(9, 4, 12, 16, 23, 43) -> 107
multiply_multiple(2, 3, 4) -> 24

*/

// here we use rest operator
function add_multiple(...array){
    let result=0;
    for(let number of array){
        result+=number;
    }
    return result;
}

function multiply_multiple(...array){
    let result=1;
    for(let number of array){
        result*=number;
    }
    return result;
}

console.log(add_multiple(9,4,12,16,23,43)); // 107
console.log(multiply_multiple(2,3,4)); // 24




