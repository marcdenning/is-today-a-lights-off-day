'use strict';

const TZ = process.env.TIMEZONE || 'America/New_York';

let moment = require('moment-timezone');
let messageTextConstants = require('./message-text.constants');
let isItALightsOffDay = require('./answer.service');

function rootPage(req, res) {
  let date;

  if (req.query.date) {
    date = moment.tz(req.query.date, 'YYYYMMDD', TZ).toDate();
  }
  else {
    date = moment.tz(TZ).toDate();
  }
  date.setHours(0, 0, 0, 0);

  isItALightsOffDay(date)
    .then((messageText) => {
      let answer = messageText !== messageTextConstants.NO;

      res.render('index', {
        title: 'Is Today a Lights-Off Day?',
        answer: answer,
        answerText: messageText,
        answerClass: answer ? 'lights-off' : 'lights-on'
      });
    });
}

module.exports = rootPage;
