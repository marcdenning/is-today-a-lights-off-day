'use strict';

var express = require('express');
var consolidate = require('consolidate');
var isTodayALightsOffDay = require('./src/answer')
var app = express();
var port = process.env.PORT || 3000;

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

app.listen(port, () => console.log(`Listining on port ${port}.`));
