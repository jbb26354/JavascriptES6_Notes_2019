

/* 
  literals don't have properties and methods per se, but pass by value
  objects have properties and methods but pass by reference
*/

let strLiteral = 'uhhh';
let objStrLiteral = String('uhhh');
let intLiteral = 1;
let objIntLiteral = Number(1);
console.log(strLiteral);
console.log(objStrLiteral);
console.log(intLiteral);
console.log(objIntLiteral);

// let and const implement local scoping for variables that are assigned literals; 
// no qualifier or var means no scoping at all, global scope, EXCEPT for VAR variables
// that are assigned functions. The function has local scope.

// destructuring arrays: pulling the elements out into separate entities
// destructuring includes for-of, swapping, regexp
const [x,y] = [1,2];
// using destructuring to swap
let v = 1, w = 2;
[v,w] = [w,v];
// regular expression as source
const [a, b, c, d] = 'one two three'.match(/\w+/g);
// destructure all vowels using regexp
const [e, f, g] = 'one two three'.match(/[aeiou]/);

// using the join() method of arrays to destructure
let arrJoin = new Array();
arrJoin = ['one', 'two', 'three'];
flatfileCSV = arrJoin.join(',');
console.log(flatfileCSV);
// destructuring a multidimensional array: tripleDots
const summer = ['Jun', 'Jul', 'Aug']; 
const winter = ['Dec', 'Jan', 'Feb']; 
const nested = [ summer, winter ]; 
console.log(nested);
console.log([...summer, ...winter]);

// pop and push implement arrays as stacks, shift and unshift implement arrays as queues
// merge concatenates arrays

// slice() copies items into a subarray, splice() cuts items into a subarray

// indexOf() finds items in an array - position or -1
// includes() returns true if the items is in the array otherwise false

// sets - clear, delete methods
const setNewSet = new Set();
// repeating dot to repeat method
setNewSet.add(2).add(3).add(4);
// creating a multidimensional set in one go
const setMultiDim = new Set([1,2,3], [4,5,6], [7,8,9]);
// no, not length - it's called size
console.log('the size of this thing is:', setMultiDim.size);
// tripledotting to convert a set (below) into an array - look what happens
const arrSetMultiDim = [...setMultiDim];
console.log(arrSetMultiDim);
// sets by default are not garbage collected. WeakSets are: Only non-primitive data types can be added to weak sets.
const weakCool = new WeakSet([new Array(1,2,3)]);
// but what use is it then - undefined? the array values are inaccessible - but the array can be removed
console.log(weakCool[0]);

// all maps are objects. Maps are the javascript equivalent of python dictionaries. their methods are get, has, delete
const mapNumerals = new Map();
mapNumerals.set(1,'I');
mapNumerals.set(2, 'II').set(3, 'III');
console.log(mapNumerals)
// tripledotting to convert to multidimensional array. This could then be deconstructed
console.log([...mapNumerals]);
// if you want your map garbage collected
const weak = new WeakMap();

// looping over sets and maps
for(const mappy of mapNumerals) { console.log(mappy); }

// ternaries
const n = 5; 
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');


// ==============================================================
// functional programming
// ==============================================================

const goodbye = function bye(){ console.log('Goodbye World!'); };
console.log(goodbye(), goodbye);

const goodbyeReturn = function bye(){ return 'Goodbye World!'; };
console.log(goodbye(), goodbye);

// arrow functions (anonymous functions)
const square = x => x*x;
const add = (x,y) => x + y;
console.log(square(4));
console.log(add(4,5));

//SUBs and functional collections
const subUsingPrint = () => console.log('Hello World!');
const subUsingReturn = () => { return 'Goodbye World!'};
const arrFunctions = new Array(subUsingPrint(), subUsingReturn());
console.log(subUsingPrint());
console.log(subUsingReturn());
console.log(arrFunctions[0]);

/* Hoisting
  Variable declarations that use the var keyword are automatically moved to the top of the current scope. Variable assignment is not hoisted, however. 
  This means that a variable assigned at the end of a function will have a value of undefined until the assignment is made. Functions are always hoisted.
*/

// CALLBACKS. the function 'numerically' is the callback, a function that is used as a parameter.

function numerically (a,b) 
{ 
  if (a < b){return -1; } 
  else if (a> b) {return 1; } 
  else {return 0; } 
}
console.log([1,3,12,5,23,18,7].sort(numerically));

// the functional programming equivalent of ForEach'ing over a collection in VB
['Red', 'Green', 'Blue'].forEach( (color,index) => console.log(`Color at position ${index} is ${color}`) );

const cube = x => x*x*x;
console.log([1,2,3].map(cube));
// WTF??
const concat = (x,y) => String.toString(x) + String.toString(y); 
console.log(['the ', 'end'].map(concat));
//OK - this works
console.log(['red','green','blue'].map( color => `<p> ➥ ${color.toUpperCase()}</p>`));

// reduce(). Check this out
let intInitialValue = -2;
console.log([1,2,3,4,5].reduce( (acc,val) => acc + val,intInitialValue));

