const express = require('express')
const app = express()
const port = process.env.PORT || 3001
let count = -1
app.get('/', (req, res) => {
  count +=1
  res.send(`pong ${count}`)
})

app.listen(port , () => {
  console.log(`Server started in port  ${port}`)
})