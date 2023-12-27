import { YES, NO, MAYBE } from './message-text.constants.js';

const FRIDAY = 5;

export default function answerFactory(LAT, LONG, isItCloudy) {
  return async function isItALightsOffDay(date) {
    let isFriday = date.getDay() === FRIDAY;

    const isCloudy = await isItCloudy(LAT, LONG);
    
    if (isCloudy && isFriday) {
      return MAYBE;
    }
    return isFriday ? YES : NO;
  };
}
