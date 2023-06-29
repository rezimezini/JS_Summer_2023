//1.Write a function that takes an array of objects representing books and returns an array containing the titles of those books.

let books=[
    {title:'From dusk till dawn'},
    {title:'The good big giant'},
    {title:'A night in Lisbon'}
];

let titleBooks=books.map(function(book) {
   
    return book.title;
});

console.log(titleBooks);


function titBooks() {
    let titlebooks=[];
    for (const key in books) {
        titleBooks.push(books[key]);
    }
    console.log(titleBooks);
};

titBooks();

//2.Write a function that takes an array of objects representing products and returns an array containing only the products that are currently in stock.

let product=[
    {item:'In stock',name:'apple'},
    {item:'Not in stock',name:'Banana'},
    {item:'Not in stock', name:'Grapes'},
    {item:'In stock', name:'Peaches'}
];
let inStockitems=product.filter(function(prod) {
    return prod.item === 'In stock';
})
console.log(inStockitems);


//3.Write a function that takes an array of objects representing users and returns the first user whose email address matches a given email.


let users=[
    {email: 'abs@gmail.com'},
    {email:'abc@yahoo.fr'},
    {email:'avs@gmail.com'},
    {email:'art@aol.com'}
];

let gmailadress=users.find(function (user) {
    
    return  user.email === 'avs@gmail.com';
})
console.log(gmailadress);



//4.Write a function that takes an array of objects representing tasks and returns true if all the tasks are marked as complete, otherwise returns false.

let tasks=[
    {task:'uncomplete'},
    {task:'complete'},
    {task:'complete'}
];

let taskscomplete=tasks.filter(function(take) {
    
    if (take.task === 'complete' )
    return true;
    else
    return false;
});

console.log(taskscomplete);

//5.Write a function that takes an array of objects representing purchases and returns the total amount spent on those purchases.

let buys=[
    {purchase: 5000},
    {purchase: 10000},
    {purchase: 6000},

];

let totalsum=buys.reduce(function (val,val1,) {
    
    return val + val1.purchase ;
},0);

console.log(totalsum);

//6.Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

let numbers=[9,5,7,6];

let sumofarray=numbers.reduce(function (sum,num) {
   
return sum + num ;
});

console.log(sumofarray);


//7.Write a function that takes an array of strings as input and returns a new array with all the strings converted to uppercase.

let cars=['honda','toyota','audi',];

let uppercase=cars.map(function (wheel) {
    return wheel.toUpperCase(); 
})
console.log(uppercase);


//8.Write a function that takes an array of numbers as input and returns a new array with all the even numbers from the original array.

let num1=[5,4,7,6,3,9,];

let evennum=num1.filter(function (num) {
    
    return num % 2 === 0;
})
console.log(evennum);

//9.Write a function that takes an array of strings as input and returns a new array with all the strings that have a length of 4 or less.

let colours=['blue','red','white','pink'];

let lengthfourorless=colours.filter(function (col) {
    

    return col.length <= 4;
});

console.log(lengthfourorless);