const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// Serving Static file
app.use(express.static('public'))

// Exercise: serve /node_modules/accepts/index.js
//app.use(express.static('node_modules'))

app.all('/', (req, res) => {
  console.log(path.join(__dirname + '/node.html'))
  res.sendFile(path.join(__dirname + '/node.html'))
})

app.all('*', (req, res) => {
    res.send('<h1>This page does not exist</h1>')
})

app.listen(port, () => console.log(`App is listening on ${port}`));