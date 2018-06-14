const functions = require('firebase-functions')
const express = require('express')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`API listening on port ${port} in ${app.settings.env} mode`)
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

app.post('/entrar', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')

  const { email, password } = req.body

  const options = {
    method: 'POST',
    body: JSON.stringify({
      payload: {
        email,
        password,
        serviceId: 438
      }
    }),
    headers: { 'Content-Type': 'application/json' }
  }

  fetch('https://login.globo.com/api/authentication', options)
    .then(res => res.json())
    .then(json => {
      res.send(json)
    })
})

exports.app = functions.https.onRequest(app)
