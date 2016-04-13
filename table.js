"use strict";

var settings = require('./settings.js');
var smoothstep = require('smoothstep');
var marker = require('./marker.js');

module.exports = {
    Table: function Table(tableId) {
        this.tableId = tableId;
        this.markers = [];
        
        // Create markers for table and set random position
        for (let i=0; i < settings.MARKERS; i++) {
            this.markers.push(new marker.marker(this.tableId, i, 0.01))
        }    

        this.update = function() {            
            for (let j=0; j < settings.MARKERS; j++) {                
                if (0.90 < Math.random()) {
                    this.markers[j].mover = true;  
                    this.markers[j].updateTarget();                  
                    console.log('Update for table ' + tableId + ' marker ' + j);
                    console.log('New target: ' + this.markers[j].targetPosition[0])
                }
                else
                {
                    this.markers[j].mover = false;
                }
            }                       
        }
        
        function random(low, high) {
            return Math.random() * (high - low) + low;
        }
    }
    
}