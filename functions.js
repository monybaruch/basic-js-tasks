//https://stanford.edu/~cpiech/karel/ide.html

// function main(){
//   moveIt();
//   moveIt2();
//   moveIt2();
//   moveIt2();
// }

// function moveIt(){
//   putBeeper();
//   move();
//   turnLeft();
//   move();
//   putBeeper();
// }

// function moveIt2(){
//   turnRight();
//   move();
//   turnLeft();
//   move();
//   putBeeper();
// }
//
// Life in Weeks Coding Exercise
// I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.

// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

// It will take your current age as the input and console.logs a message with our time left in this format:

// You have x days, y weeks, and z months left.

// Where x, y and z are replaced with the actual calculated numbers.

// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

// IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

// Example Input

// e.g. If you are 56 years old:

// lifeInWeeks(56)
// Example Output

//  You have 12410 days, 1768 weeks, and 408 months left
// function LifeLeft(Age) {
//   let yearsRemaining = 90 - Age;
//   let YourLifeinDays = yearsRemaining * 365;
//   let YourLifeinWeekss = yearsRemaining * 52;
//   let YourLifeinMonths = yearsRemaining * 12;
//   console.log(
//     "You have " +
//       YourLifeinDays +
//       " days, " +
//       YourLifeinWeekss +
//       " and , " +
//       YourLifeinMonths +
//       " left"
//   );
//   console.log(yearsRemaining);
// }
// LifeLeft(34);

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.

*/

function bmiCalculator(myWeight, myHeight) {
  let bmi = myWeight / (myHeight * myHeight);
  return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
alert("your bmi is " + bmi);
