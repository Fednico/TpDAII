var express=require('express');
var connection =require('../mysql');

var routerMeasurements=express.Router(); //creo el manejador de la ruta


module.exports=routerMeasurements; //exporto router de operaciones

//RETORNA LAS MEDICIONES DE LA TABLA ORDENADAS
routerMeasurements.get('/',function(req,res){
    connection.query('SELECT * FROM MEDICIONES ORDER BY MEDICIONID DESC',(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            return;
        }
        res.send(result);
    });
});

//RETORNA TODAS LAS MEDICIONES DE UN DISPOSITIVO ORDENADAS
routerMeasurements.get('/all/:id',function(req,res){
    connection.query('SELECT * FROM MEDICIONES WHERE DISPOSITIVOID=? ORDER BY MEDICIONID DESC',[req.params.id],(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            return;
        }
        res.send(result);
        
    });
});

//RETORNA LA ULTIMA MEDICION DE UN DISPOSITIVO
routerMeasurements.get('/last/:id',function(req,res){
    connection.query('SELECT * FROM MEDICIONES WHERE DISPOSITIVOID=? ORDER BY MEDICIONID DESC',[req.params.id],(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            return;
        }
        res.send(result[0]);
        
    });
});
