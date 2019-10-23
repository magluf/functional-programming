const R = require('ramda');

const greet = (greeting, name) => `${greeting}, ${name}!`;
console.log(greet('Good morning', 'Joe'));

const Rgreet = R.curry(greet);
console.log(Rgreet('Good afternoon')('James'));
