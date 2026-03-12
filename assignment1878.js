// now here i have to take the array of  object and then i have
// changes is to create array of objects
// to map each person and his contact to the batch_id he have

const input=[
  {
    "batch_id": "123",
    "name": "Tony",
    "contact": "9872276210"
  },
  {
    "batch_id": "231",
    "name": "Steve",
    "contact": "7876543210"
  },
  {
    "batch_id": "123",
    "name": "Bruce",
    "contact": "6776543210"
  },
  {
    "batch_id": "321",
    "name": "Clint",
    "contact": "8954643210"
  },
  {
    "batch_id": "123",
    "name": "Peter",
    "contact": "7666543210"
  },
  {
    "batch_id": "231",
    "name": "Phil",
    "contact": "8896543210"
  },
  {
    "batch_id": "321",
    "name": "Nick",
    "contact": "9876521210"
  }
]

function getDetails(input){
    const result={};
    for(let i of input){
        // now i is the object
        if(i.batch_id in result){
            const obj={};
            obj.name=i.name;
            obj.contact=i.contact;
            result[i.batch_id].push(obj);
        }
        else{
            const obj={};
            obj.name=i.name;
            obj.contact=i.contact;
            result[i.batch_id]=[obj]
        }
    }
    return result;
}

const ans=getDetails(input);
console.log(ans);