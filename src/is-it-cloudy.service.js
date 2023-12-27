import debugFactory from 'debug';
const debug = debugFactory('is-it-cloudy');
import axios from 'axios';

export default function cloudyFactory(WEATHER_API_KEY, MIN_CLOUD_COVER = 40) {
  return async function isItCloudy(latitude, longitude) {
    const url = 'https://api.openweathermap.org/data/2.5/weather';

    try {
      const res = await axios.get(url, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: WEATHER_API_KEY
        },
        headers: {
          'Accept-Encoding': 'gzip'
        }
      });
      return res.data.clouds.all >= MIN_CLOUD_COVER;
    } catch (err) {
      debug('Failed to get forecast data.');
      debug(err);
      return false;
    }
  };
}
