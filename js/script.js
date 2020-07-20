window.addEventListener('load', init);

var rangeRed = document.querySelector('#rangeRed');
var rangeGreen = document.querySelector('#rangeGreen');
var rangeBlue = document.querySelector('#rangeBlue');
var colorR = document.querySelector('#colorR');
var colorG = document.querySelector('#colorG');
var colorB = document.querySelector('#colorB');
var swapColor = document.querySelector('.swapColor');
//const swapColorHex = document.querySelector('#swapColorHex > p');


rangeRed.addEventListener('input', setColor);
rangeGreen.addEventListener('input', setColor);
rangeBlue.addEventListener('input', setColor);

function init() {
  console.log("Carrega Página.");
  setColor();
}

function setColor() {
  colorR.value = rangeRed.value;
  colorG.value = rangeGreen.value;
  colorB.value = rangeBlue.value;
  swapColor.setAttribute('style', `background-color: rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`);
  //swapColorHex.innerHTML = swapColor;
}