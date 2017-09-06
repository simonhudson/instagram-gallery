require('dotenv').config()
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

require('./config/paths')(app);

app.use(express.static(path.join(__dirname, 'assets')));

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, (err) => {
	if (err) return console.log('Error: ', err)
	console.log(`Server listening on ${port}`)
});
