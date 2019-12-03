const mqttServer = require('mqtt-server');

const subscribes = {};

const host = {
    mqtt: 'tcp://localhost:1883'
};

const options = {
    emitEvents: true
};

const events = (device) => {
    const websocket = require('../websocket/main');

    device.connack({
        returnCode: 0
    });

    device.on('publish', (packet) => {
        console.log(packet);
        const payload = packet.payload.toString();
        const data = JSON.parse(payload);
        websocket.sockets.in(data.groupId).emit(data.deviceId, data);
    });

    device.on('subscribe', (packet) => {
        console.log(packet);
        subscription = packet.subscriptions[0];
        subscribes[subscription.topic] = device;
    });
};

const mqtt = {
    subscribes: subscribes,
    server: mqttServer(host, options, events)
};

module.exports = mqtt;