const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    
    const data = fs.readFileSync(`../Database/database.json`, { encoding: 'utf8'})
    const objData = JSON.parse(data);
    // let id ;

    if (req.url == '/') {
        res.end('server is responding perfectly and this is homePage') 
    } else if(req.url=='/about') {
        res.end('server is responding perfectly and this is aboutPage') 
    } else if(req.url=='/contact') {
        res.end('server is responding perfectly and this is contactPage') 
    } else if(req.url=='/login') {
        res.end(' server is responding perfectly and this is loginPage') 
    } else if (req.url == '/userapi') {
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(data)
         let id = 1
         if( req.url==`/1`){
             res.writeHead(200, {'Content-Type': 'application/'})
             res.end(data[0])
         }
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h3>there is an error loading this page as this is broken or removed from the server </h3>') 
    }
})
server.listen(2000, "127.0.0.1",()=>{
    console.log('server listening on  http://localhost:2000');
})