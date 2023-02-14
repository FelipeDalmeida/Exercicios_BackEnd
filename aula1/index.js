const http=require('http')

http.createServer(function(req,res){
    res.write("Hello Word")
    res.end()
}).listen(8000)