var http = require('http');
var url=require('url');
var user=require('./user');

http.createServer(function(req,res){
    var reqUrl=url.parse(req.url, true);
    var html='';

    var fs= require('fs');

        if(reqUrl.pathname.endsWith('.do')){
            switch(reqUrl.pathname){
               
                // case "/useradd.html":
                // html = "<h1> User add </h1>";
                // html += '<form action="/useradd.do">';
                // html += 'User name:<input type = "text" name="uname"><br>';
                // html += 'User email:<input type= "email" name="uemail"><br>';
                // html += '<button onclick="go(this.form);">Add user</button>';
                // html += '</form>';
                // html += '<script>';
                // html += 'console.log("page loaded...' + new Date()+'");'; 
                // html += 'function go(f){';
                // html += 'alert("User name:" + f.uname.value);';
                // html += 'f.submit();';
                // html += '}';
                // html += '</script>';
                // res.writeHead(200,{'Content-Type': 'text/html'});
                // res.end(html);
                // break;

                case'/useradd.do':
                user.add(req,res);
                //html = '<h1> Action Called: /useradd.do </h1>';
                ///html += 'User name:' + reqUrl.query.uname + '<br>' ;
                //html += 'User email:' + reqUrl.query.ueamail + '<br>';
                //res.writeHead(200,{'Content-Type': 'text/html'});
                //res.end(html);
                break;

                // case '/userlist.html':
                //     html = '<h1> User list </h1>';
                //     html += '<form action = "/userlist.do">';
                //     html += '<input type = "Search" name="key">';
                //     html += '<input type = "submit" value="Search">';
                //     html += '</form>';
                //     res.writeHead(200,{'Content-Type': 'text/html'});
                // res.end(html);
                // break;

                case '/userlist.do':

                user.list(req,res);
                  //  html = '<h1> Action called:/userlist.do</h1>';
                    //html += 'Search key:'+ reqUrl.query.key;
                   // res.writeHead(200,{'Content-Type': 'text/html'});
                //res.end(html);
                break;
                

                default:
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end('Action not found:'+ reqUrl.pathname);
                    break;
                    
            }
        }else{
            var filename ='.'+ reqUrl.pathname;
            if(filename == './')filename = './index.html';
            fs.readFile(filename,function(err,data){
                if(err){
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.end('File not found:'+ reqUrl.pathname);
                }

                var ctype = 'text/html';
                if(reqUrl.pathname.startsWith('/js/')){
                    ctype = 'text/javascript';

                }else if(reqUrl.pathname.startsWith('/css/')){
                    ctype = 'text/css';
                }


                res.writeHead(200,{'Content-Type':ctype});
                res.end(data);
            });
        }
}).listen(8080);
console.log('Server is running...');