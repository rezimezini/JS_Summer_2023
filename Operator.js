// Arithmetics Operator1

let num1 = 30;
let num2 = 40;

console.log(`sum of two numbers is: ${num1+num2}`);

// Assignment operator2 

let  var1 = 5;
     var1 += 2;
     console.log(`\n sum is:${var1}`);

let price = 10;
    price *= 2.5;
    console.log(`\n sum of price is:${price}`);

// Comparison operator3 

let ella = 20;
let ani = 30;

console.log(`\n Ani is older then ella: ${ani > ella}`);

let herName = 'Elia';
let hisName = 'John Doe';

console.log(`\n These strings are not equal: ${herName!= hisName} `);

// Logical operator4

let isMember = false;
let hasCupon = true;
if (isMember||hasCupon) {
    console.log(`\n If one of the condition is true the customer gets free shipping`);
    
}

let isMember1 = false;
let hasCupon2 = false;
if (isMember1||hasCupon2) {
console.log(`\n If one of the conditions is not satisfied the customer does not get free shipping  `);
}

let num5 = 7;
if (num5 != 0) {
   console.log(`\n Number 7 is not equal to 0`); 
}

//  Conditional operator5 (Ternary )

let arbaAge = 3;
let enoughToVote = 18;
let result = (arbaAge >= enoughToVote)? 'you are old enough to vote': 'you are not enough to vote'
console.log(`\n ${result}`);

let price2 = 50;
let salePrice = 35;
let result3 = (price2 > salePrice)? 'the pruduct is not in sale': 'the product is in sale'
console.log(`\n ${result3}`);
