// module.exports = server

const express = require('express')
const port = 8000
const app = express()
const { getDates } = require('./getDates')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.get('/dates', (req, res) => {
  res.status(200)
  // res.json({ working: true })
  res.json(getDates())
  res.end()
})

app.listen(port, err => {
  if (err) {
    throw 'MATT:' + err
  }
  console.log('Example app listening on port 8000!')
})
