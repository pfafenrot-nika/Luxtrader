function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let time = clock.querySelector('.countdown-time');
 
  function updateClock() {
    let t = getTimeRemaining(endtime);
 
    let daysTime = t.days;
    let hoursTime = ('0' + t.hours).slice(-2);
    let minutesTime = ('0' + t.minutes).slice(-2);
    let secondsTime = ('0' + t.seconds).slice(-2);
 
    time.innerHTML = daysTime + ':' + hoursTime + ':' + minutesTime + ':' + secondsTime;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
 
let deadlineOne = new Date(Date.parse(new Date()) + 05 * 23 * 35 * 58 * 1000); // for endless timer
let deadlineTwo = new Date(Date.parse(new Date()) + 11 * 22 * 50 * 60 * 1000); // for endless timer
let deadlineThree = new Date(Date.parse(new Date()) + 12 * 24 * 38 * 46 * 1000); // for endless timer
let deadlineFour = new Date(Date.parse(new Date()) + 15 * 14 * 18 * 39 * 1000); // for endless timer
initializeClock('countdown-1', deadlineOne);
initializeClock('countdown-2', deadlineTwo);
initializeClock('countdown-3', deadlineThree);
initializeClock('countdown-4', deadlineFour);