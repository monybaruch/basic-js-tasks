// objects and constructor functions
let houseKeeper1 = {
  yearsOfExp: 15,
  name: "Jane",
  cleaningRep: ["lobby", "bedroom", "bathroom"],
};

function HouseKeeper(yearsOfExp, name, cleaningRep) {
  this.yearsOfExp = yearsOfExp;
  this.name = name;
  this.cleaningRep = cleaningRep;
}

let houseKeeper2 = new HouseKeeper(25, "olga", [
  "something1",
  "something2",
  "something3",
]);

let houseKeeper3 = new HouseKeeper(22, "alina", [
  "something4",
  "something5",
  "something6",
]);

console.log(HouseKeeper);

console.log(houseKeeper3.name);
