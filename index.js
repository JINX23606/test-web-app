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
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'))
})

module.exports = app