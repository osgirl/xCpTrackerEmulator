"use strict";

var smoothstep = require('smoothstep');
module.exports = {
    marker: function Marker(tableId, markerId, minMove) {
        this.tableId = tableId;
        this.markerId = markerId;
        this.targetPosition = [0, 0, 0];
        this.currentPosition = [0, 0, 0];        
        this.translation = [0, 0, 0];
        this.freq = Math.min(1, Math.random() + minMove);
        this.mover = false;
    
        function moveTo(params) {
            var res = smoothstep(from, to, delta);    
        }
        
        function updateTarget() {  
            currentPosition          
        }
    }        
}