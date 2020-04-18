const http = require('http');
const express = require('express');

const resourcePath = process.argv.length > 2 ? process.argv[2] : './';
const port = process.argv.length > 3 ? parseInt(process.argv[3]) : 8080;

const app = express();

app.use(express.static(resourcePath, {}));

app.listen(port, () => console.log("MPD Album Art Server listening on port "+port+" resource path = ["+resourcePath+"]"))
