var square = (x) => x*x ; // can also be written as var square = x => x*x; drop of () when only 1 arg is required.

console.log(square(9));

//complex example, arrow function within an object:

var user = {
  name : 'Rupal',
  sayHi: () => {
    console.log(arguments);
    //console.log(`Hi`);
    console.log(`Hi.I am ${this.name}`); //this wont work here in arrow fx. o/p : Hi I am undefined.
  },
  //new method using a diff ES6 feature; its a regular function but function kyword is not required Here
  sayHiAlt () {
    console.log(arguments); //object 'arguments' with array like properties : This doesnt work in arow function.
    console.log(`Hi.I am ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();
user.sayHiAlt(1,2,3); //passing arguments to function
user.sayHi(1,2,3);

/* Output when argument is called in arrow function :
// we are actually getting global arguments variable, this is argument variable for wrapper function.
'1':
 { [Function: require]
   resolve: [Function: resolve],
   main:
    Module {
      id: '.',
      exports: {},
      parent: null,
      filename: '/Users/sanketgupta/Nodejs/notes-node/playground/arrow-function.js',
      loaded: false,
      children: [],
      paths: [Object] },
   extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
   cache: { '/Users/sanketgupta/Nodejs/notes-node/playground/arrow-function.js': [Object] } },
'2':
 Module {
   id: '.',
   exports: {},
   parent: null,
   filename: '/Users/sanketgupta/Nodejs/notes-node/playground/arrow-function.js',
   loaded: false,
   children: [],
   paths:
    [ '/Users/sanketgupta/Nodejs/notes-node/playground/node_modules',
      '/Users/sanketgupta/Nodejs/notes-node/node_modules',
      '/Users/sanketgupta/Nodejs/node_modules',
      '/Users/sanketgupta/node_modules',
      '/Users/node_modules',
      '/node_modules' ] },
'3': '/Users/sanketgupta/Nodejs/notes-node/playground/arrow-function.js',
'4': '/Users/sanketgupta/Nodejs/notes-node/playground' }
*/
