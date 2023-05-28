
let students =['Anna','Lola','Nora','Adam','John'];
let studentLength=students.length; 
console.log(`\n the length of the array: ${studentLength}`);


let removeLastName = students.pop(); 
console.log(`\n last name that will be removed:${removeLastName}`);
console.log(students);

let addLastStudent=students.push('John');
console.log(`\n new length:${addLastStudent}`);
console.log(students);

let removeFirstElement=students.shift();
console.log(`\n first name will be removed:${removeFirstElement}`);
console.log(students);

let addNewElementaAtTheStart = students.unshift('Anna');
console.log(`\n the new length of the Array:${addNewElementaAtTheStart}`);

console.log(students);

let removeAndAddElements= students.splice(1,2,'Mira','Elia');
console.log(`\n ${removeAndAddElements}`);

console.log(students);


let isJohnIncluded =students.includes('John');
console.log(`\n is John included in the array?${isJohnIncluded}`);

let addNewStudent = students.splice(3,0,'Kate');
console.log(students);

let reverseStudents = students.reverse();
console.log(`\n reversed string: ${reverseStudents}`);

//let removeLastValue=students.pop();

//let add_last_value=students.push('John');

console.log(students);

let firstStudent = students[0];
console.log(firstStudent);

let lastStudentIndex = students.length-1;
console.log(`\n index number of last student:${lastStudentIndex}`);

let lastIndexValue=students[5];

console.log(`\n length of array: ${students.length}`);

let compareFirstAndLast = firstStudent===lastIndexValue; 
console.log(`\n are they equal? ${compareFirstAndLast}`);


















