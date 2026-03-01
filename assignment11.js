/*
Question 11:Write a function reverseString(str) that returns the reversed string. Test it with "hello" and "JavaScript"
*/

// return a object of reversed string
function reverseString(obj){
    let str=obj.value;
    let result="";

    // concatinate every char from end to start
    for(let index=0;index<str.length;index++){
        
        result=result.concat(str[str.length-1-index]);
        
    }

    // set result in the object
    obj.value=result;
}

str1={
    value:"hello"
}
str2={
    value:"JavaScript"
}
reverseString(str1);
reverseString(str2);
console.log(str1); 
console.log(str2); 