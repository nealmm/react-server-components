const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.resolve(__dirname, '../dist')));

server.listen(3003, () => console.log('Running server...'));
