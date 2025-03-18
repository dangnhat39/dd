const { displayProducts } = require('./baitap1');

let outputData = [];
const storeLog = inputs => (outputData.push(inputs));
console["log"] = jest.fn(storeLog);
