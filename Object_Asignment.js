//1.Build Object for Employees: An employee can be represented as an object with attributes such as name, age, salary, and job title.
// It can also have functions like work, take a break, and attend a meeting.

let Employee = {
    name: 'Alex',
    age : 30,
    salary : 90000,
    jobTitle: 'SDET',
    work :function(){
console.log(`\n I like Automation `);
    },
    takeabreak : function() {
        console.log(`\n My break is at 12`);
    },
        
    attendameeting : function (){
        console.log(`\n i have a morning meeting`);
    }
}

Employee.work();
Employee.takeabreak();
Employee.attendameeting();

//2. Build Object for  Bank accounts: 
//A bank account can be represented as an object with attributes such as account number, balance, and account type.
//It can also have functions like deposit, withdraw, and transfer.

 let bankaccounts = {
    accountumber : 3495069,
    balance : 100,
    accounttype: 'Bussines', 
    deposit : function(){
        console.log(`\n i have deposit 200 dollars`);
    },
     withdraw : function (){
        console.log(`\n Evry week i will withdraw 50 dollars`);
     },
     transfer : function (){
        console.log(`\n My transfer is free`);
     }
 }
console.log(`\n My balance is: ${bankaccounts.balance}`);

bankaccounts.withdraw();
bankaccounts.transfer();
console.log(`\n My account nr is: ${bankaccounts.accountumber}`);

// 3.Build Object for  Dogs:
 //A dog can be represented as an object with attributes such as breed, age, and color. It can also have functions like bark, 
 //wag tail, and fetch.

 let dogs = {
    breed : 'similar traits', 
    age: 15-20,
    color : 'black and white ',
    bark:function(){
        console.log(`\n These dogs bark when they are scared `);
    },
    wagtail:function(){
        console.log(`\n Dogs are happy and friendly `);
    },
    fetch: function(){
        console.log(`\n Dogs relive their anxiety by different activities `);
    }

 }

 console.log(`\n Dogs are alike with:${dogs.breed}`);
 dogs.bark(); 
 dogs.wagtail();
 console.log(`\n the color of these dogs is:${dogs.color}`);


 // 4. Suppose you are building an e-commerce application and you want to create a new Product object with property name, price,
 // manufacturer, category
 // 5.Now add a description property to the Product object you created

 // 6.Suppose the price of the Product object you created earlier changes. Now the price increased by $10
 
 //7.Remove the description property from the Product object you created earlier.

    let newproduct = {
    name: 'optical glasses',
    price : 400,
    manufacturer: 'Eywear ',
    category : 'full frame',
    
     }
 newproduct.decriptionproduct = 'The color of the product is black';

console.log(`\n ${newproduct.decriptionproduct}`);

newproduct.price = 410;
console.log(`\n The new price is: ${newproduct.price}`);
 

 delete newproduct.decriptionproduct; 
console.log(`\n ${newproduct.decriptionproduct}`);

// 8. Suppose you are building a blog application and you want to display a list of all the blog posts.
 //You have an array of blog post objects, where each object has properties such as title, author, date, and content.
// Find out if date field is empty on any object

const blogPosts = [
    {
        title: 'The importants of regular exercice',
        author: 'John Doe',
        date : '2022-02-28',
        content : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit',
    },

    {
        title: 'Tips for eating healthy on a budget',
        author: 'Jane Smith',
        date : '2022-02-15',
        content : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit',
    }
]
let emptydataObject=[];
for (let blogobject of blogPosts) {
    if (blogobject.date === '') {
        emptydataObject.push(blogobject.date);
        
       
    }
}
console.log(`\n Date empty is :${emptydataObject}`);

console.log(emptydataObject);

















    
 




























