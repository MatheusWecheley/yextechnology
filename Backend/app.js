var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./config/database')
const cors = require('cors')



var usersRouter = require('./routes/users');

var app = express();


app.use('/files', express.static(path.resolve(__dirname, "publico", "upload")))
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);



module.exports = app;
