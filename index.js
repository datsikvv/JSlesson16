// const converter = require('./converter');

// console.log(converter.convertToUa(100));
// console.log(converter.convertToUs(100));

// ---------------------------------

const Converter = require('./converter');
const baseCurrencyUs = 25;

const conv = new Converter(baseCurrencyUs);
console.log(conv.convertToUa(100));
console.log(conv.convertToUs(100));


