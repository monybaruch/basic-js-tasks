// // let guestList = ["Jack", "Lara", "Jason", "Moshe", "Viki"];
// // checkUpper();
// // function checkUpper() {
// //   let yourName = prompt("enter your name please!");
// //   let UpperCase =
// //     yourName.slice(0, 1).toUpperCase() +
// //     yourName.slice(1, yourName.length).toLowerCase();
// //   if (UpperCase == yourName) {
// //     if (guestList.includes(yourName)) {
// //       alert("you are invited to the party! ");
// //     } else {
// //       alert("you are not invited to the party");
// //     }
// //   } else {
// //     alert(
// //       "Please and your name again with an upperCase in the beginnig and the rest in lowerCase"
// //     );
// //   }
// // }

// // fizz buzz challenge

// let numbers = [];
// let count = 1;
// function addingNum() {
//   if (count % 3 === 0 && count % 5 === 0) {
//     numbers.push("fizzBuzz");
//   } else if (count % 3 === 0) {
//     numbers.push("fizz");
//   } else if (count % 5 === 0) {
//     numbers.push("buzz");
//   } else {
//     numbers.push(count);
//   }
//   count++;
//   console.log(numbers);
// }
// addingNum();

// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output

// Michael is going to buy lunch today!
let namesArray = ["Moshe", "Bob", "Arthor", "Alina", "Nete"];
function whoPaying(names) {
  let numberOfNames = names.length;
  let randomNamesPosition = Math.floor(Math.random() * numberOfNames);
  let randomName = names[randomNamesPosition];
  alert(randomName + " is going to pay for the lunch today! ");
}
whoPaying(namesArray);
