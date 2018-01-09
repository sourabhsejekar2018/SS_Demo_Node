var express=require('express');
var app=express();


app.get('/',function(request,response){
  response.sendfile(__dirname+'/index.html');
});

var port=3000;

var server =app.listen(port,function(req,res){
console.log("Catch the action at http://localhost:"+port);

});