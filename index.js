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
    console.log (`In your cart, you have ${getItemAndPrice(0)}.`);
  } else if (cart.length === 2) {
    console.log (`In your cart, you have ${getItemAndPrice(0)} and ${getItemAndPrice(1)}.`);
  }else if(cart.length > 0) {
    var string = '';
    for(var i = 0; i < cart.length - 1; i++) {
      string += ` ${getItemAndPrice(i)},`;
    }
    string += ` and ${getItemAndPrice(cart.length - 1)}.`;
    console.log(`In your cart, you have${string}`);
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function getItemAndPrice(i) {
  return `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];  
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
