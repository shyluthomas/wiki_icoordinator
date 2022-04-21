var http=require('http')


http.createServer(function (req,res){
    res.write('Server started..............')
    res.end()
}).listen(7000)