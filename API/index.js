var express= require('express');
var devices=require('./devices');
var measurements=require('./measurements');
var logriegos=require("./log");
var cors = require('cors');
var corsOptions = {origin:'*',optionsSucessStatus:200};

var app = express();
app.use(cors(corsOptions));
app.use('/devices',devices);
app.use('/measurements',measurements);
app.use('/log',logriegos);

app.listen(3500,function(req,res){ 
    console.log("API LEVANTADA EN PUERTO 3500");
    });
