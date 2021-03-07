const express = require('express')
const app = express()
const port = 3000
const cars = require('cars')

let corsOptions = {
  origin: 'http://127.0.0.1:5500',   //This is for frontend
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))