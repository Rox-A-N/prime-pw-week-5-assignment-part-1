console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  X - Give the object a 'firstName & (separate) 'lastName' property
  X - Give it a boolean 'hasSiblings' property
  X - Give it  a numeric 'shoeCount' property
  X - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Roxanne',
  lastName: 'Niederkorn',
  hasSiblings: true,
  shoeCount: 8,   // originally I added + 1 shoes here instead of in the console.log
  favThreeFoods: ['chocolate', 'tamales', 'apple chips']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  X - Create a variable called fullName 
  X - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  X - Console.log fullName
*/
let fullName = (me.firstName + (' ') + me.lastName)

console.log('My name is: ' ,fullName);



/* 3. Nested arrays
  X - Console.log your first favorite food
  X - Console.log your last favorite food 
*/
console.log('One of my favorite foods is: ' ,me.favThreeFoods[[0]]);
console.log('My final favorite food is: ' ,me.favThreeFoods[me.favThreeFoods.length - 1]);


/* 4. Change a property of an existing object.
  X - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('I have' , me.shoeCount, 'pairs of shoes.');

//let newShoeCount = (me.shoeCount + 1);    this didn't work the way I hoped after doing the next exercise(*5)
console.log('I now have', me.shoeCount + 1, 'pairs of shoes.')

/* 5. Add a new property to an existing object.
  X - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
 X - Console.log your object
*/
me.favoriteColor = 'Purple';
console.log(me.favoriteColor);
