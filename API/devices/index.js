var express=require('express');
var connection =require('../mysql');

var app = express();

var routerDevices=express.Router(); //creo el manejador de la ruta


module.exports=routerDevices; //exporto router de operaciones

//RETORNA LA LISTA DE DISPOSITIVOS
routerDevices.get('/',function(req,res){
    connection.query('SELECT * FROM Dispositivos',function(err,result,fields){
        if(err){
            console.log("Error "+ err);
            res.send(err);
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
            res.send(err);
            return;
        }
        res.send(result[0]);
    });    
});