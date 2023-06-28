//1.Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

 let numArray = [3,6,9] ;
 let narr=[9,2];
 let rez=[1,2,3,4,];



 function arraySum(numArray) {
  
    let sum=0;
  
   for (let i = 0; i < numArray.length; i++) {
      
       sum=sum+numArray[i];
     
   }
   
   return sum;
   
   
 }
   
  let arr=arraySum(numArray); 
  console.log(arr);

  let arr1=arraySum(narr);
  console.log(arr1);

  let tryt=arraySum(rez);
  console.log(arraySum(rez));
   

    



//2.Write a function that takes in a string and returns the string reversed.


let  str=`texas`;




function revStr() {
let string_change='';

let  arrayStr=str.split(' , ');

for (let i=0;i <arrayStr.length ;i++) {
  
   let  rev_str=arrayStr.reverse();
   let string_change=rev_str.join(' ');

   
   
}
return string_change;

}
let rev=revStr(str);
console.log(rev);




//3.Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender,
// and returns an array of objects representing only the people who are over the age of 18.

let people=[
   {
      name:'Ken',
      age:25,
      gender:'Male'
   },
   {
      name:'Anna',
      age:24,
      gender:'Female'
   },
   {
      name:'Ben',
      age:23,
      gender:'Male'
   }
];

function overEighteen(people) {
let over_eighteen=[];
   for (const property of people) {
      if (property.age > 18)
       over_eighteen.push(property.age);
   }
   console.log(over_eighteen);
}

overEighteen(people);





//4.Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.

let num=[2,5,4,7,9,0,3];
let  numb=[8,6,4,3,2,5,8];

function evennum() {

   let even_num=[];

     for (let index = 0; index < num.length; index++) {
       
       if(num[index] % 2 === 0)
      even_num.push(num[index]);
      
   }
  console.log(even_num);
}

evennum(num);
evennum(numb);




//5.Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".

let cars=['Audi','acura','bmw','gmc'];

function starts_a(cars) {
let startswith_a=[];

for (let i=0;i<cars.length;i++){
if(cars[i].toLowerCase().startsWith('a')){
startswith_a.push(cars[i]);
}
}
console.log(startswith_a);
}
   starts_a(cars);
 



//6.Write a function that takes in an array of objects representing books, where each object has properties for title,
// author, and published, and returns an array of strings representing the titles of all the books published in the year 2000 or later.


let books=[
   {
      title:"Giant of Rhode",
      author:'Nitszhe',
      published:1988,
   },
   {
      title:"Arch of triumph",
   author:'Erih Maria Remark',
   published:1957
   },
   {
      title:"Novels of Russia",
   author:'Leon Tolstoi',
   published:2001
   }
];

function latestbooks() {

   let booksaftertwoothousand=[];

   for (const library of books) {
      if(library.published >= 2000)

         booksaftertwoothousand.push(library.title);
         
   }

   console.log(`\n Books after 2000 are  : ${booksaftertwoothousand} `);
}

latestbooks();

//7.Write a function that takes in two numbers and returns the larger of the two.
let a=5;
let b=9;

function larger(a,b) {
   if(a>b )
   return a; 
   else
   return b;
   
}
let result=larger(5,9);
console.log(result);


//8.Write a function that takes in an array of numbers and returns the smallest number in the array.
let number=[2,8,7]

function smallest() {

   let small=number[0];

   for (const s of number ) {
      if ( s < small)
          small=s;
   }
   return small;
}


let res=smallest();
console.log(res);



//9.Write a function that takes in an array of strings and returns the longest string in the array.

let colours=['blue','white','black','yellow'];

function longeststring() {

   let longest_string=[];

   for (const key of colours) {

      if( key > longest_string  )
      longest_string=key;
           
   }
   return longest_string;
}

let resul=longeststring();

console.log(resul);


//10.Write a function that takes in an array of objects representing students, where each object has properties for name and grade,
// and returns an array of objects representing only the students who have a grade of "A".

let student=[
   {
      name:'John',
      grade: 'A'
   },
{
      name:'Annie',
      grade: 'B'

},

{

      name:'Mark',
      grade: 'C'
},

{
      name:'Lola',
      grade: 'D'
}
];

function gradeAstudent() {
   let gradeA = [];
   for (const property of student) {
      if (property.grade === 'A') {
         gradeA.push(property.grade)
      }
   }
   console.log(`\n ${gradeA}`);
}
 gradeAstudent();

   
   
   


