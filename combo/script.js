const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let gameplay = false;
let score = 0;
button.addEventListener("click", function () {
  if (!gameplay) {
    gameplay = true;
    gameArea.innerHTML = "";
    message.innerHTML = "اعداد را حدس بزنید";
    Maker();
    score = 0;
    button.innerHTML = "بررسی اعداد";
    document.querySelector(".count").style.display = "none";
    document.querySelector(".help").style.display = "block";
  } else {
    const numbers = document.querySelectorAll(".numb");
    score++;
    message.innerHTML = "تعداد حدس زدن شما :" + score;
    let Wincondition = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].corect) {
        numbers[i].style.background = "green";
        numbers[i].style.color = "white";
        Wincondition++;
      } else {
        let color = numbers[i].value < numbers[i].corect ? "blue" : "red";
        numbers[i].style.background = color;
        numbers[i].style.color = "white";
      }
      if (Wincondition == numbers.length) {
        GameEnd();
      }
    }
  }
});
function Maker() {
  let count = document.querySelector(".count").value;
  for (let x = 0; x < count; x++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.classList.add("numb");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.order = x;
    el.style.width = "50px";
    el.style.fontSize = "30px";
    el.corect = Math.floor(Math.random() * 10);
    el.value = 0;
    gameArea.appendChild(el);
  }
}
function GameEnd() {
  message.innerHTML =
    "شما توانستید در " + score + " مرتیه اعداد را درست حدس بزنید";
  gameplay = false;
  button.innerHTML = "شروع دوباره";
}
