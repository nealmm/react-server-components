const express = require('express');
const fs = require('fs');
const path = require('path');
const { renderToPipeableStream } = require('react-server-dom-webpack/server');
const { createElement } = require('react');

const reactRegister = require('react-server-dom-webpack/node-register');
const babelRegister = require('@babel/register');

reactRegister();
babelRegister({
  ignore: [/node_modules/],
  plugins: ['@babel/transform-modules-commonjs']
});

const App = require('./components/App.jsx').default;
const manifest = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dist/react-client-manifest.json'), 'utf-8'));

const server = express();

server.use(express.static(path.resolve(__dirname, '../dist')));

server.get('/react', (_, response) => {
    const { pipe } = renderToPipeableStream(createElement(App), manifest);
    pipe(response);
});

server.listen(3003, () => console.log('Running server...'));
