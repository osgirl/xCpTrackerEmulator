"use strict";
var program = require('commander');
var dgram = require('dgram');
var settings = require('./settings.js');
var importtable = require('./table.js');
var importmarkers = require('./marker.js');

var buf = new Buffer(36);

console.log('Table session emulator');

program
    .option('-s, --server <IP>', 'IP of server')
    .option('-t, --tables <num tables>', 'Number of tables in session')
    .option('-a, --activity <activity>', 'Relative activity of markers')

.parse(process.argv);

console.log(' server: %j', program.server);
console.log(' number of tables: %j', program.tables);
console.log(' activity: %j', program.tables);

var client = dgram.createSocket('udp4');
var myTables = [];
for (let i = 0; i < settings.TABLES; i++) {
    myTables.push(new importtable.Table(i));
    console.log(myTables[0]);
}

setInterval(function() {
    // Set new destination every 10 s
    console.log('Update destination');
    for (let i = 0; i < settings.TABLES; i++) {
        myTables[i].update();
    }

    // Update every 100ms
    setInterval(function() {
        // Reapeat over tables
        for (let i = 0; i < settings.TABLES; i++) {

            for (let j = 0; j < settings.MARKERS; j++) {
                
                if (myTables[i].markers[j].mover)
                {
                    // Move the marget marker!!
                    myTables[i].markers[j].move();
                    
                    
                    // Create the package
                    
                    // Table ID
                    buf.writeUInt16LE(i, 0);
                    // Marker ID - random between 0-4                 
                    buf.writeUInt16LE(j, 2);
                    // rotation - set rotation to 0
                    buf.writeFloatLE(0, 4);
                    buf.writeFloatLE(0, 8);
                    buf.writeFloatLE(0, 8);
                    // translation
                    buf.writeFloatLE(myTables[i].markers[j].targetPosition[0], 16);
                    buf.writeFloatLE(myTables[i].markers[j].targetPosition[1], 20);
                    buf.writeFloatLE(myTables[i].markers[j].targetPosition[2], 24);
                    
                    // time            
                    // touched

                    client.send(buf, 0, buf.length, settings.StaticPort, program.server, function(err, bytes) {
                        if (err) throw err;
                        // console.log('UDP message sent to ' + program.server + ':' + settings.StaticPort);
                    });   
                }                
            }
        }
    }, 100)
}, 10 * 1000);

function random(low, high) {
    return Math.random() * (high - low) + low;
}


// Form the message
/*
         // Read message from main project
         var marker = {
                    tableId: buf.readUInt16LE(i + 0),
                    markerId: buf.readUInt16LE(i + 2),
                    rotation: [buf.readFloatLE(i + 4), buf.readFloatLE(i + 8), buf.readFloatLE(i + 12)],
                    translation: [buf.readFloatLE(i + 16), buf.readFloatLE(i + 20), buf.readFloatLE(i + 24)],
                    time: Date.now(), //buf.readIntLE(i + 28, 8), // Hack to read a full 64 bit int doesent work in old node
                    touched: false // modified later on
                }
        */
//
//