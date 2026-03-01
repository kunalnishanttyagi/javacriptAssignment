/*
Question 9: Flatten Nested Arrays
Task: Create a function that takes a nested array of numbers (arrays within arrays) and returns a flattened array containing all the numbers in a single-level array.
*/

function flattenArray(nestedArray){
    let result=[];

    for(let element of nestedArray){
        // check fi elemetn is a array
        if(Array.isArray(element)){
            // if(array then send this array to recursive call)
            let subArray=flattenArray(element);
            // now we got the aray 
            for(let subElement of subArray){
                // push each ele in the result array
                result.push(subElement);
            }
        }
        else{
            result.push(element);
        }
    }
    return result;

}

// example input
var nestedArray=[[1,2,[3]],[4,[5],6],[7,8,9],10,[11],[12,13],14,15,[16,17,18,19,20],"string"];

let flattenedArray=flattenArray(nestedArray);
for(let element of flattenedArray){
    // print each element in single line
    process.stdout.write(element+" ");
}