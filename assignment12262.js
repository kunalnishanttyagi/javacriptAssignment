/*

// Create the company structure with the initial data
const jsonObject = createCompanyStructure(initialData);

// Example usage:

// Add a new employee to Engineering
jsonObject.manageCompany("add", "Engineering", { id: 4, name: "Dave", role: "Intern" });

// Remove an employee from HR
jsonObject.manageCompany("remove", "HR", { id: 3 });

// Update an employee's information in Engineering
jsonObject.manageCompany("update", "Engineering", { id: 2, name: "Robert", role: "Lead Engineer" });

*/

class Employee{
    constructor(args){
        this.name=args?.name;
        this.id=Number(args?.id);
        this.role=args?.role;
        this.department=args?.department;
    }
}
class Department{
    constructor(name){
        this.name=name;
    }
}
class Company{
    constructor(args){
        this.employees=[];
        this.departments=[];
        for(let employee of args?.employees){
            let newEmployee=new Employee(employee);
            this.employees.push(newEmployee);
        }
        for(let department of args?.departments){
            let newDepartment=new Department(department);
            this.departments.push(newDepartment);
        }

        
    }
    // functions
    manageCompany(...args){
        // here i will get some operations
        console.log("got a function call");
        console.log(args)
        if(args?.[0]==="add"){
            const{}=obj ||{}
            // console.log("trying to make new employee");
            // here i have to add a new Employee
            // first i will create a one and then 
            let newEmployee=new Employee({name:args?.[2]?.name,role:args?.[2]?.role ,id:args?.[2]?.id,department:args?.[1]})
            console.log(newEmployee);
            this.employees.push(newEmployee);
        }
        if(args?.[0]==="remove"){
            console.log("trying to remove employee");
            // if remove hr
            // if(args?.[1]==="Hr"){
                // get id to delete
                let removeId=Number(args?.[2]?.id);
                // nwo delete this id
                for(let index in this.employees){
                    if(this.employees[index].id===removeId){
                        // remove it
                        delete this.employees[index];
                        // remove from array
                        this.employees.splice(index,1);
                        return;
                    }
                }
            // }
        }
        if(args?.[0]==="update"){
                // get id to update
                let removeId=Number(args?.[2]?.id);
                // nwo update this id
                for(let index in this.employees){
                    if(this.employees[index].id===removeId){
                        // now update everything
                        this.employees[index].name=args?.[2]?.name;
                        this.employees[index].role=args?.[2]?.role;
                        this.employees[index].department=args?.[1];
                        return;
                    }
                }
            }
    }
    
    printDetails(){
        console.log(this.departments);
        console.log(this.employees);
    }

}

const bigoh=new Company({employees:[{id:1,name:"nishant",role:"intern",department:"Engineering"},{id:2,name:"abhishek",role:"manager",department:"Hr"}],departments:["Hr","Engineering"]});
// console.log(bigoh);


bigoh.manageCompany("add", "Engineering", { id: 3, name: "Dave", role: "Intern"});
// bigoh.manageCompany("remove", "Hr", { id: 2 });
bigoh.manageCompany("update", "Engineering", { id: 2, name: "Robert", role: "Lead Engineer" });

bigoh.printDetails();
