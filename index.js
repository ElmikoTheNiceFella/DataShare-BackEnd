require('dotenv').config()

const express = require('express')
const app = express()

app.get('/:formID', (req, res) => {
  // Get the form with the form ID form the db
  res.send(`Form ID: ${req.params.formID}`)
})

app.post('/', (req, res) => {
  // Save the form with the form ID to the db
  res.send(`Form ID: ${req.params.formID}`)
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
