const config = require('config');
const Server = require('socket.io');
const authenticator = require('../middlewares/websocketAuthenticator');
const mqtt = require('../mqtt/main');

const websocket = new Server();

websocket.use(authenticator);

websocket.on('connection',  (socket) => {
    const user = socket.handshake.query.user;
    const groupId = socket.handshake.query.groupId;
    console.log("Novo usuario conectado ao WS:" + user.id)

    socket.join(groupId);

    socket.on('publish', (data) => {
        const device = mqtt.subscribes[data.deviceId];
        console.log(device);
    });
});

module.exports = websocket;