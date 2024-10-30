//helloworld.js
var http = require("http");

var dt=require("./mymodule");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': "text/html"});
    res.write("Now"+dt.myDateTime()+"<br/>");
    res.write("3 + 4 = "+dt.add(3,4)+"<br/>");
    res.write("3 - 4 = "+dt.sub(3,4)+"<br/>");
    res.write("3 * 4 = "+dt.mutiply(3,4)+"<br/>");
    res.write("4 / 4 = "+dt.divided(4,4)+"<br/>");
    res.end("Hello World!");
}).listen(8080);