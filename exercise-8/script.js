function updateTime() {
    let hourElem = document.getElementById("hour");
    let minutesElem = document.getElementById("minutes");
    let secondsElem = document.getElementById("seconds");
  
    let today = new Date();
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes();
    let thisSecond = today.getSeconds();
  
    thisHour = thisHour < 10 ? "0" + thisHour : thisHour;
    thisMinute = thisMinute < 10 ? "0" + thisMinute : thisMinute;
    thisSecond = thisSecond < 10 ? "0" + thisSecond : thisSecond;
  
    hourElem.textContent = thisHour;
    minutesElem.textContent = thisMinute;
    secondsElem.textContent = thisSecond;

}

setInterval(updateTime, 1000);