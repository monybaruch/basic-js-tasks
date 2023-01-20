let testScore = prompt("Enter your test score : ");

let result =
  testScore <= 64
    ? "f"
    : testScore >= 65 && testScore <= 69
    ? "d"
    : testScore >= 70 && testScore <= 79
    ? "c"
    : testScore >= 80 && testScore <= 89
    ? "b"
    : "a";

console.log(result);
