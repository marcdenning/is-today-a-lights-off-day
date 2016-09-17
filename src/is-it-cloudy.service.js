'use strict';

let debug = require('debug')('is-it-cloudy');
let axios = require('axios');

const FORECAST_API_URL = 'https://api.forecast.io/forecast';
const FORECAST_API_KEY = process.env.FORECAST_API_KEY;
const MIN_CLOUD_COVER = 0.4;

function isItCloudy(latitude, longitude, date) {
  let time = date.getTime() / 1000;
  let url = `${FORECAST_API_URL}/${FORECAST_API_KEY}/${latitude},${longitude},${time}`;

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
