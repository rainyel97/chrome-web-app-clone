const clock = document.querySelector("h2#clock");
//시간단위 변수 설정하기
const day = (24 * 60 * 60 * 1000);
const hour = (60 * 60 * 1000);
const minute = (60 * 1000);
const second = 1000;


function showTime() {
    const date = new Date();
    const christmas = new Date(2022, 11, 25);//월은 0부터 시작함
    const remainTime = christmas - date;//Time difference
    
    
    const remainDay = String(Math.floor(remainTime / day));
    const remainHour = String(Math.floor((remainTime % day) / hour)); 
    const remainMinute = String(Math.floor((remainTime % hour) / minute));
    const remainSecond = String(Math.floor((remainTime % minute) / second));
    
    clock.innerText = `${remainDay.padStart(2, "0")}d ${remainHour.padStart(2, "0")}h ${remainMinute.padStart(2, "0")}m ${remainSecond.padStart(2, "0")}s`;
}

showTime();
setInterval(showTime , 1000);


