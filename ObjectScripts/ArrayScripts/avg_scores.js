//declare two arrays of exam scores
//pass it my scores. catch the return value and display it yo my average

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.lenght; i++) {
    sum += scores[i];
  }
  let average = sum / scores.lenght;

  return average;
}

console.log("My average score " + getAverage(myScores) + "%");
console.log("Your average score " + getAverage(yourScores) + "%");
