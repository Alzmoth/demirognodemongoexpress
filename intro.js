var http = require('http')
var log = require('./log.js')
var sayhello = require('./exportsDemo.js')
log.information('server yayında');
http.createServer(function(request,response){
    if(request.url == "/admin"){
        response.write('admin sayfasıdır')
    }else if (request.url == "/"){
        response.write("ana Sayfa")
    }else if (request.url == "/customers"){
        response.writeHead(200,{'Content-Type': 'application/json'})
        response.write(JSON.stringify({name: 'alzmoth', lastname:'fullstack'}))
    }
    //response.writeHead(200,{'Content-Type':'text/html'})
    response.end()

}).listen(8080)
sayhello();
