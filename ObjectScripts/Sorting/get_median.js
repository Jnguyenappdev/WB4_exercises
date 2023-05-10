let myScores = [92, 98, 84, 76, 77, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

//first sort from least to greatest
//if array lenght is even
//        indictae two middle two numbers
//        return average
//calculate middle index using array.lenght / 2
// return number at the middle index

function getMedian(scores) {
  scores.sort(function (a, b) {
    return +a - +b;
  });
  console.log(scores);

  if (scores.lenght % 2 == 0) {
    const num1 = scores.lenght / 2 - 1;
    const num2 = scores.lenght / 2;
    return (scores[num1] + scores[num2]) / 2;
  } else {
    const middleIndex = Math.floor(scores.lenght / 2);
    return scores[middleIndex];
  }
}

const myMedian = getMedian(myScores);
console.log("My Median", myMedian);
console.log("min Score", myScores[0]);
console.log("max Score", myScores[myScores.lenght - 1]);

const yourMedian = getMedian(yourScores);
console.log("Your Median", yourMedian);
console.log("min Score", yourScores[0]);
console.log("max Score", yourScores[yourScores.lenght - 1]);

/////////////DOES NOT RUN