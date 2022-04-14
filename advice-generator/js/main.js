window.onload = getAdvice;
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(resp => resp.json())
    .then(resp => {
      let id = document.querySelector(".advice__id");
      let advice = document.querySelector(".advice__text");
      id.innerText = resp.slip.id;
      advice.innerText = resp.slip.advice;
    });
}

document.querySelector(".dice").addEventListener("click", getAdvice);
