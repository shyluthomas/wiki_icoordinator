var http=require('http')
var fs=require('fs')


http.createServer(function (req,res){
    fs.readFile('box.html',function(err,data){
        res.writeHead(200,{'contente-type':'text/html'})
        res.write(data)
        res.end()
    })
   
}).listen(7000)