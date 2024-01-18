const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional')

const app = express();

app.use(bodyParser.json());

app.use('/professional', professionalRoutes);

app.listen(8080);