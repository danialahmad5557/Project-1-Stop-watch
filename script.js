let interval;
let time = { minutes: 0, seconds: 0, milliseconds: 0 };
let startButton = document.querySelector('.start');

function start() {
  if (startButton.disabled) return;
  startButton.disabled = true;
  interval = setInterval(() => {
    time.milliseconds += 10;
    if (time.milliseconds >= 1000) {
      time.milliseconds = 0;
      time.seconds++;
      if (time.seconds >= 60) {
        time.seconds = 0;
        time.minutes++;
      }
    }
    document.querySelector('.minutes').innerText = format(time.minutes);
    document.querySelector('.seconds').innerText = format(time.seconds);
    document.querySelector('.milliseconds').innerText = time.milliseconds;
  }, 10);
}

function pause() {
  clearInterval(interval);
  startButton.disabled = false;
}

function reset() {
  clearInterval(interval);
  time = { minutes: 0, seconds: 0, milliseconds: 0 };
  document.querySelector('.minutes').innerText = '00';
  document.querySelector('.seconds').innerText = '00';
  document.querySelector('.milliseconds').innerText = '000';
  startButton.disabled = false;
}

function format(num) {
  return num < 10 ? '0' + num : num;
}
