let time = document.querySelector("#time");

setInterval(() => {
  const time2 = new Date().toLocaleTimeString();
  time.innerHTML = time2;
}, 1000);

const date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
const year = document.querySelector("#year");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const yearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const cal = new Date();
date.innerHTML = (cal.getDate() < 10 ? "0" : "") + cal.getDate();
day.innerHTML = weekDays[cal.getDay()];
month.innerHTML = yearMonths[cal.getMonth()];
year.innerHTML = cal.getFullYear();
