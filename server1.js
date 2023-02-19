const http=require("http");
const fs=require("fs");

const port=8080;

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'content-typr':'text/html'});
        res.write("<html><body><h1>welcome to home page</h1></body></html>");
        res.end();
    }else if(req.url=='/about'){
         res.writeHead(200,{'content-typr':'text/html'});
        res.write("<html><body><h1>welcome to about page</h1></body></html>");
        res.end();

    } else if(req.url=='/home'){
        fs.readFile("./home.html",(err,data)=>{
            if(err){
                console.log("err");
            }else{
               res.writeHead(200,{'content-type':'text/html'});
                res.write(data.toString());
                res.end();
            }
        })
      
    }else{
        res.end('404 not found');
    }
    if(req.url="style.css"){
        fs.readFile("./style.css",(err,data)=>{
            if(err){
                console.log("err");
            }else{
                res.writeHead(200,{'content-type':'text/css'});
                res.write(data.toString());
                res.end();
            }
        })
    }
})

server.listen(port);