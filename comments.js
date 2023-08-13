// Create web server

// Import module
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use module
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));

// Set router
app.use('/', router);

// Create server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});