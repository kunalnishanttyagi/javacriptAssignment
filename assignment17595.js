/*

Description

Write a function that takes an array of integers and returns the largest absolute difference between any two numbers in the array.
❗ You are not allowed to use built-in functions such as Math.min, Math.max, sort, or similar utilities.

Output:
Return a single integer: the largest difference between any two elements in the array.

Example 1:
Input: [10, 3, 5, 1, 9]
Output: 9
Explanation: Maximum is 10, minimum is 1 → 10 - 1 = 9

Example 2:
Input: [-10, 0, 10, 20]
Output: 30
Explanation: Maximum is 20, minimum is -10 → 20 - (-10) = 30

*/


function largestDifference(arr){
    // do by call apply and bind
    // we will traverse the array and find larget and minimum element
    try{
        let maximumElement=-10000000;
        let minimumElement=10000000;
        for(let element of arr){

            // if not a number ignore
            if(typeof element!=="number" || Number.isNaN(element)) continue;
            // if(isNaN(element) || element===null) continue;
            if(element>maximumElement){
                maximumElement=element;
            }
            // maximumElement=(element>m)
            if(element<minimumElement){
                minimumElement=element;
            }
            


        }
        console.log("maximumElement",maximumElement);
        console.log("minimumElement",minimumElement);
        return maximumElement-minimumElement;
    }
    catch(error){
        console.log("error",error);
        return 0;
    }
}

// first take input as an array
let arr=[10, 3, 5, 1, 9,"hello",null,undefined,,NaN];

// now pass it to function
let result= largestDifference(arr);
console.log(result);