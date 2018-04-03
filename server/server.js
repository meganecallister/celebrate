require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');
const pc = require('./profile_controller');
const massive = require('massive');

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} bunnies hopping down Center Street.`)})