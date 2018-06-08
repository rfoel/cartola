const functions = require('firebase-functions')
const express = require('express')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const app = express()
const port = 4000

app.listen(port, () => {
  console.log(`API listening on port ${port} in ${app.settings.env} mode`)
  console.log(`http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send({ message: 'Server running gracefully 🦄', timestamp: Date.now() })
})

app.get('/partidas', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  const Httpreq = new XMLHttpRequest()
  Httpreq.open('GET', 'https://api.cartolafc.globo.com/partidas', false)
  Httpreq.send(null)
  res.send(Httpreq.responseText)
})

exports.app = functions.https.onRequest(app)
