const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
const color1 = getRandomRGB();
const color2 = getRandomRGB();
const color3 = getRandomRGB();

const colorString = `rgb(${color1}, ${color2}, ${color3})` ;

body.style.background = colorString;
color.innerText = colorString;
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}