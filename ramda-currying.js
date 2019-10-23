const R = require('ramda');

const greet = (greeting, name) => `${greeting}, ${name}!`;
console.log(greet('Good morning', 'Joe'));

const Rgreet = R.curry(greet);
console.log(Rgreet('Good afternoon')('James'));
console.log(Rgreet('Good morning', 'Joe')); // passing the paremeters as a regular, non-curried function still works.

const eveningGreeting = Rgreet('Good evening'); // partial application.
console.log(eveningGreeting('Fred'));
