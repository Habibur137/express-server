const express = require('express')
require('dotenv').config()

const app = express()


// Home Route
app.get('/', (req, res) => {
    res.send('this is home page')
})

//Wrong Route
app.use((req, res) => {
    res.send('Not Found Please Type Valid Address')
})

module.exports = app;