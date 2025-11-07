const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');

let showRedLight = true;
let showYellowLight = false;
let showGreenLight = false;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startlight() {
    await delay(5000);
    redLight.classList.add('hide');
    yellowLight.classList.remove('hide');
    await delay(2000);
    yellowLight.classList.add('hide');
    greenLight.classList.remove('hide');
    await delay(2000);
    greenLight.classList.add('hide');
    redLight.classList.remove('hide');
}

startlight();

setInterval(startlight, 10000);