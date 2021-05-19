const express = require('express')
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect("mongodb://localhost/chatappdemo");

app.listen(port, () => {
  console.log(`Chat app demo listening at http://localhost:${port}`)
})