const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekday = document.querySelector(".day span");
const utcTime = document.querySelector(".time span");

const date = new Date();
weekday.innerHTML = weekdays[date.getDay()];
utcTime.innerHTML = Date.now();
