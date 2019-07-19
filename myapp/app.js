var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var guestRoter = require('./routes/GuestRouter')
var userRouter = require('./routes/UserRouter')
var authRouter = require('./routes/AuthRouter')
var validateRouter = require('./routes/ValidateRouter')
var mongoose = require('mongoose');
var session = require('express-session');

var mongoDB = 'mongodb://127.0.0.1/my_database';




var app = express();
app.use(
  session({
    secret: "bimat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: "asdas",
      maxAge: 12 * 60 * 60 * 1000
    }
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/guest', cors(), guestRoter);
app.use('/user', cors(), userRouter);
app.use('/auth', cors(), authRouter);
app.use('/validate', cors(), validateRouter);





mongoose.connect(mongoDB, { useNewUrlParser: true });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http:/localhost/%s:%s", host, port)
});

module.exports = app;
