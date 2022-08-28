const express = require('express')
const app = express()
const router = express.Router()
const serverless = require('serverless-http')

const fn_og = () => "joy"

router.get('/og', (req, res) => {
  res.send('Hello World and Universe!')
})

app.use('/.netlify/functions/app', router)

module.exports.handler = serverless(app)
module.exports.fn_og = fn_og