// using filter() with a boolean callback - returns even numbers then odd numbers
console.log([ 2, 7, 6, 5, 11, 23, 12 ].filter(x => x%2 === 0 )); 
console.log([ 2, 7, 6, 5, 11, 23, 12 ].filter(x => x%2 === 1 )); 

// chaining iterators together
console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ));


/* 
  OBJECTS
  - methods: hasOwnProperty, Object.keys(object), Object.values(object), delete
  - operators: this
  - objects can be nested, so whole object models can be created. Unfortunately, they are mutable (see below)
  - objects can be used as parameters to functions, so methods of object parameters are considered callbacks
*/

//properties
const name = 'Iron Man'; 
const realName = 'Tony Stark';

//methods
const shootLaserBeam = () => console.log('bzzzzzzt!!');
//member with default values for input parameters
const introduceMe = (greeting='Hello',name='IronMan',age=38) => console.log(`${greeting}! My name is ${name} and I am ${age} years old.`);

//Coderunner does not support this way of object creation: const ironMan = ( name: name, realName: realName };
//...but it supports this way:
const ironMan = { name, realName, shootLaserBeam, ['catch' + 'Phrase']: 'I love you 3000!', introduceMe };
//accessing a property
console.log(ironMan.name);
//accessing a method
ironMan.shootLaserBeam();
//accessing a computed property key
console.log(ironMan.catchPhrase)
//brackets work too
console.log(ironMan['catchPhrase'])

//the 'in' operator
if('catchPhrase' in ironMan){console.log("it's in there");}
if('fly' in ironMan){}else{console.log("nah it's not there");}

let superman = ironMan;

// iterating over an object's members using 'in'
for(const key in superman) { console.log(key + ": " + superman[key]); }

// iterating over an object's members using destructure
for(const [key,value] of Object.entries(superman)) { console.log(`${key}: ${value}`); }

/*
  OBJECTS ARE MUTABLE EVEN WITH USE OF CONST OPERATOR! (member values can change on the fly!
  and  because objects are nestable, a member of an object - even a collection - can be mutated on-the-fly.
*/

ironMan.fly = () => console.log('wheeeeeeee!');
ironMan.fly();
ironMan.fly = () => console.log('even methods are mutable!');
ironMan.fly();
ironMan.introduceMe();
ironMan.introduceMe('Hi', 'Superman', 35);
//parameters are positional and literals are still immutable
ironMan.introduceMe(greeting='Ugh!', 'Hulk', age=30);

// NAMESPACE OBJECTS

// basic pattern
const namMyMathAPI = 
{
  //this is the only way you can set a constant property in this pattern
  PI(){return 3.414;}
  ,
  square(x) 
  {
    return x * x; 
  }, 
  mean(array,callback) 
  { 
    if (callback) { array.map( callback );} 
    const total = array.reduce((a, b) => a + b); 
    return total/array.length; 
  }
};

// object literal pattern (all members public without a closure)
const namLiteral = 
{
  id: 0
  , 
  name: function(){return 'literal';}  
  , 
  PI: 3.14141414
}
console.log(namLiteral.PI);
console.log(namLiteral.name());

//throw new Error('Something has gone badly wrong!');

/*

The call() method can be used to set the value of 'this' inside a function to an object that is provided as the first argument.
The apply() method works in the same way, except the arguments of the function are provided as an array, even if there is only one argument.

Memoization is a useful feature that provides result caching. If a function takes some time to compute a return value, we can save the result 
in a cache property. Then if the same argument is used again later, we can return the value from the cache, rather than having to compute the result again.

An Immediately Invoked Function Expression – or IIFE (pronounced “iffy”) – is an anonymous function that, as the name suggests, is invoked 
as soon as it’s defined. Placing any code that uses a temporary variable inside an IIFE will ensure it’s only available while the IIFE 
is invoked, then it will disappear. IIFEs are deprecated in ES6, having been replaced by destructuring.

Functional programming uses pure functions as the building blocks of a program.

A closure is a reference to a variable that was created inside the scope of another function, but is then kept alive and used in another 
part of the program. A closure is formed when the inner function is returned by the outer function, maintaining access to any variables 
declared inside the enclosing function.

A Partial application takes advantage of closure scope in order to fix parameters. It only applies SOME of the parameters.

Currying allows a function with multiple arguments to be translated into a sequence of functions, thus allowing us to create parity with other function signatures. This is just clever use of a higher order function - a 'deconstruction'. 

Example:

let cart = [
  { name: "Drink", price: 3.12 },
  { name: "Steak", price: 45.15 },
  { name: "Drink", price: 11.01 }
];

const drinksGreaterThan = cost => obj => obj.name === "Drink" && obj.price > cost;
let result = cart.filter(drinksGreaterThan(10));

*/

/*
  Advanced, niche techniques
  
  - Init-Time Branching using IIFEs
  - Event-driven Asynchronous Programming Using Callbacks
  - Promises and the Promise Class
  - the async and await keywords
  - Closures, partial applications, and currying
  
*/

