
let coder ='I am a good programmer';
console.log(`\n data type of this program is:${typeof coder}`);


let coderLength = coder.length;
console.log(`\n  the length of the coder is:${coderLength}`);

let convertUpperCase = coder.toUpperCase();
console.log(`\n New String in uppercase will be:${convertUpperCase}`);

let convertLowerCase = coder.toLowerCase();
console.log(`\n New String will be: ${convertLowerCase}`);

let includeGood = coder.includes('good');
console.log(`\n is good included in the string: ${includeGood }`);

let replace_programmer = coder.replace('p','P');
console.log(`\n new word is: ${replace_programmer}`);

let stripOut_programmer = coder.replace('programmer', '');
console.log(`\n new string: ${stripOut_programmer}`);

let endswithProgrammer = coder.endsWith('programmer');
console.log(`\n is the program in the end:${endswithProgrammer}`);

let mySubstring = coder.split('good');
console.log(`\n new string: ${mySubstring}`);





