// now i am making a map

let checkSubscription={};


const routes = [
  {
    name: 'M1',
    comp: 'C1',
  },
  {
    name: 'M2',
    comp: 'C2',
  },
  {
    name: 'M3',
    subComp: [
      {
        name: 'M3A',
        comp: 'C3A',
      },
      {
        name: 'M3B',
        comp: 'C3B',
      },
    ],
  },
  {
    name: 'M4',
    subComp: [
      {
        name: 'M4A',
        comp: 'C4A',
      },
      {
        name: 'M4B',
        comp: 'C4B',
      },
    ],
  },
  {
    name: 'M5',
    subComp: [
      {
        name: 'M5A',
        comp: 'C5A',
      },
      {
        name: 'M5B',
        subComp: [
          {
            name: 'M5BA',
            comp: 'C5BA',
          },
          {
            name: 'M5BB',
            comp: 'C5BB',
          },
          {
            name: 'M5BC',
            comp: 'C5BC',
          },
        ],
      },
      {
        name: 'M5C',
        comp: 'C5C',
      },
    ],
  },
];

const subscription = [
  {
    name: 'M1',
    isSub: true,
  },
  {
    name: 'M2',
    isSub: false,
  },
  {
    name: 'M3',
    isSub: false,
    subMod: [
      {
        name: 'M3A',
        isSub: true,
      },
      {
        name: 'M3B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M4',
    isSub: true,
    subMod: [
      {
        name: 'M4A',
        isSub: false,
      },
      {
        name: 'M4B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M5',
    isSub: true,
    subMod: [
      {
        name: 'M5A',
        isSub: false,
      },
      {
        name: 'M5B',
        isSub: true,

        subComp: [
          {
            name: 'M5BA',
            isSub: false,
          },
          {
            name: 'M5BB',
            isSub: true,
          },
          {
            name: 'M5BC',
            isSub: false,
          },
        ],
      },
      {
        name: 'M5C',
        isSub: true,
      },
    ],
  },
];



// above we have defined our input



// here i will map all route to their subscription to access easily

function mapSubscription(subscription,parent ){
    // nwo i will check if direct or nested

    // traverse on all
    for(let singleSubscription of subscription){
        // nwo i will check if nested
        if("subMod" in singleSubscription){
            // handle recursively
            checkSubscription[singleSubscription.name]=singleSubscription.isSub;
            mapSubscription(singleSubscription.subMod,checkSubscription[singleSubscription.name]);
        }
        else{
            // normal case
            if(parent===false){
                checkSubscription[singleSubscription.name]=false;
            }
            else
            checkSubscription[singleSubscription.name]=singleSubscription.isSub;
        }
    }
}

mapSubscription(subscription,true);

console.log(checkSubscription);



// now is the function

function func(arr,header){
    // current is our array of objects
    // so i will traverse
    const result=[];
    // now run a for loop on the array
    for(let value of arr){
        // now i have a object 
        // if subcomp is present
        if("subComp" in value){
            // console.log(value);
            // then i need to do something more
            let obj={};
            obj.name=value.name;
            let [tempResult,headerResult]=func(value.subComp,"NO");
            if(checkSubscription[value.name]){
                // if true
                // in this case it si good
                if(header=="NO"){
                    header=value.name;
                }

                
            }
            else{
                // result.push({redirectTo:"NO"});
                
            }
            // console.log(tempResult);
            let arr=[];
            arr.push({redirectedTo:headerResult});
            // now push all to object
            // obj.subComp=[];
            for(let object of tempResult){
                arr.push(object);
                // obj.subComp.push(...object);
            }
            // console.log(arr);
            obj.subComp=arr;
            result.push(obj);


        }
        else{
            // things are simple here
            if(checkSubscription[value.name]){
                // if true
                // result.push({redirectTo:value.name});
                if(header=="NO") header=value.name;
                result.push({name:value.name,comp:value.comp});
            }
            else{
                // result.push({redirectTo:"NO"});
                result.push({name:value.name,comp:"UN"});
            }
        }
        
    }
    return [result,header];
}

// now i will get the result after i will call the function

let holder="NO";
const [result,header]=func(routes,holder);
result.push({redirectedTo:header});
console.log(result);



function printAns(result){
    if(!Array.isArray(result)) {
        // if(result!=undefined)
        //     console.log(result);
        return;
    }
    for(let ele of result){
        if(typeof ele==="object"){
            // if("subComp" in ele){
            //     console.log(ele.name);
            //     printAns(ele.subComp);
            // }
            // else
            console.log(ele);
        }
        else{
            printAns(ele);
        }
    }
}
printAns(result);