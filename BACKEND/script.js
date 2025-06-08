let n = 5;

for (let i = 0; i < n; i++){
    console.log(i);
}
// const figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import cryptoRandomString from 'crypto-random-string';
console.log(cryptoRandomString({length: 10}));