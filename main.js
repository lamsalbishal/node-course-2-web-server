const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partial');
app.set('View engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

	res.render('home.hbs' , {

		pageTitle: 'Home Page',
		welcomePage: ' Welcome to Our page',
		CurrentYear: new Date().getFullYear()

	});

});

// app.get('/about',(req, res) => {

// 	res.send("About Page");

// });

app.get('/about', (req,res) => {

	res.render('about.hbs', { 

		pageTitle: ' About Page',
		CurrentYear: new Date().getFullYear()

	});

});

app.listen(port, () => {
	console.log(` Server is up on port ${port}`)
});

