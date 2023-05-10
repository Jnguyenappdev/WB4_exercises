let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?
// Who has have been in at least 3 films?
// Who has a name that starts with "Bob"?
// HARDER: Which Academy Members have been in a film
// that starts with "A"

for (let i = 0; i < academyMembers.length; i++) {
  let memIDSearch = 187;
  if (academyMembers[i].memID == memIDSearch) {
    console.log(
      "The Acadamey Member with the ID",
      memIDSearch,
      " is ",
      academyMembers[i].name
    );
  }
}
console.log("-------------------------------");
for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].films.length >= 3) {
    console.log("Have been in atleast 3 movies: ", academyMembers[i].name);
  }
}

console.log("-------------------------------");
for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].name.startsWith("Bob")) {
    console.log("The name that starts with Bob: ", academyMembers[i].name);
  }
}
console.log("-------------------------------");
for (let i = 0; i < academyMembers.length; i++) {
  for (let j = 0; j < academyMembers[i].films.length; j++) {
    if (academyMembers[i].films[j].startsWith("A")) {
      console.log(
        "Which Acadamey Member have in a film that starts with A? ",
        academyMembers[i].name, academyMembers[i].films[j]
      );
    }
  }
}
