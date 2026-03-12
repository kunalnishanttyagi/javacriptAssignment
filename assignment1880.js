/*
// here i will make all func for basic operaion
*/



function check(x){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("x should be a number.");
        return false;
    }
    return true;
}


function add(a,b,...args){
    if(!a || !b) {
        console.log("Both a and b should be numbers.");
        return 0;
    }
    if(check(a) && check(b)) {
        return a+b;
    }
    else{
        console.log("x should be a number.");
        return 0;
    }
    
}

function subtract(a,b,...args){
    if(!a || !b) {
        console.log("Both a and b should be numbers.");
        return 0;
    }
    if(check(a) && check(b)) {
        return a-b;
    }
    else{
        console.log("x should be a number.");
        return 0;
    }
}

function multiply(a,b,...args){
    if(!a || !b) {
        console.log("Both a and b should be numbers.");
        return 0;
    }
    if(check(a) && check(b)) {
        return a*b;
    }
    else{
        console.log("x should be a number.");
        return 0;
    }
}

function divide(a,b,...args){

    if(!a || !b) {
        console.log("Both a and b should be numbers.");
        return 0;
    }
    if(check(a) && check(b)) {
        if(b==0) {
            console.log("Division by zero is not allowed.");
            return 0;
        }
        return a/b;
    }
    else{
        console.log("x should be a number.");
        return 0;
    }
    
}

function modulas(a,b,...args){
    if(!a || !b) {
        console.log("Both a and b should be numbers.");
        return 0;
    }
    if(check(a) && check(b)) {
        if(b==0) {
            console.log("Modulus by zero is not allowed.");
            return 0;
        }
        return a%b;
    }
    else{
        console.log("x should be a number.");
        return 0;
    }
}

// now test the functions

console.log(add(5,3)); // answer should be 8
console.log(subtract(5,3)); // here ans should be 2
console.log(multiply(5,3)); // 15
console.log(divide(5,3)); // 1.6
console.log(modulas(5,3)); // 2
