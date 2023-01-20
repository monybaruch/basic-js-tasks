let numSiblings = prompt("How many siblings do you have?");
numSiblings = Number(numSiblings);
// if (numSiblings === 1) {
//   console.log("1 sibling!");
// } else if (numSiblings > 1) {
//   console.log("More than 1 sibling");
// } else if (numSiblings <= 0) {
//   console.log("'No siblings");
// } else {
//   console.log("insert a number please!");
// }
const output =
  numSiblings === 1 ? "one bro" : numSiblings < 1 ? "no bro" : "many bro";
console.log(output);
