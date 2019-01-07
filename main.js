#!/usr/bin/env node
const program = require('commander');

let dieValue;
let timesValue;

program
  .version('1.0.0')
  .arguments('<die> <times>')
  .action((die, times) => {
    dieValue = die;
    timesValue = times;
  })
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}

const Dice = require('./src/dice.js');

const sides = Dice.sidesFromName(dieValue);
const rollingDie = new Dice(sides);
const rolls = rollingDie.roll(timesValue);

rolls.forEach((roll, i) => {
  // eslint-disable-next-line no-console
  console.log('Roll %s: %s', i + 1, roll);
});
