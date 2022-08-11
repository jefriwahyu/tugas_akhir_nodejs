//import express
const express = require('express');

//import mongoose
const mongoose = require('mongoose');

//import bodyParser
const bodyParser = require('express');

//import api-routes
const apiRouter = require('./api-routes');

//inisiasi express ke app
const app = express();

//set up port
const PORT = 8080;

//set up default url
app.get('/',(req,res) => {
    res.send('Success !');
});

//set up bodyParser
app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

//set up api ke api-router
app.use('/api', apiRouter);

//set up mongoose connection variabel
mongoose.connect('mongodb://localhost/resthub2');

// menjalankan app dengan console info
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`)
});
