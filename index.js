var express = require('express');
var consolidate = require('consolidate');
var app = express();
var port = process.env.PORT || 3000;

app.engine('hbs', consolidate.handlebars);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render('index', {
  title: 'Is Today a Lights-Off Day?',
  answer: 'No'
}));

app.use(express.static(__dirname + '/public'));

app.use((req, res) => res.status(404).render('404'))

app.listen(port, () => console.log(`Listining on port ${port}.`));
