// var mqtt = require('mqtt');
// var url = 'mqtt://test.mosquitto.org';
// var client = mqtt.connect(url, {
// 	clientId: 'publisher'
// });

// client.on('connect', function () {
//     console.log('Connected successfully');
//     client.publish('testTopic/test_ack', 'Test data', function() {
//         console.log('published');
//         client.end();
//     });
// });

// client.on('error', function(error) {
//     console.log('error', error);
// });

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://iot.eclipse.org', { clientId: 'bgtestnodejs', protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout: 1000, debug: true,  })

client.on('connect', function () {
	console.log('connected');
	client.subscribe('test_ack', function (err) {
		if (!err) {
			client.publish('test_ack', 'Hello mqtt')
		}
	})
});

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(message.toString())
	client.end()
})

client.on('error', function(){
    console.log("ERROR")
    client.end()
})