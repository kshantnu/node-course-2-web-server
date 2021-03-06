/* const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
    debugger;
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
    } else {
        console.log('Note title taken');
    }
} else if(command === 'remove') {
    var note = notes.removeNote(argv.title);
    if(note) {
        console.log('Note removed');
    } else{
        console.log('Note not found');
    }
} else if(command === 'get') {
    const note = notes.getNote(argv.title);
    const message = note ? note : 'not found';
    console.log(message);
}
*/

const request = require('request');
const yargs = require('yargs');
const argv = yargs
    .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetch weather for',
        string: true
    }
})
    .help()
    .alias('help', h)
    .argv;
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?key=QB870AX4RHNKwSQ2pUnljlGlZq' +
            'dDcDjw&address=london',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, null, 4));
})