//1.Create a class called Animal that has a name property and a speak method. The speak method should log a message to the console saying 
//"Hello, my name is {name}." Create an instance of the Animal class and call the speak method.

class Animal{

  name = 'Rezi';
  speak(){
    console.log(`\n my name is :${this.name}`);
  }
}
module.exports = Animal; 
let  object1 = new Animal();
object1.speak();

//2.Create a class called Person that has name and age properties, and a greet method that logs a message to the console saying
// "Hello, my name is {name} and I am {age} years old." Create an instance of the Person class and call the greet method.

class Person{
 name = 'Elia';
 age = 10;
 greet(){
  console.log(`\n Hello, my name is ${this.name} and i am ${this.age} years old`);
 };
}
 let object2 = new Person();
 object2.greet();



//3.Create a class called Car that has make, model, and year properties, and a start method that logs a message to the console saying
 //"The {make} {model} is starting." Create an instance of the Car class and call the start method.

class car {
 
  make='Toyota';
  model='prius';
  year=2020;
  start(){
    console.log(`\n The ${this.make} ${this.model} is starting .`);
  };

}
module.exports=car;
let obj1=new car();
obj1.start();

//4.Create a class called Rectangle that has width and height properties, and a getArea method that returns the area of the rectangle.
 //Create an instance of the Rectangle class and call the getArea method.

class Rectangle{
  width = 12;
  height = 25;
  getarea(){
    return this.width*this.height;
   }
}
let object3 = new Rectangle();
 let area = object3.getarea();
console.log(`\n area of the rectangle is: ${area}`);

//5.Create a class called Square that extends the Rectangle class and has a sideLength property.
 //Override the getArea method in the Square class to return the area of the square. Create an instance of the Square class and call the getArea method.

 class Square extends Rectangle{
  sideLength = 7;
  getarea(){
  return this.sideLength*this.sideLength;
  };
 }
let object4 = new Square();
 let area1 = object4.getarea();
 console.log(`\n The area pf the new rectangle is: ${area1}`);
 

//6.Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, 
//and a deposit method that takes in an amount and adds it to the balance.
// Create an instance of the BankAccount class and call the deposit method with an amount.

class Bankaccount{
  accountNumber = 24789045;
  accountHolderName = 'Anna';
  balance = 100;
  deposit(amount){

 return amount + this.balance;

  };
}
 let object5 = new Bankaccount();
  let amount2 = object5.deposit(20000);
console.log(`\n the amount is:${amount2}`);



//7.Create a class called Person that has name and email properties, and a sendEmail method that takes in a message and sends an email to the person's email address. 
//Create an instance of the Person class and call the sendEmail method with a message.

class Person1 {
  name = 'Eni';
  email = 'enivasili@gmail.com';
  sendemail(message){
    return message;
  };
}
let object6 = new Person1(); 
 let mess=object6.sendemail(`How are you`);
 console.log(`\n Message from email is : ${mess}`);

//8.Create a class called Product that has name, price, and description properties, and a discount method that takes in a percentage and returns the discounted price. 
//Create an instance of the Product class and call the discount method with a percentage.

class Product{
  name = 'apple';
  price = 2.5;
  description = 'gala';
  discount(price){
    return this.price * 0.9;
  };

}

let object7 = new Product();
let fruit = object7.discount();
console.log(`\n the discount price is:${fruit}`);







