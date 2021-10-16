require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
.get('/newpaltz', (req, res) => {
  res.send('hello New paltz')
});


if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/dist'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})