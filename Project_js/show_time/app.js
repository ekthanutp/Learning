const txt = document.getElementById("time");

function showTime(){
    const dateTime = new Date() 
    const hours = dateTime.getHours()
    const minutes = dateTime.getMinutes()
    const seconds = dateTime.getSeconds()

    console.log(dateTime);
    txt.innerHTML = 
    `${hours} : 
    ${minutes < 10 ? `0${minutes}`: minutes} :  
    ${seconds < 10 ? `0${seconds}`: seconds}`
}

setInterval(showTime,1000)