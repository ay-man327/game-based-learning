const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
  console.log("requist is recived");
  
   if (req.url=="/")
        res.write("szdfbgnhhhdgsfadgfhmnbvx");
        res.end();
    if(req.url=="/home"){
       fs.readFile("home.html", 
        (err,html)=>{
         if(err){
            return console.log("erorr");
          } else{
           return res.write(html);
           res.end(); } 
       })
    }
    if(req.url=="/style.css"){
        fs.readFile("style.css",(err,css)=>{
            if(err)
               return console.log("error");
            else{
                res.writeHead(200,{'content-type':'tex/css'});
                res.write(css);
                res.end();
            }   
        })
    }   
})


server.listen(3000,()=>{
    console.log("listening at port3000...!!!");
})