import http from 'http';

const server = http.createServer((req, res) => {

    console.log(req);

    res.writeHead(200, {'Content-Type': 'text/plain'});

    const persona = {
        id:1,
        nombre: 'Jorge'
    };

    res.write(JSON.stringify(persona));
    res.end();
});
server.listen(8090);

console.log("Servidor en 8090");
