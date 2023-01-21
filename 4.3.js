const calcAvg = (score1, score2, score3) =>
  ((score1 + score2 + score3) / 3).toFixed(2);

const JohnTeamAvg = calcAvg(89, 120, 105); //314
const MikeTeamAvg = calcAvg(116, 94, 123); // 333
const MaryTeamAvg = calcAvg(97, 134, 105); //336

let highestScoreTeam = "";
let highestAverageScore = 0;
if (JohnTeamAvg > MikeTeamAvg && JohnTeamAvg > MaryTeamAvg) {
  highestScoreTeam = "John";
  highestAverageScore = JohnTeamAvg;
} else if (MikeTeamAvg > MaryTeamAvg) {
  highestScoreTeam = "Mike";
  highestAverageScore = MikeTeamAvg;
} else {
  highestScoreTeam = "Mary";
  highestAverageScore = MaryTeamAvg;
}
const output = `the person with highest score is: ${highestScoreTeam} with the average score of: ${highestAverageScore}`;

console.log(output);
