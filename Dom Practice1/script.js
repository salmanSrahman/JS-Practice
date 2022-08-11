let number = document.querySelector(".number");
let btn = document.querySelector(".btn");
let heading = document.querySelector("h3");
let list = document.querySelector("ul");

btn.addEventListener("click", () => {
  const inputValue = number.value;
  if (Boolean(inputValue - 10)) {
    list.innerHTML = "";
    heading.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      list.innerHTML += `<li>${inputValue} * ${i} = ${inputValue * i}</li>`;
    }
  } else {
    list.innerHTML = "";
    const error = "String value is not possible";
    heading.innerHTML = error;
  }
});
