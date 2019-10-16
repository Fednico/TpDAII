var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'127.0.0.1',
    port:'4306',
    user:'user',
    password:'1234',
    database:'tpdaii'
    
})

connection.connect(function(err){
    if(err){
        console.log("Error"+err);
        throw err;
    }
    console.log("Conectado con id: "+connection.threadId);
    }
);

module.exports=connection;
