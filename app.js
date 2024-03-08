const express = require('express');
const routes = require('./routes/index')
const conect = require('./middlewares/database');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
conect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ['http://localhost:4200', 'http://tunepays.net', 'https://tunepays.net', 'http://www.tunepays.net', 'https://www.tunepays.net', 'http://tunepays.org', 'https://tunepays.org', 'http://tunepays.com', 'https://tunepays.com', 'http://www.tunepays.com', 'https://www.tunepays.com','https://web.tunepays.com/'],
  optionsSuccessStatus: 200
}));

app.use(function(req, res, next) {
  var allowedOrigins = ['http://localhost:4200', 'http://tunepays.net', 'https://tunepays.net', 'http://www.tunepays.net', 'https://www.tunepays.net', 'http://tunepays.org', 'https://tunepays.org', 'http://tunepays.com', 'https://tunepays.com', 'http://www.tunepays.com', 'https://www.tunepays.com','https://web.tunepays.com/'];
  
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);  
  res.setHeader('Set-Cookie', 'flavor=choco; SameSite=None; Secure');
  return next();
});

app.use('/', routes)

app.use(errorHandler)

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
});

app.listen(6000, () => {
  console.log('Server is listening on 6000');
})

module.exports = app;
