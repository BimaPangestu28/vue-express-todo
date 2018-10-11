require('dotenv').config()

const express = require('express')
const app     = express()

app.get('/', (req, res) => {
    res.end('hello')
})

app.listen(8888, () => {
    console.log("Server is running guys!")
})