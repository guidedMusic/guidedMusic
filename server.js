const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const route = require('./server/routes/api');
var app = express();
var port = 3000;

mongoose.connection.on('connected', () => { console.log('connected to database') });
mongoose.connection.on('error', (err) => { console.log(`Error in datatbase connection: ${err}`) });
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use('/api', route);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
mongoose.connect('mongodb://localhost:27017/guided-music');
app.listen(port, () => console.log(`API running on localhost:${port}`));
