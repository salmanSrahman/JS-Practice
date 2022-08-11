let number = document.querySelector(".number");
let btn = document.querySelector(".btn");
let heading = document.querySelector("h3");

btn.addEventListener("click", () => {
  const inputValue = number.value;
  console.log(inputValue - 10);

  //   for (let i = 1; i <= 10; i++) {
  //     console.log(inputValue + "*" + i + "=" + inputValue * i);

  //   }
});
