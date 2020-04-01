var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const db = require("./model/db");
db.connect();
const error = require('./utils/error')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var administratorRouter = require('./routes/Administrator')
var orderRouter = require('./routes/order');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',administratorRouter)
app.use(error)
app.use('/order', orderRouter);


module.exports = app;
