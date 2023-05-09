let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];
products.push({ product: "Fruit Snacks", price: 2.5 });
products.push({ product: "Caramel Filled M&Ms", price: 2.89 });
products.push({ product: "Kit-Kat", price: 2.5 });
products.push({ product: "Reeses", price: 2.25 });
products.push({ product: "Gummy Bears", price: 5.79 });
products.push({ product: "Sour Patch Kids", price: 3.5 });

console.log(products);
console.log("-------------------------------");

for (let i = 0; i < products.length; i++) {
  let priceLimit = "4.00"
  if (products[i].price < priceLimit) {
    console.log("Candies that cost less than $", priceLimit, " is ", products[i].product, products[i].price.toFixed(2));
  }
}
console.log("-------------------------------");
for (let i = 0; i < products.length; i++) {
  let str = products[i].product;
  let substr = "M&M";
  if (str.includes(substr)) {
    console.log(" Candies with ", substr ," in its name: ", products[i].product );
  }
}
console.log("-------------------------------");
for (let i = 0; i < products.length; i++) {
    let searchCandyName = "Swedish Fish"
  if (products[i].product == searchCandyName) {
    console.log("Yes, we carry Swedish Fish");
  }
}
