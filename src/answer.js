const FRIDAY = 5;

function isTodayALightsOffDay() {
  var today = new Date();

  return today.getDay() === FRIDAY;
}

module.exports = isTodayALightsOffDay;
