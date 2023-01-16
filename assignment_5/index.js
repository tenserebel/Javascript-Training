// Question 1.

// Difference between i++ and ++i.

// ++i is known as Prefix increment
// and it returns the new incremented value

let a = 0;
console.log(++a);
console.log(`The incremented value using ++i is ${a}`);

// i++ is known as postfix increment
//  it returns the old value which is the value before increment.

let b = 0;
console.log(b++);
console.log(`The incremented value using i++ is ${b}`);

// Question 2.

let str = "Prem Jha";
console.log(str[2]);

// In both the cases it returns undefined.
console.log(str[8]);
console.log(str[-1]);

// Question 3.

//  Yes it will work.
let arr1 = [1, 2, 3, 4];

console.log(JSON.stringify(arr1));

const obj = {
  name: "Prem",
  age: 21,
  classes: [
    { name: "maths", day: ["Mon", "Wed", "Fri"] },
    { name: "IOT", day: ["Tue", "Wed", "Fri"] },
    { name: "Robo", day: ["MOn", "Fri"] },
  ],
};
console.log(JSON.stringify(obj));

// They return the same value for number, string, null and undefined.
console.log(JSON.stringify(4));
console.log(JSON.stringify("Prem Jha"));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));

// Question 4.

// an invalid json would throw an syntax error.
const json = '{"result":true, "count":42,"test"}';
const obj1 = JSON.parse(json);
console.log(obj.count);
console.log(obj.result);

// the code after the error won't run.
console.log("Test");
