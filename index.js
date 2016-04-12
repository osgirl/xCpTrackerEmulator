var settings = require('settings.js');
var program = require('commander');
import Table from 'table.js';

console.log('Table session emulator');

program
    .arguments('<serverIP>')
    .option('-t, --tables <tables>', 'Number of tables in session')
    .option('-a, --activity <activity>', 'Relative activity of markers')
    .action(function(file) {
        console.log('serverIP: %s, tables: %d, activity: %d',
            serverIP, program.tables, program.activity);
    })
    .parse(process.argv);