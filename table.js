var settings = require('settings.js');
var smoothstep = require('smoothstep.js');
import Marker from 'marker.js';

export default class Table {
    constructor(tableId) {
        this.tableId = tableId;
        this.markers = [];
        for (let i = 0; i < settings.MARKERS; i++) {
            markers.push(new Marker(tableId, i));
        }
    }

    update() {
        let markerIdsToUpdate = [0, 1, 2, 3, 4, 5];
        for (let i = 0; i < markerIdsToUpdate.length; i++) {
            // mark most as non movers
            if (0.9 > Math.random()) {
                markerIdsToUpdate[i] = -1;
            }
        }
    }

    moveTo(position) {
        var res = smoothstep(from, to, delta);
    }
}