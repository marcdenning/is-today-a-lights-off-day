'use strict';

let messageTextConstants = require('./message-text.constants');
let isItCloudy = require('./is-it-cloudy.service');

const LAT = process.env.FORECAST_LATITUDE || 35.8815;
const LONG = process.env.FORECAST_LONGITUDE || -78.8460;
const FRIDAY = 5;

function isTodayALightsOffDay(date) {
  let isFriday = date.getDay() === FRIDAY;

  return isItCloudy(LAT, LONG, date)
    .then((isCloudy) => {
      if (isCloudy && isFriday) {
        return messageTextConstants.MAYBE;
      }
      return isFriday ? messageTextConstants.YES : messageTextConstants.NO;
    });
}

module.exports = isTodayALightsOffDay;
