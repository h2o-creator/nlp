const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const axios = require('axios').default
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

app.listen(3000, () => {
    console.log('Express Server Listening on localhost:3000')
    console.log(`API KEY: ${process.env.API_KEY}`)
})

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

app.post('/sentiment', (req, res) => {
    axios.post('https://api.meaningcloud.com/sentiment-2.1', {
        key: process.env.API_KEY,
        txt: req.body.txt,
        lang: 'en',
    })
    .then((response) => res.send(response.data))
    .catch((error) => res.send(error))
})