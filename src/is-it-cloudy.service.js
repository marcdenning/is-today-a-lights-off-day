'use strict';

let debug = require('debug')('is-it-cloudy');
let axios = require('axios');

const DARKSKY_API_URL = 'https://api.darksky.net/forecast';
const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
const MIN_CLOUD_COVER = 0.4;

function isItCloudy(latitude, longitude, date) {
  let time = date.getTime() / 1000;
  let url = `${DARKSKY_API_URL}/${DARKSKY_API_KEY}/${latitude},${longitude},${time}`;

  return axios.get(url, {
    params: {
      exclude: 'currently,minutely,hourly,alerts,flags'
    },
    headers: {
      'Accept-Encoding': 'gzip'
    }
  })
    .then((res) => res.data.daily.data[0].cloudCover >= MIN_CLOUD_COVER)
    .catch((res) => {
      debug('Failed to get forecast data.')
      debug(res);
      return false;
    });
}

module.exports = isItCloudy;
