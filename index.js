const APP_NAME = 'is-today-a-lights-off-day';
const PORT = process.env.PORT || 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const LAT = process.env.LATITUDE || 35.8815;
const LONG = process.env.LONGITUDE || -78.8460;

import debugFactory from 'debug';
const debug = debugFactory(APP_NAME);
import express from 'express';
import { handlebars } from '@ladjs/consolidate';

if (!WEATHER_API_KEY) {
  console.error('Environment variable WEATHER_API_KEY is not set. Please set a value.');
  process.exit(1);
}

import cloudyFactory from './src/is-it-cloudy.service.js';
const isItCloudy = cloudyFactory(WEATHER_API_KEY);

import answerFactory from './src/answer.service.js';
const isTodayALightsOffDay = answerFactory(LAT, LONG, isItCloudy);

import rootPageFactory from './src/root-page.router.js';

const app = express();

debug('Setting up %s.', APP_NAME);

app.engine('hbs', handlebars);

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', rootPageFactory(isTodayALightsOffDay));

app.use(express.static('./public'));

app.use((req, res) => res.status(404).render('404'))

app.listen(PORT, () => debug('Listening on port %s.', PORT));
