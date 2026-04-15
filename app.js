const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from CI/CD!',
    version: '1.0',
    author: 'Rajesh'
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})


module.exports = app
