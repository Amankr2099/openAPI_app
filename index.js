const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const openai = require('./routes/apiRoutes')
require('dotenv').config()


app = express()

app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.static("stylings"))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/openai', openai);


app.listen(3000, () => {
    console.log("Server Inititated");
})

//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