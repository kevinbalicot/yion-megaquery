# Yion-megaquery

Megaquery library for yion

## Usage

Installation
```bash
$ npm install --save yion-megaquery
```

Usage
```javascript
const { createApp, createServer } = require('yion');
const { createMegaqueryServer } = require('yion-megaquery');

const app = createApp();
const server = createServer(app);
const socketServer = createMegaqueryServer(app, { host ..., user ..., dbname ..., password ..., port ... });

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8').send('Hello world!');
});

socketServer.on('foo', (event, server) => {
    server.query({
        type: 'find',
        collection: 'foo',
        params: {}
    }, event);
});

server.listen(8080);
```
