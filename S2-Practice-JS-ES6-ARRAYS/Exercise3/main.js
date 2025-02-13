import { PRODUCTS } from "./ex3ShoppingCard.js";
import { SHOPPING_CART } from "./ex3ShoppingCard.js";
import { getCartTotalAmount } from "./ex3ShoppingCard.js";
import { addProductToCart } from "./ex3ShoppingCard.js";
import { removeProductFromCart } from "./ex3ShoppingCard.js";

// test 1  -
console.log(getCartTotalAmount()); //  Shoud be  8

// test 2  -
addProductToCart(1);
console.log(SHOPPING_CART); //  Shoud be    [{"id":1,"quantity":3},{"id":3,"quantity":1}]

// test 3  -
addProductToCart(2);
console.log(SHOPPING_CART); //  Shoud be    [{"id":1,"quantity":3},{"id":3,"quantity":1},{"id":2,"quantity":1}]

// test 4  -
removeProductFromCart(1);
console.log(SHOPPING_CART); //  Shoud be    [{"id":1,"quantity":2},{"id":3,"quantity":1},{"id":2,"quantity":1}]

// test 5  -
removeProductFromCart(2);
console.log(SHOPPING_CART); //  Shoud be    [{"id":1,"quantity":2},{"id":3,"quantity":1}]
