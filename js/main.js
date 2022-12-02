onload = () => {
  timeZone();
  dateZone();
};

const timeZone = () => {
  let time = new Date().toLocaleTimeString();
  const timeDiv = document.getElementById("time");
  timeDiv.innerHTML = time;

  setInterval(timeZone, 1000);
};

const dateZone = () => {
  const date = new Date();
  const dateDiv = document.getElementById("date");

  dateDiv.innerHTML = date.toDateString();
};
