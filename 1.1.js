// let Message = "Hello";
// alert(Message + " there, " + Name);
let yourName = prompt("enter your name please!");

let message = prompt("enter a message here!");

console.log(message);

alert(
  "Hello " +
    yourName +
    " you have written " +
    message.length +
    " letters " +
    " you have left " +
    (280 - message.length) +
    " out of 280 letters"
);
