require('dotenv').config()

const express = require('express')
const app = express()
const bp = require('body-parser')

app.use(bp.json())

app.use(require('cors')())

app.get('/:formID', (req, res) => {
  // Get the form with the form ID form the db
  res.send(`Form ID: ${req.params.formID}`)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`Form ID: ${req.body}`)
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
