/*
Square (x^2) and square root (√x)
Logarithms (log base 10 and natural log ln)
Trigonometric functions: sin, cos, tan (handle negative inputs)
Power: x^y
Area of a circle: π * r^2
*/


function square(x){
    return x*x;
}

function squareRoot(x){
    return Math.sqrt(x);
}

function logBase10(x){
    return Math.log10(x);
}

function naturalLog(x){
    return Math.log(x);
}

function sin(x){
    return Math.sin(x);
}

function cos(x){
    return Math.cos(x);
}

function tan(x){
    return Math.tan(x);
}

function power(x,y){
    return Math.pow(x,y);
}

function areaOfCircle(r){
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