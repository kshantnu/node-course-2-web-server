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

const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
   })
    .help()
    .alias('help', h)
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
axios
    .get('geocode url')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });