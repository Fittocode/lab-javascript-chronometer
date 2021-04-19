var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var centiDec = document.getElementById('centiDec');
var centiUni = document.getElementById('centiUni');
var splitList = document.querySelector('#splits');

function printTime() {
  secUni.innerHTML = Math.floor(chronometer.setSeconds() % 10);
  secDec.innerHTML = Math.floor(chronometer.setSeconds() / 10);
  centiUni.innerHTML = Math.floor(chronometer.setCentiseconds() % 10);
  centiDec.innerHTML = Math.floor(chronometer.setCentiseconds() / 10);
  minUni.innerHTML = Math.floor(chronometer.setMinutes() % 10);
  minDec.innerHTML = Math.floor(chronometer.setMinutes() / 10);
}

function printSplitTime() {
  return (
    minDec.innerHTML +
    '' +
    minUni.innerHTML +
    ':' +
    secDec.innerHTML +
    '' +
    secUni.innerHTML +
    ':' +
    centiDec.innerHTML +
    '' +
    centiUni.innerHTML
  );
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML == 'START') {
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList = 'btn stop';

    btnRight.innerHTML = 'SPLIT';
    btnRight.classList = 'btn split';

    chronometer.startClick();
    setInterval(function () {
      printTime();
    }, 10);
  } else {
    btnLeft.innerHTML = 'START';
    btnLeft.classList = 'btn start';
    chronometer.stopClick();

    btnRight.innerHTML = 'RESET';
    btnRight.classList = 'btn reset';
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML == 'RESET') {
    // resets the counter.
    chronometer.resetClick();
    // removing the split list.
    var list = document.querySelectorAll('li');
    for (var i = 0; i < list.length; i++) {
      splitList.removeChild(list[i]);
    }
  } else {
    // create list in the split
    var list = document.createElement('li');
    list.innerHTML = printSplitTime();
    splitList.appendChild(list);
  }
});
