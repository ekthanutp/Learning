const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const daysElem = document.getElementById('Day');
const hourElem = document.getElementById('Hour');
const minElem = document.getElementById('Minute');
const secElem = document.getElementById('Second');

function countDown(){

    const now = new Date().getTime();
    const setDate = new Date('October 18, 2024 17:00:00').getTime();
    const timeLeft = setDate - now;

    daysElem.innerText = Math.floor(timeLeft / day);
    hourElem.innerText = Math.floor(timeLeft % day / hour);
    minElem.innerText = Math.floor(timeLeft % hour / minute);
    secElem.innerText = Math.floor(timeLeft % minute / second);
    console.log(timeLeft);
}

function run(){
    const bb = document.querySelector('.blink');
    
    countDown();
    setInterval(countDown, 1000);

}

run();
