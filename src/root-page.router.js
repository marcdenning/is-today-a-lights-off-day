'use strict';

let messageTextConstants = require('./message-text.constants');

function rootPageFactory(isItALightsOffDay) {
  return function rootPage(req, res) {
    const date = new Date();

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
  };
}

module.exports = rootPageFactory;
