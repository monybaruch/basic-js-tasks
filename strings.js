// // let Message = "Hello";
// // alert(Message + " there, " + Name);
// let yourName = prompt("enter your name please!");

// let message = prompt("enter a message here!");

// let messageUnder20 = message.slice(0, 20);
// console.log(message);

// alert(
//   "Hello " +
//     yourName +
//     " you have written " +
//     message.length +
//     " letters " +
//     " you have left " +
//     (280 - message.length) +
//     " out of 280 letters"
// );

// alert(
//   "your massage is " + messageUnder20 + " and it will be cut if its to long!"
// );

// short version

// alert(prompt("your massage is ").slice(0, 20));

// using upper case and slice together and lenght

let yourName = prompt("enter your name please!");

yourUpperName =
  yourName.slice(0, 1).toUpperCase() +
  yourName.slice(1, yourName.length).toLowerCase();

alert("Hello " + yourUpperName);
