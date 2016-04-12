"use strict";

var settings = require('./settings.js');
var smoothstep = require('smoothstep');
var marker = require('./marker.js');

module.exports = {
    Table: function Table(tableId) {
        this.tableId = tableId;
        this.markers = [];
        
        for (let i=0; i < settings.MARKERS; i++) {
            this.markers.push(new marker.marker(this.tableId, i, 0.01))
        }    

        this.update = function() {
            
            for (let j=0; j < settings.MARKERS; j++) {
                
                if (0.9 < Math.random()) {
                    this.markers[j].mover = true;
                    console.log('table ' + tableId + ' marker ' + j);
                }
            }
            
            /*
            let markerIdsToUpdate = [0, 1, 2, 3, 4, 5];
            for (let i = 0; i < markerIdsToUpdate.length; i++) {
                // mark most as non movers
                if (0.9 > Math.random()) {
                    markerIdsToUpdate[i] = -1;
                }
            } 
            */
                       
        }
        
        this.moveTo = function() {
            //var res = smoothstep(from, to, delta);           
        }
        function random(low, high) {
            return Math.random() * (high - low) + low;
        }
    }
    
}