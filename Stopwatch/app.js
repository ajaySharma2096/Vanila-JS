// query selectors
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const milliseconds = document.querySelector('#milliseconds');
const startTimerBtn = document.querySelector('.start-timer');
const stopTimerBtn = document.querySelector('.stop-timer');
const resetTimerBtn = document.querySelector('.reset-timer');

// event listeners
let hourValue = 0;
let minuteValue = 0;
let secondValue = 0;
let millisecondsValue = 0;
let timer = false;

// start btn event listener
startTimerBtn.addEventListener('click', () => {
    timer = true;
    startTimer()
})

// stop btn event listener
stopTimerBtn.addEventListener('click', () => {
    timer = false;
})

// reset btn event listener
resetTimerBtn.addEventListener('click', () => {
    timer = false;
    hourValue = 0
    minuteValue = 0
    secondValue = 0
    millisecondsValue = 0
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milliseconds.innerHTML = '00';
})

// functions

// start timer handler
function startTimer() {
    if (timer) {
        millisecondsValue++;
            if (millisecondsValue===100) {
                secondValue++;
                millisecondsValue=0;
            }
            if (secondValue===60) {
                minuteValue++;
                secondValue=0;
            }
            if (minuteValue===60){
                hourValue++;
                minuteValue=0;
            }
        let hrString=hourValue;
        let minString=minuteValue;
        let secString=secondValue;
        let msString=millisecondsValue;

        // add 0 before the value if the value is less then 10, like 09, 08, 07 .....
        if(hourValue<10) hrString = '0' + hrString;
        if(minuteValue<10) minString = '0' + minString;
        if(secondValue<10) secString = '0' + secString;
        if(millisecondsValue<10) msString = '0' + msString;

        // set the values of hr, min, sec and ms to the UI
        hours.innerHTML = hrString;
        minutes.innerHTML = minString;
        seconds.innerHTML = secString;
        milliseconds.innerHTML = msString;

        // add a settimeout and wait for 10 ms and again call the start timer function
        setTimeout(startTimer, 10);
    }
}