//1.Write a function that takes in two arrays of numbers and returns a new array containing all the elements of both arrays

const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];
combinedArray = [...arrayOne,...arrayTwo];
console.log(combinedArray);

//2.Write a function that takes in an array of strings and a string to add to the beginning of the array,
// and returns a new array with the string added to the beginning.

const arrayTree = ['bmw','honda','acura'];
const newArrayTree=['audi',...arrayTree];

console.log(newArrayTree);

arrayTree.unshift("toyota");

console.log(arrayTree);

//3.Write a function that takes in an object and a key-value pair to add to the object,
// and returns a new object with the key-value pair added.

let arrayFour={a:1,b:2,};

let newarrayFour={...arrayFour,c:3};

console.log(newarrayFour);

let newarrayFourOne={c:3,...arrayFour};

console.log(newarrayFourOne);

//4.Write a function that takes in an array of numbers and returns the largest number in the array.

let arrayFive=[5,7,3,9];
let  arraySix=[-1,9,32];

function largestNumber(arrayFive) {
    let max=arrayFive[0]; 
    for (let i = 0; i < arrayFive.length; i++) {
    if(arrayFive[i]>max){
        max=arrayFive[i];
    }
       
    } 
    return max;
}

const res=largestNumber(arrayFive);
const res2=largestNumber(arraySix);

console.log(res);

console.log(res2);
    


//5.Write a function that takes in an array of strings and returns a new array containing all the strings in alphabetical order.

let arrayCars = ['bmw','honda','acura'];

function alphabetOrder(strings) {
   
    return strings.sort();
}

        console.log(alphabetOrder(arrayCars));
    
