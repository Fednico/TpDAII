var express=require('express');
var connection =require('../mysql');

var routerMeasurements=express.Router(); //creo el manejador de la ruta
module.exports=routerMeasurements; //exporto router de operaciones

routerMeasurements.use(express.json());

//RETORNA LAS MEDICIONES DE LA TABLA ORDENADAS
routerMeasurements.get('/',function(req,res){
    connection.query('SELECT * FROM Mediciones ORDER BY MEDICIONID DESC',(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

//RETORNA TODAS LAS MEDICIONES DE UN DISPOSITIVO ORDENADAS
routerMeasurements.get('/all/:id',function(req,res){
    connection.query('SELECT * FROM Mediciones WHERE DISPOSITIVOID=? ORDER BY MEDICIONID DESC',[req.params.id],(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
            return;
        }
        res.send(result);
        
    });
});

//RETORNA LA ULTIMA MEDICION DE UN DISPOSITIVO
routerMeasurements.get('/last/:id',function(req,res){
    connection.query('SELECT * FROM Mediciones WHERE DISPOSITIVOID=? ORDER BY MEDICIONID DESC',[req.params.id],(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
            return;
        }
        res.send(result[0]);
        
    });
});

routerMeasurements.post('/insert',function(req,res){
    connection.query('INSERT INTO Mediciones (fecha,valor,dispositivoId) VALUES (?,?,?)',[new Date (req.body.medicion.fecha),
    req.body.medicion.valor,req.body.medicion.dispositivoId],(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});
