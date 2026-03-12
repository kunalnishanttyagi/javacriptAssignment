/*

    deep clone an object

*/

let obj1={
    name:"Nishant tyagi",
    age:"21",
    city:"Ghaziabad",
    marks:{
        physics:30,
        chemistry:25,
        maths:30
    },
    projects:{
        project1:{
            tech:"mern",
            name:"chat app"
        },
        project2:{
            tech:"mern",
            name:"food delivery app"
        }
        
    },
    friends:[
        {
            friend1:{

                name:"prince",
                age:20
            }
        },
        {
            friend2:{
                tech:"amit",
                age:21
            }
        }
        
    ]

}


function copy(obj){
    if (obj==null || typeof obj!=="object") return obj;
    let copyObj=Array.isArray(obj) ? [] : {};
    for(let [key,value] of Object.entries(obj)){
            let tempObj=copy(value);
            copyObj[key]=tempObj;
        
    }
    return copyObj;
}


// console.log(3);


let obj2=obj1;
obj2.name="Amit";
obj2.marks.chemistry=40

let obj3=copy(obj1);
console.log(obj3);
obj3.marks.chemistry=90;
console.log(obj1);
console.log(obj3);
console.log(obj3.marks.chemistry);

console.log(obj2.marks.chemistry);
console.log(obj1.marks.chemistry);