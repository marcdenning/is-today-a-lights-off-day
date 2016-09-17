'use strict';

let debug = require('debug')('is-today-a-lights-off-day');
let express = require('express');
let consolidate = require('consolidate');

let isTodayALightsOffDay = require('./src/answer')

const PORT = process.env.PORT || 3000;

let app = express();

debug('Setting up is-today-a-lights-off-day.');

app.engine('hbs', consolidate.handlebars);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  let answer = isTodayALightsOffDay();

  res.render('index', {
    title: 'Is Today a Lights-Off Day?',
    answer: answer,
    answerText: answer ? 'Yes.': 'No.',
    answerClass: answer ? 'lights-off' : 'lights-on'
  });
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => res.status(404).render('404'))

app.listen(PORT, () => debug('Listining on port %s.', PORT));
