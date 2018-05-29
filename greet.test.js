const greet = require('./greet');

test('greets user', () => {
  expect(greet('Ana')).toEqual('Hello Ana!');
})