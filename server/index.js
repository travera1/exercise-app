
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
.get('/newpaltz', (req, res) => {
  res.send('hello New paltz')
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})