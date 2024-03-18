import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("----New reqest----")
    console.log(process.env.HOSTNAME); // prints the container ID
    console.log(req.headers['docker-container-id']);// prints the Docker container ID from NGINX header 
    console.log(`${req.socket.remotePort}:${req.socket.remotePort}`);// prints the Docker container ID from NGINX header
    res.send('Hello World! From ' + req.headers['docker-container-id'] + " And " + process.env.HOSTNAME + " Node ID " + req.headers['x-node-id']);
    console.log("-----------------")
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
