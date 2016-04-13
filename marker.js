"use strict";

var smoothstep = require('smoothstep');
var settings = require('./settings.js');
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

        // Set random start position within boundry for each marker
        for (let i = 0; i < 2; i++) {
            this.currentPosition[i] = random((-1) * settings.TableRadius, settings.TableRadius);
        }
        
        // Preforms move on marker.
        // compares current position with target position (x,y,z) and moves towards accordingly with minMove distance / update
        // When goal is reached
        this.move = function() {
            var reachedDestination = 0;
            for (let i = 0; i < 3; i++) {

                if (Math.abs(this.currentPosition[i] - this.targetPosition[i]) > (minMove * 1.5)) {
                    if (this.currentPosition[i] > this.targetPosition[i]) {
                        this.currentPosition[i] = this.currentPosition[i] - minMove;
                    } else {
                        this.currentPosition[i] = this.currentPosition[i] + minMove;
                    }
                } else {
                    reachedDestination++;
                }
            }
            if (reachedDestination == 3) {
                this.mover = false;
            }
        }

        this.updateTarget = function() {
            for (let i = 0; i < 2; i++) {
                this.targetPosition[i] = random((-1) * settings.TableRadius, settings.TableRadius);
            }
            this.targetPosition[2] = random((-1) * settings.TableRadius, settings.TableRadius);
        }

        // Get random number between 2 bounderies
        function random(low, high) {
            return Math.random() * (high - low) + low;
        }
    }
}