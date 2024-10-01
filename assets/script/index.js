const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020"
];

const lightColorsArr = [
    "#D2E0FB",
    "#FF8A8A",
    "#CBE2B5",
    "#6482AD",
    "#987D9A",
    "#FFA62F",
    "#BFF6C3",
    "#FA7070",
    "#DED0B6",
    "#00A9FF"
];

const btnDarkColor = document.querySelector("#btn-changer-dark");
const btnLightColor = document.querySelector("#btn-changer-light");
const body = document.querySelector("body");
const bgHexCode = document.querySelector("#hex-code");

btnDarkColor.onclick = setDarkColor;
btnLightColor.onclick = setLightColor;

function getRandomIndex() {
    return Math.floor(darkColorsArr.length * Math.random());
}

function setDarkColor() {
    const color = darkColorsArr[getRandomIndex()];
    changeBackgroundColor(color);
}

function setLightColor() {
    const color = lightColorsArr[getRandomIndex()];
    changeBackgroundColor(color);
}

function changeBackgroundColor(color) {
    bgHexCode.innerText = color;
    body.style.backgroundColor = color;
}