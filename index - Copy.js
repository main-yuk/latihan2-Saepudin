const express = require('express');

const app = express();

app.get('/home', (req, res) => {
	res.send('Homepage menu')
})

app.get('/contact', (req, res) => {
	res.send('Contact page')
})

app.get('/api/product', (req, res) => {
	res.json({
		message: "get product successfully",
		name: 'Samsung',
		img: 'adawdadawdawddw.jpg',
		price: '500000',
		tag: null
	})
})

app.get('/profile', (req, res) => {
	res.send('Profile page')
})

// Running to Server
app.listen(5000, () => {
	console.log('server running on port 5000');
});