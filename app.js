const express = require('express');
const routes = require('./routes/index')
const conect = require('./middlewares/database');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
conect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
