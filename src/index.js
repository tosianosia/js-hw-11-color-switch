import './css/common.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const COLOR_SWITCH_DELAY = 1000;
let intervalID = null;
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  refs.startBtn.setAttribute('disabled', '');

  intervalID = setInterval(() => {
    randomChangeColor();
  }, COLOR_SWITCH_DELAY);
}

function onStopBtnClick() {
  clearInterval(intervalID);
  refs.startBtn.removeAttribute('disabled');
}

function randomChangeColor() {
  const maxIndex = colors.length - 1;
  const randomInteger = randomIntegerFromInterval(0, maxIndex);

  document.body.style.backgroundColor = colors[randomInteger];
}
