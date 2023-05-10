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

let numProducts = products.length;

products.sort(function (a, b) {
  if (a.product < b.product) {
    return -1;
  } else if (a.product == b.product) {
    return 0;
  } else {
    return 1;
  }
});

for (let i = 0; i < numProducts; i++) {
  console.log(products[i].product);
}

console.log("-------------------------------");
products.sort(function (a, b) {
  if (a.price > b.price) {
    return -1;
  } else if (a.price == b.price) {
    return 0;
  } else {
    return 1;
  }
});

for (let i = 0; i < numProducts; i++) {
  console.log(products[i].product, products[i].price.toFixed(2));
}
