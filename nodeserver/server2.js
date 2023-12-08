const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == '/'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end('<h2>Home page</h2>');
    }
    else if(req.url == '/about'){
        res.end('about us');
    }
    else if(req.url == '/contact'){
        res.end('contact information');
    }
    else{
        res.writeHead(404);
        res.end('Resource Not Found');
    }
});
server.listen(3300,()=>{console.log('Server on 3300')});