var smoothstep = require('smoothstep');

export default class Marker {
    constructor(tableId, markerId, minMove) {
        this.tableId = tableId;
        this.markerId = markerId;
        this.currentPosition = [0, 0, 0];
        this.previusPosition
        this.translation = [0, 0, 0];
        this.freq = Math.min(1, Math.random() + minMove);
    }
    
    get position() {
        return this.currentPosition;
    }
    
    updateTarget() {
        
    }
    
    moveTo(position) {
        var res = smoothstep(from, to, delta);
    }
};
