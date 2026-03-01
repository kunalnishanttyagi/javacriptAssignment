/*

Question 12: Create a student object and perform the following operations in one program:
Store information about a student including name, age, and grade.
Access and print the student’s name using both dot and bracket notation.
Add a new property school to the student object.
Delete the grade property from the object.
Add a nested object marks to store scores for multiple subjects (e.g., math, english, science).
Write code to print all subjects and their corresponding marks.
Add a method greet to the student object that prints a greeting with the student’s name.

*/

let student={
    name:"John",
    age:18,
    grade:11,

    getName:function(){
        return this.name;
    }


}


// checkign to see if everything is working fine
student.school="ABC School";
console.log(student);
console.log(student.name);
console.log(student["name"]); 
console.log(student.school); 
console.log(student["school"]);

delete student.grade;

// making a object of marks
let mark={
    math:90,
    english:80,
    science:85
}

// adding mark to student
student.marks=mark;

console.log(student);

// printing subject and marks
for(let subject in student.marks){
    console.log(subject+" "+student.marks[subject]);
}

// addint greet method
student.greet=function(){
    console.log("Hello, my name is "+this.name);
}
student.greet();





