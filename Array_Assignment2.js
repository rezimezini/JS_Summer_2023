let product = [
    { name:"Avocado", price:100, quantity:5},
     {name:'Dragon fruit',price:20, quantity :3},
     {name:'Bell paper',price :15, quantity: 7},
     {name:'Coconut fruit', price:25,quantity:2},
     {name:'Watermelon', price: 30, quantity:4}
 ];

 //1-b Loop through the array using a for loop and print out the name and price of each product.
 
 //let i=0;
 //while (i<product.length) {
 //console.log(`\n Product:${product[i].name}: price ${product[i].price}`);
   // i++;}

   // let i= 0;
 //do { console.log(`\n product${product[i].name}:price ${product[i].price}`);
   //i++;
 //} while (i< product.length);


  // 1-c Use a while loop to find the product with the lowest price. Print out the name and price of the product.
 
  let i = 0;
  let j=i+1;
  for (i=0;i<product.length;i++){
    if (product[i].price<product[j].price){
        console.log(`Cheapest product is ${product[i].name} and price is ${product[i].price}`);
    }
  }
 
// 1.e Use a for of loop to calculate the total value of all products in the array.
let sum=0;
for (let total of product){
    sum +=total.price;
}

console.log(`\n The total sum is :  ${sum}`);

//1.f  Use a for in loop to print out all the properties of each product in the array.

for (const key in product) {
  
    console.log(`\n Product ${product[key].name }:Price is ${product[key].price}:Quantity is ${product[key].quantity} `);  
}