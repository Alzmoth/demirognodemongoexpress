var express = require('express')
var app = express()

app.get('/', function(request,response){
    response.send('Hello');
})
app.get('/admin', function(request,response){
    response.send('deli');
})
app.get('/manyak', function(request,response){
    response.send('manyak');
})
app.post('/manyak', function(request,response){
    response.send('post istegi alındı');
})
app.delete('/*manyak*', function(request,response){ //içinde manyak geçen linkler
    response.send('delete istegi alındı');
})


var server = app.listen(8080);