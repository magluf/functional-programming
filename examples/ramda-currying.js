const R = require('ramda');

const greet = (greeting, name) => `${greeting}, ${name}!`;
console.log(greet('Good morning', 'Joe'));

const curriedGreet = R.curry(greet);
console.log(curriedGreet('Good afternoon')('James'));
console.log(curriedGreet('Good morning', 'Joe')); // passing the paremeters as a regular, non-curried function still works.

const eveningGreeting = curriedGreet('Good evening'); // partial application.
console.log(eveningGreeting('Fred'));
