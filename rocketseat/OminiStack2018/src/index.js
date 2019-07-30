const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://dbRock:mwolf1234@cluster0-vosuw.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
})

app.use(require('./routes'))
//ouvir uma porta 
app.listen(3000)
