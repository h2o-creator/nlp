const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

app.listen(3000, () => {
    console.log('Express Server Listening on localhost:3000')
    console.log(`API KEY: ${process.env.API_KEY}`)
})

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})