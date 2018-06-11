const functions = require('firebase-functions')
const express = require('express')
const fetch = require('node-fetch')

const app = express()
const port = 4000

app.listen(port, () => {
  console.log(`API listening on port ${port} in ${app.settings.env} mode`)
  console.log(`http://localhost:${port}`)
  console.log(`http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send({ message: 'Server running gracefully 🦄', timestamp: Date.now() })
})

app.get('/partidas', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  fetch('https://api.cartolafc.globo.com/partidas')
    .then(res => res.json())
    .then(json => {
      res.send(json)
    })
})

app.get('/times', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  fetch(`https://api.cartolafc.globo.com/times?q=${req.query.q}`)
    .then(res => res.json())
    .then(json => {
      res.send(json)
    })
})

exports.app = functions.https.onRequest(app)
