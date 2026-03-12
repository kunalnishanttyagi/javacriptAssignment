

// function mergeObject(employees,projects){
//     if(!employees || !projects){
//         console.log("employees and projects are required");
//         return {};
//     }
//     try{

//         // here lets create new object and perform tasks

//         // try to optimise 
//         let result=[];
//         for(let employee of employees.employees){
//             let projectsAssigned=[];
//             // now i have a employee
//             let totalHours=0;
//             let totalRating=0;
//             for(let project of projects.projects){
//                 // now i am searching for every project
//                 // now traverse on all employees assigned to this project
//                 // working hours
//                 // let workingHours=0;

//                 // put all details of this project if assigned to this employee
//                 let currProjectAssigned={};
//                 for(let hour of project?.hours){
//                     // now travellling all employees assigned to this project
//                     if(hour["employee_id"]===employee["employee_id"]){

//                         // add all required details
//                         totalHours+=hour["hours_worked"];
//                         totalRating+=project["rating"];
//                         currProjectAssigned["project_id"]=project["project_id"];
//                         currProjectAssigned["name"]=project["name"];
//                         currProjectAssigned["rating"]=project["rating"];
//                         currProjectAssigned["hours"]=hour["hours_worked"];
//                         projectsAssigned.push(currProjectAssigned);
//                     }
//                 }
//             }
//             // i have the assigned projects
//             // so now i can create my answer

//             // emplo
            
//             let answer={};
//             answer["employee_id"]=employee["employee_id"];
//             answer["name"]=employee["name"];
//             answer["role"]=employee["role"];
//             answer["total_hours"]=totalHours;
//             answer["projects"]=[];
//             answer["average_rating"]=(!projectsAssigned.length)?(0):(totalRating/projectsAssigned.length);
//             for(let project of projectsAssigned){
//                 answer["projects"].push(project);
//             }
//             // push this to main answer
//             result.push(answer);
//             // now go for creating the answer for other employee

//         }

//         return result;


//     }
//     catch(error){
//         console.log("error",error);
//         return {};
//     }
// }
















// here i will write a merge object function
// here i wont additionally traverse over the object of employees

function mergeObject(employees,projects){


    if(!projects || !employees) return [];

    try{
      
    let employeeProject=new Map();
    let employeeProjectHours=new Map();
    let employeeProjectRating=new Map();
    // console.log(typeof employeeProjectHours);

    // now traveerse over the projects

    for(let project of projects?.projects){

      // traverse over the hours in projects

      for(let hour of project?.hours){


        // now here i have the employee id
        if(employeeProject?.has(hour?.employee_id)){
          employeeProject?.get(hour?.employee_id).push(project);
          // console.log(employeeProjectHours.get(hour.employee_id));
          employeeProjectHours?.set(hour?.employee_id,hour?.hours_worked+(employeeProjectHours?.get(hour?.employee_id)));
          // employeeProjectHours.get(hour.employee_id)+=hour.hours_worked;
          employeeProjectRating?.set(hour?.employee_id,project.rating+(employeeProjectRating?.get(hour?.employee_id)));
          // employeeProjectRating.get(hour.employee_id)+=project.rating;

        }
        else {
          employeeProject?.set(hour?.employee_id,[project]);
          employeeProjectHours?.set(hour?.employee_id,hour?.hours_worked);
          employeeProjectRating?.set(hour?.employee_id,project?.rating);
        }
        

      }

    }
    
    // console.log(employeeProject);
    // console.log(employeeProjectHours);
    // console.log(employeeProjectRating);


    // make a map for employee with id

    let employeeWithId=new Map();
    for(let employee of employees?.employees){

      employeeWithId.set(employee?.employee_id,employee);

    }


    // now i have all employee with the total projects assigned to them

    // now i will create the answer array

    let result=[];

    // now traverse on employeeProject one by one

    for(let [employeeId,projects] of employeeProject){

      // take each and put in 

      let curr={};

      // now get the employee corressponding to this id

      // now fill 
      let currEmployee=employeeWithId?.get(employeeId);

      curr.employee_id=currEmployee?.employee_id;
      curr.name=currEmployee?.name;
      curr.role=currEmployee?.role;
      curr.total_hours_worked=employeeProjectHours?.get(employeeId);
      curr.average_project_rating=employeeProjectRating?.get(employeeId)/employeeProject?.get(employeeId)?.length;
      curr.projects=[];
      for(let project of projects){

        // nwo push this project
        let tempProject={};

        tempProject.project_id=project?.project_id;
        tempProject.name=project?.name;
        tempProject.hours_worked=project?.hours_worked;
        tempProject.rating=project?.rating;
        curr.projects?.push(tempProject);
      }




      result?.push(curr);
    }
    return result;
  }
  catch(err){
    console.log("Improper data found "+err);
  }

}















// first i will fix the input
let employees={
  "employees": [
    {
      "employee_id": "E001",
      "name": "John Doe",
      "role": "Developer" 
    },
    {
      "employee_id": "E002",
      "name": "Jane Smith",
      "role": "Designer" 
    },
    {
      "employee_id": "E003",
      "name": "Emily Davis",
      "role": "Project Manager" 
    }
  ]
};

let projects={
  "projects": [
    {
      "project_id": "P001",
      "name": "Project Alpha",
      "hours": [
        { "employee_id": "E001", "hours_worked": 120 },
        { "employee_id": "E002", "hours_worked": 80 }
      ],
      "rating": 4.5
    },
    {
      "project_id": "P002",
      "name": "Project Beta",
      "hours": [
        { "employee_id": "E001", "hours_worked": 150 },
        { "employee_id": "E003", "hours_worked": 200 }
      ],
      "rating": 4.7
    },
    {
      "project_id": "P003",
      "name": "Project Gamma",
      "hours": [
        { "employee_id": "E002", "hours_worked": 50 },
        { "employee_id": "E003", "hours_worked": 60 }
      ],
      "rating": 4.0
    }
  ]
};

let result=mergeObject(employees,projects);
if(result.length)
console.log(result);
else console.log("No proper solution found");

// for(let employee of result){
//     console.log("Employee ID:",employee.employee_id);
//     console.log("Name:",employee.name);
//     console.log("Role:",employee.role);
//     console.log("Total Hours Worked:",employee.total_hours);
//     console.log("Average Project Rating:",employee.average_rating.toFixed(2));
//     console.log("Projects Assigned:");
//     for(let project of employee.projects){
//         console.log("  - Project ID:",project.project_id);
//         console.log("    Name:",project.name);
//         console.log("    Rating:",project.rating);
//         console.log("    Hours Worked:",project.hours);
//     }
// }