/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let totalPaid = 30;
const cherry = {
  name: "Cherry",
  price: 10,
  quantity: 0,
  productId: 1,
  image: "../images/cherry.jpg"
}

const orange = {
  name: "Orange",
  price: 15,
  quantity: 0,
  productId: 2,
  image: "../images/orange.jpg"
}

const strawberry = {
  name: "Strawberry",
  price: 3,
  quantity: 0,
  productId: 3,
  image: "../images/strawberry.jpg"
}
products[0] = cherry;
products[1] = orange;
products[2] = strawberry;
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = []
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId){
  switch (productId){
    case 1:
      cherry.quantity += 1;
      cart += cherry;
      break;
    case 2:
      orange.quantity += 1;
      cart += orange;
      break;
    case 3:
      strawberry.quantity += 1;
      cart += strawberry;
      break;
    default:
      console.log("Invalid input")
      break;
  }
  
      

}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId){
  switch (productId){
    case 1:
      cherry.quantity += 1;
      break;
    case 2:
      orange.quantity += 1;
      break;
    case 3:
      strawberry.quantity += 1;
      break;
    default:
      console.log("Invalid input")
  }
  
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){
  switch (productId){
    case 1:
      cherry.quantity -= 1;
      if (cherry.quantity === 0) {
        cart.removeProductFromCart(1)
      }
      break;
    case 2:
      orange.quantity -= 1;
      if (orange.quantity === 0) {
        cart.removeProductFromCart(2)
      }
      break;
    case 3:
      strawberry.quantity -= 1;
      if (strawberry.quantity === 0) {
        cart.removeProductFromCart(3)
      }
      break;
    default:
      console.log("Invalid input")
      break;
  }
}

function removeProductFromCart(productId){
  switch (productId){
    case 1:
      cherry.quantity = 0;
      break;
    case 2:
      orange.quantity = 0;
      break;
    case 3:
      strawberry.quantity = 0;
      break;
    default:
      console.log("Invalid input")
      break;
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function cartTotal(){
  let sum = 0;
  for(let i=0;i<3;i++){
    sum+=(cart[i].price)*(cart[i].quantity);
  }
  return sum;
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart=[];
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){
  return totalPaid - amount;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
