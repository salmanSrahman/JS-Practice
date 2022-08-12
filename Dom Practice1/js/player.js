let playerHeading = document.querySelector(".playerHeading");
let player1 = document.querySelector(".player1");
let player1btn = document.querySelector(".player1btn");
let player1Error = document.querySelector(".player1Error");
let player2 = document.querySelector(".player2");
let player2btn = document.querySelector(".player2btn");
let player2Error = document.querySelector(".player2Error");


player1btn.addEventListener("click", () => {
  let player1Value = player1.value;
  if (Boolean(player1Value - 10) && player1Value != "") {
    if (player1Value > 10) {
      player1Error.innerHTML = "Please Give A Value Less Then 10";
    } else {
      player1Error.innerHTML = "";
      playerHeading.innerHTML = "Player 2";
      player1.style.display = "none";
      player1btn.style.display = "none";
      player2.style.display = "inline-block";
      player2btn.style.display = "inline-block";
    }
  } else {
    player1Error.innerHTML = "Please Give A Number";
  }
});
