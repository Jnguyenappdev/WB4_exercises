let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function getSubTotal(lunch) {
  let subtotal = 0;
  for (let i = 0; i < lunch.length; i++) {
    subtotal += lunch[i].price;
  }
  return subtotal;
}

let lunchSubTotal = getSubTotal(lunch);
let lunchTax = lunchSubTotal * .08
let lunchWtax = lunchTax + lunchSubTotal
let lunchTip = lunchWtax * .18
let lunchTotal = lunchTip + lunchWtax

console.log('Subtotal: $', lunchSubTotal.toFixed(2));
console.log('Tax: $' , lunchTax.toFixed(2));
console.log('Tip: $' , lunchTip.toFixed(2));
console.log('Total: $', lunchTotal.toFixed(2));