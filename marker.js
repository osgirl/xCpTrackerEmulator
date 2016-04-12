"use strict";

var smoothstep = require('smoothstep');
module.exports = {
    marker: function Marker(tableId, markerId, minMove) {
        this.minMove = minMove;
        this.tableId = tableId;
        this.markerId = markerId;
        this.targetPosition = [0, 0, 0];
        this.currentPosition = [0, 0, 0];
        this.translation = [0, 0, 0];
        this.freq = Math.min(1, Math.random() + minMove);
        this.mover = false;

        this.move = function() {            
            var x = smoothstep(this.currentPosition[0], this.targetPosition[0], this.minMove);            
            var y = smoothstep(this.currentPosition[1], this.targetPosition[1], this.minMove);            
            var z = smoothstep(this.currentPosition[2], this.targetPosition[2], this.minMove);
            console.log(x);
            this.currentPosition[0] = x;
            this.currentPosition[1] = y;
            this.currentPosition[2] = z;                                  
        }

        this.updateTarget = function () {
            this.targetPosition[0] = random(-0.5, 0.5);
            this.targetPosition[1] = random(-0.5, 0.5);
            this.targetPosition[2] = random(-0.5, 0.5);
        }
        
         function random(low, high) {
            return Math.random() * (high - low) + low;
        }
    }
}