const clock = document.querySelector("h2#clock");

function showTime() {
  const date = new Date();

  if (date.getHours() < 13) {
    const Hour = String(date.getHours());
    const Minute = String(date.getMinutes());
    const Second = String(date.getSeconds());
    clock.innerText = `오전 ${Hour}시 ${Minute.padStart(
      2,
      "0"
    )}분 ${Second.padStart(2, "0")}초`;
  } else {
    const Hour = String(date.getHours() % 12);
    const Minute = String(date.getMinutes());
    const Second = String(date.getSeconds());
    clock.innerText = `오후 ${Hour}시 ${Minute.padStart(
      2,
      "0"
    )}분 ${Second.padStart(2, "0")}초`;
  }
}

showTime();
setInterval(showTime, 1000);
