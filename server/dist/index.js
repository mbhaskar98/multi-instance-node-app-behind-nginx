"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    console.log("----New reqest----");
    console.log(process.env.HOSTNAME); // prints the container ID
    console.log(req.headers['docker-container-id']); // prints the Docker container ID from NGINX header
    // console.log(req.headers['Docker-Container-ID']);// prints the Docker container ID from NGINX header
    res.send('Hello World!');
    console.log("-----------------");
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map