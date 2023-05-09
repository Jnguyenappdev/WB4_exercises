// When does the PROG200 course start?
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

let numItems = courses.length;
for (let i = 0; i < numItems; i++) {
  let searchCourseId = "PROG200";
  if (courses[i].CourseId == searchCourseId) {
    console.log("The start date is " + courses[i].StartDate);
  }
}
console.log("-------------------------------");
for (let i = 0; i < numItems; i++) {
  let searchTitle = "PROJ500";
  if (courses[i].CourseId == searchTitle) {
    console.log("The title of the course is " + courses[i].Title);
  }
}
console.log("-------------------------------");
for (let i = 0; i < numItems; i++) {
  let feeLimit = 50;
  if (courses[i].Fee <= feeLimit) {
    console.log(
      "The titles of the courses that cost $50 or less are:",
      courses[i].Title
    );
  }
}
console.log("-------------------------------");
for (let i = 0; i < numItems; i++) {
  let searchLoco = "Classroom 1";
  if (courses[i].Location == searchLoco) {
    console.log("The classes that meet in Classroom 1 are: ", courses[i].Title);
  }
}
