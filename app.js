const fs = require('fs');
const moment = require('moment');

let data = fs.readFileSync(__dirname + '/data.json', 'utf8');

console.log(data);

console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // September 19th 2021, 10:36:29 pm
console.log(moment().format('dddd'));                    // Sunday
console.log(moment().format("MMM Do YY"));               // Sep 19th 21
console.log(moment().format('YYYY [escaped] YYYY'));     // 2021 escaped 2021
console.log(moment().format());                         

