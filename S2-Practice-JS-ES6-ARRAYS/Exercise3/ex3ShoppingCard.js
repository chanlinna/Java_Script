// 1- List of products in the shop : each product having a unique id, name and unit price:
export const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

// 2-  Shopping cart : which contain the items the customer wants to buy and their quantity
// Example : Here the cart contains 2 apples and 1 orange  and the cart amount is 8 dollars
export const SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

/**
 *  TODO  : Complete this function to get the total amount of the current shopping cart.
 * @returns the Shopping cart total amount
 */
export function getCartTotalAmount() {
    let result = 0;
    // Write your code here
    SHOPPING_CART.forEach((item) => {
    let product = PRODUCTS.find((p) => p.id === item.id);
    if(product){
      result += product.price * item.quantity;
    }
});
  return result;
}

/**
 *  TODO  : Complete this function to add a product to the shopping cart
 *
 *  - CASE 1 : if the product id already exists in the cart, just increment its quantity
 *      example :  addProductToCart(1)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 3 }]
 *
 *  - CASE 2 : if the product id does NOT exist in the cart, add a new item, with a quantity 1
 *      example :  addProductToCart(2)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }]
 *
 * @param {*} productId  the product id to add
 */
export function addProductToCart(productId) {
  // Write your code here
  let product = SHOPPING_CART.find((p) => p.id === productId);
  if(product){
    product.quantity++;
  }
  else{
    SHOPPING_CART.push({id: productId, quantity: 1});
  }
}

/**
 *  TODO  : Complete this function to remove a product from the shopping cart
 *
 *  - CASE 1 : if the product id already exists in the cart,  and quantity if >=2    :  just decrement its quantity
 *      example :  removeProductToCart(1)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 1 }]
 *
 *  - CASE 2 : if the product id already exists in the cart,  and quantity is 1    :  remove the item from the card
 *      example :  removeProductToCart(1)    :   [{ id: 1, quantity: 1 }]   ------>   []
 *
 *  - CASE 2 : if the product id does NOT exist : do nothing !
 
 *
 * @param {*} productId  the product id to add
 */
export function removeProductFromCart(productId) {
  // Write your code here
  let product = SHOPPING_CART.find((p) => p.id === productId);
  if(product){
    if(product.quantity > 1){
      product.quantity--;
    }
    else{
      SHOPPING_CART.splice(SHOPPING_CART.indexOf(product, 1));
    }
  }
}

