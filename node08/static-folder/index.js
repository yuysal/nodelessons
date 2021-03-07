const express = require('express')
const app = express()
const port = 3001

app.set('view engine','pug')
app.use(express.static('public'))
app.use(express.static('public2'))

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index.pug'))
app.listen(port, () => console.log(`Example app listening on port port!`))