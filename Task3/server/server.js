const express = require('express');
const app = express();
const Bodyparser = require('body-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();
const indexRoutes = require('./routes/index');

// Middleware

// Setup CORS:
// app.use....
// app.use(logger('dev'));
app.use(Bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', function (req, res) {});
app.use('/', indexRoutes);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server connected on port:' + PORT);
});
