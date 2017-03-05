console.log('Starting node.js');

var addNote = (title,body) => {
	console.log('Adding a note',title,body);
}

var getAll = () => {
	console.log('Getting all the notes');
}

var getNote = (title) => {
	console.log('Reading note', title);
}

var removeNote = (title) => {
	console.log('Removing the note', title);
}

module.exports = {
	addNote: addNote, // or use addNote only
	getAll,
	getNote,
	removeNote
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
