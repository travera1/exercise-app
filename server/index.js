require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//configure dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

//this * route is to serve project on different page routes except rouut '//
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

/*if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/dist'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}
*/

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})