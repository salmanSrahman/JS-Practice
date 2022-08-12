let counter = 0;
const counterValue = document.querySelector(".counterValue");


function counterUp() {
  counter++;
  counterValue.innerHTML = counter;
  if (counter == counterValue.dataset.number) {
    clearInterval(stop);
  }
}

let stop = setInterval(() => {
  counterUp();
}, counterValue.dataset.time);
