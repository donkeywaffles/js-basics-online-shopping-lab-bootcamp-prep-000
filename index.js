var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 101)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)  
  }else if(cart.length > 0) {
    var string = '';
    for(var i = 0; i < cart.length - 1; i++) {
      string += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`;
    }
    string += ` and ${Object.keys(cart[cart.length - 1])} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])]}.`
    console.log(`In your cart, you have${string}`);
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function getItemAndPrice(index) {
  return 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
