console.log('Starting the app.js');

const fs = require('fs'); // Requiring fs module
//const os = require('os'); // Requiring os module
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js'); // Requiring our own file

const argv = yargs.argv;
//var command = process.argv[2]; This is same as below:
var command = argv._[0];
console.log('Command: ', command);
//console.log('Prcoess',process.argv);
console.log('Yargs',argv);

/*
console.log(process.argv);
 Output :
[ '/usr/local/bin/node', -- Points to the executable for node that was used
  '/Users/sanketgupta/Desktop/notes-node/app.js', -- Points to the app file we started
  'list' ] -- Command line arguments start
*/

if(command === 'add') {
	//console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll(); // Doesn't take any argument since it will return all notes regardless of title
	//console.log('Listing all notes');
} else if (command === 'read') {
	notes.getNote(argv.title);
	//console.log('Reading note');
} else if (command === 'remove') {
	notes.removeNote(argv.title);
	//console.log('Removing note');
} else {
	console.log('Command not Recognized');
}
























//------------------------------------------------------------------------------------------------

// var filteredArray = _.uniq(['Rupal', 1, 'Rupal', 1, 2, 3, 3,4]);
// console.log(filteredArray);


//------------------------------------------------------------------------------------------------
// console.log(_.isString('Rupal'));
// console.log(_.isString(4));


//------------------------------------------------------------------------------------------------
/*
var res = notes.addNote();
console.log(res); // For printing the value of returned variable from addNote() frunction
*/
//------------------------------------------------------------------------------------------------
//call to the function to add two numbers
/*
var sum = notes.add(5,6);
console.log(`The sum of numberts 5 and 6 is ${sum}`);
*/
/* Otherwise use :
console.log('Result :', notes.add(9,-2));
*/

//------------------------------------------------------------------------------------------------
/*

var user = os.userInfo(); // Requiring only the userinfo out of many available functions from os module.

//fs.appendFile('greetings.txt','Hello ' + user.username + '!');
fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`);
// use tick operator (accessed via the tilde keyboard key) for including a js variable directly in the string format. The notes.age is being fetched from another file

*/
//------------------------------------------------------------------------------------------------
