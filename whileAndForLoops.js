// // fizzBuzz with a while loop
// let numbers = [];
// let count = 1;
// function addingNum() {
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       numbers.push("fizzBuzz");
//     } else if (count % 3 === 0) {
//       numbers.push("fizz");
//     } else if (count % 5 === 0) {
//       numbers.push("buzz");
//     } else {
//       numbers.push(count);
//     }
//     count++;
//   }
//   console.log(numbers);
// }
// addingNum();

// 99 bottles of beer challange
// let count = 99;
// function BeerSong() {
//   while (count > 0) {
//     console.log(
//       count +
//         " bottles of beer on the wall, " +
//         count +
//         " bottles of beer Take one down and pass it around, " +
//         (count - 1) +
//         " bottles of beer on the wall! "
//     );
//     count--;
//   }
//   console.log(
//     "No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more , 99 bottles of beer on the wall"
//   );
// }
// BeerSong();
//  fizzBuzz with a for loop
// let numbers = [];

// function addingNum() {
//   for (let count = 1; count < 101; count++) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       numbers.push("fizzBuzz");
//     } else if (count % 3 === 0) {
//       numbers.push("fizz");
//     } else if (count % 5 === 0) {
//       numbers.push("buzz");
//     } else {
//       numbers.push(count);
//     }
//   }
//   console.log(numbers);
// }
// addingNum();

// // fibonacci generator challange
// The Fibonacci Exercise
// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Where every number is the sum of the two previous ones.

// e.g. 0, 1, 1, 2, 3, 5 comes from

// 0 + 1 = 1

// 1 + 1 = 2

// 1 + 2 = 3

// 2 + 3 = 5

// etc.

// Create a function where you can call it by writing the code:

// fibonacciGenerator (n)

// Where n is the number of items in the sequence.

// So I should be able to call:

// fibonacciGenerator(3) and get

// [0,1,1]

// as the output

function fibonacciGenerator(n) {
  let fibonacci = [];
  if (n === 1) {
    fibonacci = [0];
  } else if (n === 2) {
    fibonacci = [0, 1];
  } else {
    fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci.push(
        fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]
      );
    }
  }
  return fibonacci;
}
let fibonacci = fibonacciGenerator(100);
console.log(fibonacci);
// 1 more way to do it without if's:
// function fib(n) {

//   const result = [0, 1];
//   for (var i = 2; i < n; i++) {
//     result.push(result[i-2] + result[i-1]);
//   }
//   return result; // or result[n-1] if you want to get the nth term

// }

// console.log(fib(8));
