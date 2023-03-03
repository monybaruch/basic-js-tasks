// building a simple "love calculator"

// let yourName = prompt("what is your name? ");
// let yourLover = prompt("what is your lovers name? ");

// let randomNum = Math.random() * 100 + 1;

// randomNum = Math.floor(randomNum) + 1;
// if (randomNum >= 70) {
//   alert(
//     yourName +
//       " Your love score is " +
//       randomNum +
//       "% and " +
//       yourLover +
//       " loves you"
//   );
// } else if (randomNum >= 69 && randomNum <= 40) {
//   alert(
//     yourName +
//       " Your love score is " +
//       randomNum +
//       "% and " +
//       yourLover +
//       " Hates you"
//   );
// } else {
//   alert(
//     yourName +
//       " Your love score is " +
//       randomNum +
//       "% and " +
//       yourLover +
//       " Hates you and you should kill yourself"
//   );
// }

// BMI Calculator Advanced (IF/ELSE)
// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

// Write a function that outputs (returns) a different message depending on the BMI.

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
// var yourWeight = prompt("enter your weight !");
// var yourHeight = prompt("enter your height !");
// var yourBmi = "";

// function bmiCalculator(myWeight, myHeight) {
//   let bmi = myWeight / (myHeight * myHeight);
//   bmi = Math.round(bmi);
//   if (bmi > 30) {
//     yourBmi = "Your BMI is " + bmi + " you are really fat go for a run";
//   } else if (bmi >= 25 && 29.9 <= bmi) {
//     yourBmi = "Your BMI is " + bmi + " you are still fat go for a walk";
//   } else if (bmi >= 18.5 && 24.9 <= bmi) {
//     yourBmi = "Your BMI is " + bmi + " you are not fat so good for you";
//   } else {
//     yourBmi = "Your BMI is " + bmi + " you are to skinny go eat some KFC";
//   }
//   return alert(yourBmi);
// }
// bmiCalculator(yourWeight, yourHeight);

// leap year challenge :
// Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

// This is how to work out whether if a particular year is a leap year:

// A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.

// e.g. Is the year 2000 a leap year?:

// 2000 ÷ 4 = 500 (Leap)

// 2000 ÷ 100 = 20 (Not Leap)

// 2000 ÷ 400 = 5 (Leap!)

// let leapYear = prompt("enter the year you want to check if it's a leap year! ");

// function YearLeapCalculator(myYear) {
//   if (myYear % 4 === 0) {
//     if (myYear % 100 === 0) {
//       if (myYear % 400 === 0) {
//         alert("The year you chose is a leap year");
//       } else {
//         alert("The year you chose is not a leap year");
//       }
//     } else {
//       alert("The year you chose is a leap year");
//     }
//   } else {
//     alert("The year you chose is not a leap year");
//   }
// }
// YearLeapCalculator(leapYear);

checkUpper();
function checkUpper() {
  let x = prompt("enter your name please!");
  let y = x.slice(0, 1).toUpperCase() + x.slice(1, x.length).toLowerCase();
  if (x == y) {
    alert("you entered a valid name you can continue");
  } else {
    alert(
      "Please and your name again with an upperCase in the beginnig and the rest in lowerCase"
    );
  }
}
