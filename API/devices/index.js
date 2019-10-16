var express=require('express');
var connection =require('../mysql');
//var cors = require('cors');
//var corsOptions = {origin:'*',optionsSucessStatus:200};

//var logriegos=require('./log');

var app = express();

var routerDevices=express.Router(); //creo el manejador de la ruta

//routerDevices.use(cors(corsOptions));

module.exports=routerDevices; //exporto router de operaciones

//RETORNA LA LISTA DE DISPOSITIVOS
routerDevices.get('/',function(req,res){
    connection.query('SELECT * FROM DISPOSITIVOS',function(err,result,fields){
        if(err){
            console.log("Error "+ err);
            return;
        }
        res.send(result);
    });    
});

//RETORNA EL DISPOSITIVO CON EL ID CORRESPONDIENTE
routerDevices.get('/:id',function(req,res,){
    connection.query('SELECT * FROM DISPOSITIVOS WHERE dispositivoId=?',[req.params.id],function(err,result,fields){
        if(err){
            console.log("Error "+ err);
            return;
        }
        res.send(result[0]);
    });    
});