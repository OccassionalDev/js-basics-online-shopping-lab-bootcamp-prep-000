var cart = [];

//Extra functions

//Generates a random price for each item
function createPrice() {
//Variables to set up random price
 var maxCost = 100;
 var minCost = 1;
 var rangeOfPrice = (maxCost+minCost)+1;
 
//Return a random price which will be generated per function call
 return Math.floor((Math.random()*rangeOfPrice)+minCost);
}

//Creates a object for the item
function createItemObject(item) {
  return {
    itemName: item,
    itemPrice: createPrice()
  };
}

//Lists out the objects in the array as a string
function listItems() {
  var currentCart = "In your cart,";
  
  for (let i = 0; i < getCart().length; i++) {
    if (i === 0) {
      currentCart += ` you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice},`; 
    }
    
    else if (i == getCart().length-1) {
      currentCart += ` and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
    }
    
    else {
      currentCart += ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`;
    }
  }
  
  if (getCart().length === 1) {
    currentCart = currentCart.slice(0, currentCart.length-1);
  }
  
  currentCart += ".";
  return currentCart;
}

//Sums the prices of the items in the cart
function sumPrices() {
  var sum = 0;
  for (let i = 0; i < getCart().length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}

//finds the item object in the array
function findItemInCart(itemName) {
  var foundItem;
  
  for (let i = 0; i < getCart.length; i++) {
    if (getCart()[i].itemName === itemName) {
      foundItem = getCart[i];
    }
  }
  
  return foundItem;
}

//finds the index of the given item in the cart
function getIndexOfItem(itemName) {
  var index;
  
  for (let i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {
      index = i;
    }
  }
  return index;
}

//Removes the item from the cart array
function removeCartItem(itemToBeRemoved) {
  
  //Step 1: Get the index of the cart item
  var indexOfItem = getIndexOfItem(itemToBeRemoved);
  
  //Step 2: Remove the item from the cart
  getCart().splice(indexOfItem, 1);
}

//Lab functions
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 
 //Step 1: Create a object for the item plugged in to the function
 var itemObject = createItemObject(item);
 
 //Step 2: Recieve cart array add the item object to the cart array
 getCart().push(itemObject);
 
 //Step 3: Return the message of saying that a item has been added
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
  //Step 1: Check if the cart is empty, if empty return that the cart is empty
  if (!getCart().length) {
    return "Your shopping cart is empty.";
  }
  
  //Step 2: If the cart is not empty, show the items in the cart
  return listItems();
}

function total() {
  // write your code here
  var totalCost = sumPrices();
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  
  //Step 1: Search for the item and store its place
  var itemToBeRemoved = findItemInCart(item);
  
  //Step 2: if the item doesn't exist then return a message, else, remove the item
  if (!itemToBeRemoved) {
    return "That item is not in your cart.";
  }
  
  else {
    removeCartItem(itemToBeRemoved);
  }
}

function placeOrder(cardNumber) {
  // write your code here
  
  //step 1: Check if a single argument is missing, return a message
  if (arguments[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  //Step 2: Empty the array and return a message
  else {
    var chargeTotal = total();
    setCart([]);
    return `Your total cost is $${chargeTotal}, which will be charged to the card ${cardNumber}.`;
  }
}