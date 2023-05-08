const myinfo = {
  name: "Julle Nguyen",
  address: "Candy Cane Lane",
  city: "CandyLand",
  state: "Cavitiy",
  zip: "12345",
};
function printContact(info) {
  console.log(info.name);
  console.log(info.address);
  console.log(info.city + ", " + info.state + " " + info.zip);
}

//invoke function
printContact(myinfo);
