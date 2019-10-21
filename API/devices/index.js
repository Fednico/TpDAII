var express=require('express');
var connection =require('../mysql');

var app = express();

var routerDevices=express.Router(); 
module.exports=routerDevices; 

//RETORNA LA LISTA DE DISPOSITIVOS
routerDevices.get('/',function(req,res){
    connection.query('SELECT * FROM Dispositivos',function(err,result,fields){
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
             return;
        }
        res.send(result);
    });    
});

//RETORNA EL DISPOSITIVO CON EL ID CORRESPONDIENTE
routerDevices.get('/:id',function(req,res,){
    connection.query('SELECT * FROM Dispositivos WHERE dispositivoId=?',[req.params.id],function(err,result,fields){
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
            return;
        }
        res.send(result[0]);
    });    
});