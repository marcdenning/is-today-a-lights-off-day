'use strict';

const APP_NAME = 'is-today-a-lights-off-day';
const PORT = process.env.PORT || 3000;

let debug = require('debug')(APP_NAME);
let express = require('express');
let consolidate = require('consolidate');

let app = express();

debug('Setting up %s.', APP_NAME);

app.engine('hbs', consolidate.handlebars);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', require('./src/root-page.router'));

app.use(express.static(__dirname + '/public'));

app.use((req, res) => res.status(404).render('404'))

app.listen(PORT, () => debug('Listining on port %s.', PORT));
