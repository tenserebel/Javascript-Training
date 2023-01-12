// Using let
// console.log(a);
// let a;
// a = 20;

// Using const
// const a = 20;
// console.log(a);

// typeof for all the data types.
console.log("Prem", typeof "Prem");
console.log(20, typeof 20);
console.log(NaN, typeof NaN);
console.log(false, typeof false);
console.log(null, typeof null);
console.log([1, 2, 3, 4], typeof [1, 2, 3, 4]);
console.log(
  { name: "Prem", positio: "intern" },
  typeof { name: "Prem", positio: "intern" }
);
console.log(typeof function () {});

// Checking for Nan and Array.
console.log(isNaN(NaN));
console.log(Array.isArray([1, 2, 3, 4]));

// Creating array using let and const

// According to me, the array shouldn't update.
let arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

arr1.push(10);
arr2.push(10);

console.log(arr1);
console.log(arr2);

// const arrays can be updated because It does NOT define a constant array but a const reference to that array

let obj1 = { name: "Prem", age: "20" };
const obj2 = { name: "Raj", age: "19" };

console.log(obj1);
console.log(obj2);

obj1.age = "21";
obj2.age = "20";

console.log(obj1);
console.log(obj2);

obj1 = { name: "Prem Jha", age: "20" };
console.log(obj1);
obj2 = { name: "Raj Jha", age: "19" };
console.log(obj2);

// with const the object can't be updated, but with let you can.
