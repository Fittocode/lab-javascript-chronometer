class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    var that = this;
    console.log(this);
    this.IntervalId = setInterval(function () {
      that.currentTime += 1 / 33;
      that.setTime();
    }, 1000 / 33);
  }
  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  setCentiseconds() {
    return (this.currentTime * 100) % 100;
  }

  twoDigitsNumber(a) {
    return ('0' + a.toString()).substring(-2);
  }

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var centiSeconds = this.twoDigitsNumber(this.setCentiseconds());

    return minutes + seconds;
  }

  stopClick() {
    clearInterval(this.IntervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
}
