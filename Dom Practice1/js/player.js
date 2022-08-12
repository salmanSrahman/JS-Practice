const playerHeading = document.querySelector(".playerHeading");
const player1 = document.querySelector(".player1");
const player1btn = document.querySelector(".player1btn");
const player2 = document.querySelector(".player2");
const player2btn = document.querySelector(".player2btn");

player1btn.addEventListener("click", () => {
  const player1Value = player1.value;
  console.log(player1Value);

  if (Boolean(player1Value - 10)) {
    alert("Value is ok");
  } else {
    console.log("String is not possible");
  }
});
