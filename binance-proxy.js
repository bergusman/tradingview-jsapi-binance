const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan('tiny'))

const proxy = require('express-http-proxy')
app.use('/', proxy('https://api.binance.com'))

app.listen(9090, () => {
    console.log('Listening on 9090')
})
