require('rootpath')()

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const jwt = require('helpers/jwt')
const errorHandler = require('helpers/error-handler')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(jwt())

app.use('/users', require('./users/controller'))
app.use(errorHandler)

app.listen(3000, console.log('Example app listening on port 3000!'))
