require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = 4000

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => {console.log(error)})
db.once('open', () => {console.log('Connected to Database')})

app.use(express.json())

const phraseRouter = require('./routes/phrase')
app.use('/phrase', phraseRouter)

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})
