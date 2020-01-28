require('dotenv').config()
const express = require('express')
const { json } = require('express')
const { SECRET_KEY, PORT } = process.env

const app = express()
app.use(json())

const ts = require('./controller/testService')

console.log( SECRET_KEY )

app.listen(PORT, () => {
    console.log(`listening on port ${ PORT }`)
})

app.get('/test', ts.test)