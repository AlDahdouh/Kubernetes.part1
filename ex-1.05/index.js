const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('./build'))

app.get('/', (req, res) => {
  res.send(`Server started in port  ${port}`)
})

app.listen(port , () => {
  console.log(`Server started in port  ${port}`)
})