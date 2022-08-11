let number = document.querySelector(".number");
let btn = document.querySelector(".btn");
let heading = document.querySelector("h3");
let list = document.querySelector("ul");

btn.addEventListener("click", () => {
  const inputValue = number.value;
  if (Boolean(inputValue - 10) == false) {
    list.innerHTML = "";
    const error2 = "String value is not possible";
    heading.innerHTML = error2;
  } else if (inputValue === "") {
    list.innerHTML = "";
    const error1 = "Empty value is not possible";
    heading.innerHTML = error1;
  } else {
    heading.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      list.innerHTML += `<li>${inputValue} * ${i} = ${inputValue * i}</li>`;
    }
  }
});
