

'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/config/config');

const estudianteRuta = require('./src/routes/estudiante-route');


const app = express();

app.use(express.json());

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(bodyParser.json());

app.use('/api', estudianteRuta.routes);


app.listen(config.port, () => console.log('App is listening on url http://localhost:  '+ config.port));