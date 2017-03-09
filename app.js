//console.log('Starting the app.js');

const fs = require('fs'); // Requiring fs module
//const os = require('os'); // Requiring os module
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js'); // Requiring our own file

const titleOptions = {
	describe : 'Title of note', //Just a description of this property
	demand : true, // By default it is false, but we'll set it to true resulting in title being a required argument to add
	//demand tells yargs whether or not this argument is required.
	alias: 't'
}
const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}

const argv = yargs
.command('add','Add a new Note',{
	title: titleOptions, body: bodyOptions
	/*title : {
		describe : 'Title of note',
		demand : true,
		alias: 't'
	},
	body : {
		describe: 'Body of note',
		demand: true,
		alias: 'b'
	}*/
})
.command('list', 'List all the notes')
.command('read', 'Read single note',{
	title: titleOptions
})
.command('remove','Removes single note',{
	title : titleOptions
})
.help()
.argv;
//var command = process.argv[2]; This is same as below:
var command = argv._[0];
//console.log('Command: ', command);
//console.log('Prcoess',process.argv);
//console.log('Yargs',argv);

/*
console.log(process.argv);
 Output :
[ '/usr/local/bin/node', -- Points to the executable for node that was used
  '/Users/sanketgupta/Desktop/notes-node/app.js', -- Points to the app file we started
  'list' ] -- Command line arguments start
*/

if(command === 'add') {
	//console.log('Adding new note');
	var note = notes.addNote(argv.title, argv.body);
	//console.log(note);
	//if(note===undefined)
	if(note) {
	//console.log(`Note title "${argv.title}" already in use`);
	console.log('Note created');
	notes.logNote(note);
		}
	else
		//console.log('Note Created Successfully:',argv.title, argv.body);
		console.log('Note title taken already');
} else if (command === 'list') {
	var allNotes = notes.getAll(); // Doesn't take any argument since it will return all notes regardless of title
	console.log(`Printing all ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note)); //Foreach simply callbacks fx once for each item in array
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	 if(note) {
		 console.log('Note Found');
	 	 notes.logNote(note);
	 	//console.log(`Title: ${returnedNote[0].title}`); // Here we are using array because, return value from notes.filter will
		//always be an array even if that array has only one item.
		//The above code will be re-written as follows:
			//console.log(`Title: ${note.title}`);
	 		//console.log(`Body: ${note.body}`);
		// The array is returned from the previous file notes.js. This will help us reuse this console code used in add fx.
	} else console.log(`No note with title ""${argv.title}" exists`);
	//console.log('Reading note');
} else if (command === 'remove') {
	//notes.removeNote(argv.title);
	//console.log('Removing note');
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note was not found';
	console.log(message);
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
