let timeUP = document.getElementById("timeup");

/**
 *
 * @param {Number} duration
 * @param {Object} display  // i don't what in DOM realm
 */
function startTimer(duration, display) {
  let timer = duration;
  let minutes, seconds;
  let res = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    // console.log("the minute is " + minutes);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      timeUP.textContent = "time up! time for rest";
      clearInterval(res);
    }
    // console.log(duration);
  }, 1000);
}

window.onload = function () {
  let inputUser = prompt("how much time 60*??");
  let display = document.querySelector("#time");
  startTimer(60 * inputUser, display);
};
