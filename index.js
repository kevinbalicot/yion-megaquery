const { SocketServer } = require('megaquery-js/server');

const createMegaqueryServer = (server, app, options, callback) => {
    const socketServer = new SocketServer(Object.assign({ server }, options), callback);

    app.requester = socketServer.requester;

    return socketServer;
}

module.exports = { createMegaqueryServer };
