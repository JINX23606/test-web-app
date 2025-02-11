const express = require('express')
const path = require('path')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API Listening on PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.send('This is my about route')
})

module.exports = app