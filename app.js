'use strict';
const number = process.argv[2] || 0;
let sum =0;
for (let i = 1; i <=number; i++){
    sum = sum + i;//0,1,3,6,10 sum +=i
}
console.log(sum);