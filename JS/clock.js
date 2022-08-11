const clock = document.querySelector("h2#clock");

function showTime() {
  const date = new Date();

  if (date.getHours() >= 12 && date.getHours() <= 23) {
    //오후

    const Hour = String(date.getHours() % 12);
    const Minute = String(date.getMinutes());
    const Second = String(date.getSeconds());
    clock.innerText = `PM ${Hour.padStart(2, "0")} : ${Minute.padStart(
      2,
      "0"
    )} : ${Second.padStart(2, "0")}`;
  } else {
    //오전

    const Hour = String(date.getHours());
    const Minute = String(date.getMinutes());
    const Second = String(date.getSeconds());
    clock.innerText = `AM ${Hour.padStart(2, "0")} : ${Minute.padStart(
      2,
      "0"
    )} : ${Second.padStart(2, "0")}`;
  }
}

showTime();
setInterval(showTime, 1000);
