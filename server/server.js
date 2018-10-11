require('dotenv').config()

const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')
const cors          = require('cors')

const index         = require('./modules/todo')
const create        = require('./modules/todo/create')
const deleted       = require('./modules/todo/delete')
const edit          = require('./modules/todo/edit')
const update        = require('./modules/todo/update')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', index)
app.post('/', create)
app.delete('/:id', deleted)
app.get('/:id', edit)
app.put('/:id', update)

app.listen(8888, () => {
    console.log("Server is running guys!")
})