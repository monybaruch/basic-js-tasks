let guestList = ["Jack", "Lara", "Jason", "Moshe", "Viki"];
checkUpper();
function checkUpper() {
  let yourName = prompt("enter your name please!");
  let UpperCase =
    yourName.slice(0, 1).toUpperCase() +
    yourName.slice(1, yourName.length).toLowerCase();
  if (UpperCase == yourName) {
    if (guestList.includes(yourName)) {
      alert("you are invited to the party! ");
    } else {
      alert("you are not invited to the party");
    }
  } else {
    alert(
      "Please and your name again with an upperCase in the beginnig and the rest in lowerCase"
    );
  }
}
