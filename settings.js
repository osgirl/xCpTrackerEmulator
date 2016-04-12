// configuration
module.exports = {
    TABLES: 5,
    MARKERS: 6,
    
    // MQTT broker instance to use
    MqttBroker: 'mqtt://146.185.136.237',
    
    // Use static address and don't lookup using MQTT
    UseStaticServerUri: false,
    
    StaticPort: '666',
    
    // Address to use if UseStaticServerUri == true
    StaticServerUri: '192.168.2.16',
    
    // string ex: '192.168.1.10' or 'www.cp2015.nl'
    ServerUriTopic: 'cp2015/server-ip',
    
    // Json {IP_ADDRESS: <String>, TIME_STAMP: <Number>, TRACKER_STATE: <String>}
    TableStatusTopic: 'cp2015/info',
    
    // Either 'on' or 'off' plain string
    TrackerRunTopic: 'cp2015/run',
    
    // Interval at witch the table updates its state on the broker
    TablePublishInterval: 10000,   
}