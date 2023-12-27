import { YES, NO, MAYBE } from './message-text.constants.js';

const FRIDAY = 5;

export default function answerFactory(LAT, LONG, isItCloudy) {
  return function isItALightsOffDay(date) {
    let isFriday = date.getDay() === FRIDAY;

    return isItCloudy(LAT, LONG)
      .then((isCloudy) => {
        if (isCloudy && isFriday) {
          return MAYBE;
        }
        return isFriday ? YES : NO;
      });
  };
}
