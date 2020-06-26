const chalk = require('chalk');
const assert = require('assert');
const { map, forEach } = require('./hidash');

const warning = chalk.bold.red;
const ok = chalk.inverse.green;
const hl = chalk.bold.green;

//---------------------------------------------------
//! Tudo aqui está de acordo com uso da library mocha.
//! basta alterar a função 'teste' para 'it'
//---------------------------------------------------

const test = (desc, fn) => {
  try {
    console.log(hl('-----', desc));
    fn();
  } catch (err) {
    console.log(warning(err.message));
  }
};

test('Testing forEach...', () => {
  let sum = 0;
  forEach([1, 2, 3], value => {
    sum += value;
  });

  if (sum !== 6) console.log(warning('forEach: Expected 6'));
});

test('Testing forEach usando assertions do NodeJS', () => {
  let sum = 0;
  forEach([1, 2, 3], value => {
    sum += value;
  });

  assert.strictEqual(sum, 6, 'Hi from Testing Assertion nodejs. Expected 6');
});

test('Testing mapFunc...', () => {
  const mapArr = [1, 2, 3];
  const mapTest = map(mapArr, item => item * 3);

  if (mapArr.join() !== '1,2,3' || mapTest.join() !== '3,6,9')
    console.log(warning('map Function: Expected Arrays [1,2,3], [3,6,9]'));
});
