let path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

app.listen(3000, () => {
    console.log('Express Server Listening on localhost:3000')
})

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})