'use strict';

let messageTextConstants = require('./message-text.constants');

const FRIDAY = 5;

function answerFactory(LAT, LONG, isItCloudy) {
  return function isTodayALightsOffDay(date) {
    let isFriday = date.getDay() === FRIDAY;

    return isItCloudy(LAT, LONG)
      .then((isCloudy) => {
        if (isCloudy && isFriday) {
          return messageTextConstants.MAYBE;
        }
        return isFriday ? messageTextConstants.YES : messageTextConstants.NO;
      });
  };
}

module.exports = answerFactory;
