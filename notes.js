//console.log('Starting node.js');

const fs = require('fs');

var fetchNotes = () => {
	try {
	var notesString = fs.readFileSync('notes-data.json');
	return JSON.parse(notesString);
	} catch(e) {
			return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}



var addNote = (title,body) => {
	//console.log('Adding a note',title,body);
	//var notes = [];
	var notes = fetchNotes();
	var note = {
		title : title, //or just title
		body
	};

// try {
// var notesString = fs.readFileSync('notes-data.json');
// notes = JSON.parse(notesString);
// } catch(e) {
//
// }

 var duplicateNotes = notes.filter((note)=> note.title === title);
 //Filter lets us manipulate array by returning true/false to keep/remove items
 console.log(duplicateNotes); //for personal use
 if(duplicateNotes.length === 0)
 {
	 notes.push(note);
	 //fs.writeFileSync('notes-data.json',JSON.stringify(notes));
	 saveNotes(notes);
	 return note;
 }
};

var getAll = () => {
	//console.log('Getting all the notes');
	return fetchNotes();
};

var getNote = (title) => {
	//console.log('Reading note', title);
	var notes = fetchNotes();
	var obtainedNote = notes.filter((note) => note.title === title);
	return obtainedNote[0];
	//console.log(obtainedNote);
};

var removeNote = (title) => {
	//console.log('Removing the note', title);
	var notes = fetchNotes(); //fetch notes
	//console.log(notes);
	/* var note = {
		title
	}; //This is not required explicitly, this can be done as below*/
	//console.log(note);
	var filteredNotes = notes.filter((note) => note.title !== title);//filter notes, removing one with the title of argument
	// As we can see, we have passed note as an argument, without it being defined. Here any other variable could have been used say x
	// and that would result in the same output. note is just a variable passed to function.
	//console.log(newNotes);
	saveNotes(filteredNotes);//save new notes array
	return notes.length!==filteredNotes.length;
};

var logNote = (note) => {
	debugger;
	console.log('--------------');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}



module.exports = {
	addNote: addNote, // or use addNote only
	getAll,
	getNote,
	removeNote,
	logNote
}

































//------------------------------------------------------------------------------------------------
//console.log(module); //variable module provides bunch of info. Remove comment to check what it does.
//module.exports.age = 27; // Setting a property named age to exports object
//------------------------------------------------------------------------------------------------
/*
module.exports.addNote = () => {
	console.log('addNote');
	return 'New Note';
};
*/
//------------------------------------------------------------------------------------------------
/*
//creating a new function to add two numbers
module.exports.add = function (a,b) { // it can be written as error function also = (a,b) {}
return a+b;
}
*/
//------------------------------------------------------------------------------------------------
