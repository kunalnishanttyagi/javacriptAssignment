/*
Make a Calculator that takes function and variables as an argument and returns values based on the calculation of the function provided to it.
Do this for all the functions implemented.
Add more function tests: temperature conversion, area, etc.

Note:
Verify and validate the number of arguments allowed as per the requirement of function provided
Handle use of arrow functions
*/

class TypeError extends Error{
    constructor(msg){
        super(msg);
        // this.message=msg;
        this.name="TypeError";
    }
}

class SizeError extends Error{
    constructor(msg){
        super(msg);
        // this.message=msg;
        this.name="SizeError";
    }
}

class InvalidOperation extends Error{
    constructor(msg){
        super(msg);
        // this.message=msg;
        this.name="InvalidOperation";
    }
}



function check(number){
    if(number.length===0) return -1;
        if(typeof number!=="number" || Number.isNaN(number)) { return false;}
        else {
            return true;
        }
}

function calculate(func,...args){
    
    if(!func) {
        console.log("send a valid function");
        return -1;
    }
    if(!args) {
        console.log("send a valid array");
        return -1;
    }
    let result=func(args);
    return func(args);

}

function add(args){
    
    try{
        if(!args.length) {
            throw new SizeError("Send some number atleast");
        }
        let result=0;
        for(let number of args){
            if(check(number)) {result+=number;}
            else {
                
                throw new TypeError("Not valid numbers");

                // return -1;
            }
        }
        return result;
    }
    catch(err){
        console.log("Thrown exception "+ err.message);
        return -1;
    }
}

const sub=((args)=>{
    
    try{
        if(args.length<2) {
            throw new SizeError("Send some numbers atleast");
        }
        if(check(args[0]) && check(args[1]))
        return args[0]-args[1];
        else{
            throw new TypeError("Not valid numbers");
            // return -1;
        }
    }
    catch(err){
        console.log("thrown exception "+err.message);
        return -1;
    }
})

const div=((args)=>{
    try{
        if(args.length<2) {
            throw new SizeError("Send some numbers atleast");
        }
        if(args[1]==0){
            throw new InvalidOperation("Division by 0 is invalid");
        }
        if(check(args[0]) && check(args[1]))
        return args[0]/args[1];
        else{
            throw new TypeError("Not valid numbers");
            // return -1;
        }
    }
    catch(err){
        console.log("Throwing exception "+err.message);
    }
    
})
const rectangleArea=((args)=>{
    try{
        if(args.length<2) {
            throw new SizeError("Send length and breadth atleast");
        }
        if(check(args[0]) && check(args[1]))
        return args[0]*args[1];
        else{
            throw new TypeError("Not valid numbers");
            // return -1;
        }
    }
    catch(err){
        console.log("Throwing exception "+err.message);
        return -1;
    
    }
    
})
const mul=((args)=>{

    try{
        if(!args.length) {
            throw new SizeError("Send some number atleast");
        }
        let result=1;
        for(let number of args){
            if(check(number)) {result*=number;}
            else {
                throw new TypeError("Not valid numbers");
                // return -1;
            }
        }
        return result;
    }
    catch(err){
        console.log("Thrown exception "+err.message);
        return -1;
    }

    
})

function squareArea(args){
    try{
        if(args.length<1) {
            throw new SizeError("Send length atleast");
        }
        if(check(args[0]))
        return args[0]*args[0];
        else{
            throw new TypeError("Not valid numbers");
            // return -1;
        }
    }
        catch(err){
        console.log("Thrown exception "+err.message);
        return -1;
    }
}

function toFehranite(args){
    try{
        if(args.length<1) {
            throw new SizeError("Send temperature atleast");
        }
        if(check(args[0]))
        return args[0]*9/5+32;
        else{
            throw new TypeError("Not valid numbers");
            // return -1;
        }
    }
        catch(err){
        console.log("Thrown exception "+err.message);
        return -1;
    }
}

function toCelcius(args){
    try{
        if(args.length<1) {
            throw new SizeError("Send temperature atleast");
        }
        if(check(args[0]))
        return (args[0]-32)*5/9;
        else{
            throw new TypeError("Not valid numbers");
            // return -1;
        }
    }
        catch(err){
        console.log("Thrown exception "+err.message);
        return -1;
    }
}

console.log("Answer of addition is "+ calculate(add,1,2,4,5,8,NaN)); // 20
console.log("Answer of substraction is "+ calculate(sub,50));// 16

console.log("Answer of multiplication is "+ calculate(mul,1,2,3,4,5)) // 120


console.log("Answer of Division is "+ calculate(div,50,10));// 5

console.log("Answer of Rectangle area is "+ calculate(rectangleArea,10,20)); // 200


console.log("Answer of Square area is "+ calculate(squareArea,10)); // 200

console.log("Answer of fehranite to fehranite is "+ calculate(toFehranite,10)); // 50
console.log("Answer of celcius to celcius is "+ calculate(toCelcius,10)); // 50
