'use strict';

const debug = require('debug')('is-it-cloudy');
const axios = require('axios');

function cloudyFactory(WEATHER_API_KEY, MIN_CLOUD_COVER = 40) {
  return function isItCloudy(latitude, longitude) {
    const url = 'https://api.openweathermap.org/data/2.5/weather';

    return axios.get(url, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: WEATHER_API_KEY
      },
      headers: {
        'Accept-Encoding': 'gzip'
      }
    })
      .then((res) => res.data.clouds.all >= MIN_CLOUD_COVER)
      .catch((res) => {
        debug('Failed to get forecast data.')
        debug(res);
        return false;
      });
  };
}

module.exports = cloudyFactory;
