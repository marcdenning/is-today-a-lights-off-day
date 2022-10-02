'use strict';

const APP_NAME = 'is-today-a-lights-off-day';
const PORT = process.env.PORT || 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const LAT = process.env.LATITUDE || 35.8815;
const LONG = process.env.LONGITUDE || -78.8460;

const debug = require('debug')(APP_NAME);
const express = require('express');
const consolidate = require('consolidate');

if (!WEATHER_API_KEY) {
  debug('Environment variable WEATHER_API_KEY is not set. Please set a value.');
  process.exit(1);
  return;
}

const isItCloudy = require('./src/is-it-cloudy.service')(WEATHER_API_KEY);
const isTodayALightsOffDay = require('./src/answer.service')(LAT, LONG, isItCloudy);
const app = express();

debug('Setting up %s.', APP_NAME);

app.engine('hbs', consolidate.handlebars);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', require('./src/root-page.router')(isTodayALightsOffDay));

app.use(express.static(__dirname + '/public'));

app.use((req, res) => res.status(404).render('404'))

app.listen(PORT, () => debug('Listening on port %s.', PORT));
