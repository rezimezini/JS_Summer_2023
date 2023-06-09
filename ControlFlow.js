
let number = 10;
if (number % 2 === -1) {
    console.log(`${number} number will be odd`);
    
} else {
    console.log(`${number} number will be even`);
}

let age = 24;
if (age < 18) {
    console.log('\n you are a minor');
}  else if(18 < age <= 65 ) {
    console.log(`\n you are an adult`);
}else{
console.log(`\n you are a senior `);
}


let letter = 'e';
let vowel=['a','e','o','u','i'];
if (vowel.includes(letter)) {
    console.log(`\n letter is a vowel`);
} else {
    console.log(`\n letter is a consonant`);
}

let number1 = 30;
let number2 = 15;
let number3 = 45;

if (number1>number2 && number1> number3) {
    console.log(`\n number 1 is the largest`);
} else if (number2 > number1&& number2> number3) {
    console.log(`\n number 2 is the largest `);
} else console.log(`\n Number three is the largest`);

let password = 'Test1233'; 
if (password < 8) {
    console.log(`\n password too short`);
} else if( password.includes('Test') && password.includes(1233)){
    console.log(`\n password accepted `);
} else console.log(`\n ${password } rejected  `);

    

    
