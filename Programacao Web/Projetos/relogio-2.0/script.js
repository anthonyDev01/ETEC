const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const seconsdsProgress = ((seconds / 60) * 360) + 90;
  const minsProgress = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hoursProgress = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;

  secondHand.style.transform = `rotate(${seconsdsProgress}deg)`;
  minHand.style.transform = `rotate(${minsProgress}deg)`;
  hourHand.style.transform = `rotate(${hoursProgress}deg)`;
}

function dayWeek() {
  var daysContainer = document.getElementById("date");

  var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  var day = new Date();

  daysContainer.innerHTML = `${days[day.getDay()]} ${day.getDate()}`
}

setInterval(setDate, 1000);
setInterval(dayWeek, 1000);

setDate();
dayWeek();