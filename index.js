const mongoose = require('mongoose');
const genreDebugger = require('debug')('movie:genreNamespace');
const dbDebugger = require('debug')('movie:dbDebugger');
const config = require('config');
const auth = require('./middleware/auth');
const logger = require('./middleware/log');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const Joi = require('joi');
const genre = require('./routes/genres');
const home = require('./routes/home');

mongoose.connect('mongodb://localhost:27017/movie')
    .then(() => console.log('Connected to database...'))
    .catch(err => console.log('Could not connect to database...', err));

const app = express();

app.use('/api/genres', genre);
app.use('/', home);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(logger);
app.use(auth);
app.use(helmet());

dbDebugger('Mail Host: '+config.get('mail.host'));
genreDebugger('App Name: '+config.get('name'));
genreDebugger(process.env.NODE_ENV);
if (config.has('mail.password')) {
    genreDebugger('Mail Password: '+config.get('mail.password'));
}

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    dbDebugger('morgan is enabled...')
}
// DB Work Debugging
if (config.has('db.host') && config.has('db.name')) {
    dbDebugger('DB Host: '+config.get('db.host'));
    dbDebugger('DB Name: '+config.get('db.name'));
}
// app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3001;
app.listen(port, () => {genreDebugger(`Listening on ${port}`)});