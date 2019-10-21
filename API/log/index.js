var express=require('express');
var connection =require('../mysql');

var routerLog=express.Router(); 
module.exports=routerLog; 
routerLog.use(express.json());


routerLog.post('/insert',function(req,res){
    connection.query('INSERT INTO Log_Riegos (apertura,fecha,electrovalvulaId) VALUES (?,?,?)',[req.body.log.apertura,new Date(req.body.log.fecha).getUTCDate,
        req.body.log.electrovalvulaId],(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

routerLog.get('/:id',function(req,res){
    connection.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId=? ORDER BY fecha DESC',[req.params.id],(err,result,field)=>{
        if(err){
            console.log("Error "+ err);
            res.status(400).send(err);
            return;
        }
        res.send(result);
        
    });
});

