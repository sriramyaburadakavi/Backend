import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.method);
    if(req.url==="/users)"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({name:"Thub"}));
    }
    else{
         res.writeHead(200, { 'Content-Type': 'text/plain' });
         res.end('Hello, This is from Backend');
    }
    

});

server.listen(3000, () => {
    console.log(`Server is running at port ${3000}`);
});
