/*
{
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
  }
}
*/


// here i will use recursion

const input={
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
    
  }
}
// "keyC": {
//       "keyCOne": "key C one value",
//       "keyCTwo": "key C two value",
//       "keyCThree": 1234
//     }

function flattenObject(input){
    // now traverse
    // console.log(input);
    if(!input || typeof input!="object") return input;
    let result={};
    for(let [key,value] of Object.entries(input)){
        if(typeof value==="object"){
            // make recursive call 
            let data=flattenObject(value);
            for(let [a,b] of Object.entries(data)){
                // let tempKey=`${"\""+key+"\"}`;
                // tempKey+='.';
                // tempKey+=`${"\""+a+"\""}
                // `;
                let tempKey=key+'.'+a;
                result[tempKey]=b;
            }
            // console.log(value);
        }
        else{
            // normally append it
            // console.log(key);
            // let tempKey=`${"\""+key+"\""}`;
            // console.log(tempKey);
            result[key]=value;
        }
    }
    return result;
}

console.log("result is");
console.log(flattenObject(input));
// console.log(typeof input);