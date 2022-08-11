let counter = 0;
const counterValue = document.querySelector(".counterValue");
function counterUp() {
  counter++;
  counterValue.innerHTML = counter;
  if (counter == 10) {
    clearInterval(stop);
  }
}

let stop = setInterval(() => {
  counterUp();
}, 1000);
