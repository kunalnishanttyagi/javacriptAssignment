

/*
Square (x^2) and square root (√x)
Logarithms (log base 10 and natural log ln)
Trigonometric functions: sin, cos, tan (handle negative inputs)
Power: x^y
Area of a circle: π * r^2
*/


function square(x){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return x*x;
}

function squareRoot(x){
    if(typeof x!=='number' || Number.isNaN(x) ) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.sqrt(x);
}

function logBase10(x){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.log10(x);
}

function naturalLog(x){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.log(x);
}

function sin(x){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.sin(x);
}

function cos(x){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.cos(x);
}

function tan(x){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.tan(x);
}

function power(x,y){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.pow(x,y);
}

function areaOfCircle(r){
    if(typeof x!=='number' || Number.isNaN(x)) {
        console.log("Invalid input: x should be a number.");
        return 0;
    }
    return Math.PI*(power(r,2))
}

console.log(square(5)); // 25
console.log(squareRoot(25)); // 5
console.log(logBase10(100)); // 2
console.log(naturalLog(100));
console.log(sin(-Math.PI/2)); // 1
console.log(cos(Math.PI/2)); // 0
console.log(tan(Math.PI/4)); // 1
console.log(power(2,3)); // 8
console.log(areaOfCircle(5));