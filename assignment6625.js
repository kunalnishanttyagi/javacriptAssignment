// yes here check min number of change

function minChanges(str1){
    // if odd length impossible

    // if not string return -1;
    if(typeof str1!=="string") return -1;


    try{
        if(str1.length%2===1) return -1;

        let ans=0;
        let currOpen=0;
        let currClose=0;
        

        for(let char of str1){
            if(typeof char!=="string") return -1;
            if(char=='{') currOpen++;
            else if(char=='}') {
                if(currOpen>0) {
                    currOpen--;
                }
                else{
                    // no this is illegal
                    currClose++;
                    if(currClose==2){
                        currClose=0;
                        // here i can make }} as {} in one move so i increase answer by 1
                        ans++;
                    } 
                    
                }
            }
        }
        return ans+Math.trunc(currOpen+1)/2+Math.trunc(currClose+1)/2;
    }
    catch(err){
        console.log(err);
    }

    




}






// first i will fix the input
let str1="{{{{}}"
let str2="}}}}"
console.log(minChanges(str1));
console.log(minChanges(str2));