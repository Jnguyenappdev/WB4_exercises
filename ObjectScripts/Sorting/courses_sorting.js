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

// sort by title

//use a or b but can be anything
//ben's  demo of exercise

// the general bases

// function sortCourses(a, b) {
//   const IN_ORDER = "in_order";            will be numbers  -1
//   const SAME = "same";                    will be numbers  0
//   const OUT_OF_ORDER = "out_of_order";    will be numbers  1

//   if (a.Title < b.Title) {
//     return IN_ORDER;
//   }
//   if (b.Title < a.Title) {
//     return OUT_OF_ORDER;
//   }
//   return SAME;
// }

// to make decending inseat of ascending: you can reverse sort by chaning the return values 
//       or change the condition by changing the signs

//courses.sort : compares and can pass in function at which could loop over them
courses.sort(function (a, b) {
  if (a.Title < b.Title) {
    return -1;
  } else if (a.item == b.item) {
    return 0;
  } else {
    return 1;
  }
});

let numCourses = courses.length;
for (let i = 0; i < numCourses; i++) {
  console.log(courses[i].Title);
}
