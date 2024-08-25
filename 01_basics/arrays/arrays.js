


const arr = [4,5,4,7,6,2,9];
// console.log(arr[2]);

const myheros = ["shaktiman", "naagraj"];

const myarr2 = new Array(7, 8, 6, 3, 4);
// console.log(myarr2);

//methods ***********

myarr2.push(78);
// console.log(myarr2);

myarr2.pop();
// console.log(myarr2);

myarr2.unshift(9);
// console.log(myarr2);

myarr2.shift();
// console.log(myarr2);

// console.log(myarr2.includes(20));

// console.log(myarr2.indexOf(8));

const newarr = myarr2.join();
// console.log(newarr);

// console.log(typeof newarr);


// slice ******************   splice

console.log("A", myarr2);

// const myn1 = myarr2.slice(1,3);
// console.log(myn1);

// manipulates original array
const myn1 = myarr2.splice(1,3);
console.log(myn1);

console.log("B", myarr2);

// 3:31
