// EXAMPLE CLOSURE. This pattern has superceded the old encapsulation of private variables pattern in OOP - must
// understand how this works.
function outer() 
{ 
  const outside = 'Outside!'; 
  function inner() 
  {
    const inside = 'Inside!';
    console.log(outside);
    console.log(inside); 
  } 
  console.log(outside); 
  inner(); 
}
outer();

// example partial application function
const partialApply = (fn, ...fixedArgs) => 
{
  return function (...remainingArgs) 
  {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};
// here, you only pass the number 5 via a, then pass the number 'bumpUp' via the b parameter later. Here, 
// bumpUp is local, but it could be provided by a promise from a service somewhere.
let bumpUp = 20;
const addIt = (a, b) => a + b;
const add10 = partialApply(addIt, bumpUp);
console.log(add10(5));

//example promise
//const wait = time => new Promise((resolve) => setTimeout(resolve, time));
//wait(3000).then(() => console.log('Hello!')); 

// example of named parameters, like in VB. They must be implemented as functional const's, not literals.
// This example uses the CALL() method
function sayHello1()
{
  return `The named parameter returns: ${ this.name }`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

console.log(sayHello1.call(clark));

// This example adds a custom greeting parameter with a default
function sayHello2(greeting='Hello')
{
  return `${ greeting }, my name is ${ this.name }`;
}
const cutie = { name: 'Cutie-Pie' };

console.log(sayHello2.call(cutie, 'How do you do'));

// This example uses the custom greeting with a collection
const theCrew = [
  {name: "Billy"},
  {name: "Bryan"},
  {name: "Topher"}
];
console.log(sayHello2.call(theCrew[0], 'Good Morning'));

// An update to the collection example: each member has multiple properties
const theCrewCustom = [
  {name: "Billy", greetin: "Hey"},
  {name: "Bryan", greetin: "What Up"},
  {name: "James", greetin: "Mornin"}
];

// Calling the collection, without Currying
console.log(sayHello2.call(theCrewCustom[2], theCrewCustom[2].greetin));

// Calling the collection, with Currying
const curryCrew = curryGreeting => obj => obj.name === "Billy";
console.log(theCrewCustom.filter(curryCrew()));

//IIFE use in ES5
let swap3 = 1;
let swap4 = 2;
(()=>{
  const temp = swap3; 
  swap3 = swap4; 
  swap4 = temp;
})();
// deprecation of IIFE with destructuring in ES6
let [swap1,swap2] = [1,2];
[swap1,swap2] = [swap2,swap1];

// Generator functions 
function* fibonacci(a,b) 
{
  let [ prev,current ] = [ a,b ];
  while(true) 
  {
    [prev, current] = [current, prev + current];
    yield current;
  }
}
const sequence = fibonacci(1,1);
console.log(sequence.next());
console.log(sequence.next());
for (intLoop of sequence) 
{
  if (intLoop > 10) break;
  console.log(intLoop);
}

// Higher order functions, closures, and callbacks

/* 
  Multiple Parenthesis trick. 
  The x to the y power function, 
  implemented using functional programming.
  First dimension is x, the base.
  Second dimension is power(x), the exponent.
*/
function power(x) 
{
  return function(power) 
  {
    return Math.pow(x,power);
  }
}
// 2 to the 5th power
console.log(power(2)(5));
// 10 to the 6th power
console.log(power(10)(6));

/* 
  Dice roller as a multiple parenthesis trick. 
  so to roll 5d6 you call: Dice(5)(6). TODO: use this as the dice rolling engine, 
  then develop a parser that will parse a string like "5d6 + 4", roll 5 6-sided dice, add 4, 
  and return the result. That code would replace dice rolling in role playing games.
*/
function Dice(numberOf)
{
  return function(Dice)
  {
    let accum = 0;
    for(intLoop = 0; intLoop < numberOf; intLoop++)
    {
      accum += Math.floor(Dice * Math.random() + 1);
    }
    return accum;
  }
}
const diceCount = 5;
const diceSides = 100;
console.log("\n**********RANDOM NUMBER GENERATOR**********\n");
console.log(diceCount + "d" + diceSides + " = ", Dice(diceCount)(diceSides));
console.log("\n\n");

/*
  AJAX using the new Fetch API.
  This is a little weird, but: no semicolon after the .then method, and the second fetch() will return BEFORE
  the Status and Redirected properties, even though those statements appear later in the code. And, the 
  second fetch() is REQUIRED or it won't work.
*/
console.log("\n********** AJAX **********\n");
const fetch = require("node-fetch");
let url = 'http://www.deckerd26354.net/sites';
console.log("Server reply:\n ");
  fetch(url)
  .then
  (
    (response) => 
    {
      if(response.ok) 
      {
        console.log("\tStatus: " + response.statusText);
        console.log("\tRedirected: " + response.redirected);
        return;
      }
    }
  )

// The following code has to be commented out or the next fetch won't work
//  fetch(url)
//  .then(response => response.text())
//  .then(text => console.log(text))
  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then( response => response.json() )
  .then( data => console.log(Object.entries(data)[0]) )
  
  
  
  
  