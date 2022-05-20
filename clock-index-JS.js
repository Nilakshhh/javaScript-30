const Second = document.querySelector(".second-hand");
const Minute = document.querySelector(".minute-hand");
const Hour = document.querySelector(".hour-hand");
function setDate()
{
    var date = new Date();
    var sec = date.getSeconds();
    sec = sec*6;
    var min = date.getMinutes();
    min = min*6;
    var hou = date.getHours();
    hou = hou*30;
    Second.style.transform = `rotate(${sec}deg)`
    Minute.style.transform = `rotate(${min}deg)`
    Hour.style.transform = `rotate(${hou}deg)`
    $("h1").text(hou/30 + ":" + min/6 + ":" + sec/6);
}
setInterval(setDate, 1000);