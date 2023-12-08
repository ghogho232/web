const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.write('<h2>Response from server</h2>');
    res.write('<hr>');
    res.end('<p>Hello world</p>');
});
server.listen(3300,()=>{console.log('Server on 3300')});