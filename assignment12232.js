// here we will find sum for nested array


function sumNestedArray(arr){

    // type of NaN
    // now i will go and check 
    if(!Array.isArray(arr)){
        console.log("array not proper");
        return -1;
    }
    let sum=arr.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            // if curr is array just recurse call make
            return acc+sumNestedArray(curr);
        }
        else{
            // check if it is number 
            if(typeof curr==="number"){
                return acc+curr;
            }
            // if not number do not do anything just 
            // return acc
            else{
                return acc;
            }
        }
    },0);

    // return final sum;
    return sum;
}

// first i will fix the input
let arr=[[1],2,3,[4,5,6],7,[8,9],"hello",undefined,null,true,10,[11],[12,13,14,15]];
console.log(sumNestedArray(arr));
// sum should be 120
