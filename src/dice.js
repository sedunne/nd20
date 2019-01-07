const rando = require('random');

module.exports = class Dice {
  constructor(sides) {
    this.sides = sides;
  }

  static sidesFromName(name) {
    switch (name) {
      case 'd4':
        return 4;
      case 'd6':
        return 6;
      case 'd8':
        return 8;
      case 'd10':
        return 10;
      case 'd12':
        return 12;
      case 'd20':
        return 20;
      case 'd00':
      case 'd100':
        return 100;
      default:
        throw new Error('Invalid Dice Provided!');
    }
  }

  roll(times) {
    const rolls = [];
    for (let r = 0; r < times; r += 1) {
      rolls.push(rando.int(1, this.sides));
    }
    return rolls;
  }
};
