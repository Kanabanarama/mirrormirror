const express = require('express')
const path = require('path')

const httpPort = 8002

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.htm'))
})

app.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}`)
})
