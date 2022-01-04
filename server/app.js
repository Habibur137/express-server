const express = require('express')
const router = require('./routes/user_route')
const cors = require('cors')
require('dotenv').config()
const app = express()

//body Parser
app.use(express.json())

//use cors
app.use(cors())

//routes setup
app.use('/users',router)

// Home Route
app.get('/', (req, res) => {
    res.send('this is home page')
})

//Wrong Route
app.use((req, res) => {
    res.send('Not Found Please Type Valid Address')
})

module.exports = app;