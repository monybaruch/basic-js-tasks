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

var yourBmi = "";

function bmiCalculator(myWeight, myHeight) {
  let bmi = myWeight / (myHeight * myHeight);
  bmi = Math.round(bmi);
  if (bmi > 30) {
    yourBmi = "Your BMI is " + bmi + " you are really fat go for a run";
  } else if (bmi >= 25 && 29.9 <= bmi) {
    yourBmi = "Your BMI is " + bmi + " you are still fat go for a walk";
  } else if (bmi >= 18.5 && 24.9 <= bmi) {
    yourBmi = "Your BMI is " + bmi + " you are not fat so good for you";
  } else {
    yourBmi = "Your BMI is " + bmi + " you are to skinny go eat some KFC";
  }
  return console.log(yourBmi);
}
bmiCalculator(200, 1.9);
