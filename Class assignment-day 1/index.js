// Example for garbage collection.
let x = {
  a: {
    b: [1, 2, 3, 4],
  },
};

x = 4;

// Example for arrow functions.

let nam = {
  name: "prem",

  arrow: (name) => {
    console.log("Hello, my name is:" + name);
  },

  normal() {
    console.log("Hello, my name is " + this.name);
  },
};

// Example of hoisting

// name = "prem";
// let name;    // would give reference error

// name = prem;
// const name; // error

// name = "prem";
// var name; // would give the value 5.

// Example of Temporal dead zone.

// {
//   // This is Temporal dead zone.
//   console.log(name);
//   let name = "Prem";
//   // temporal dead zone
// }

// example of reduce function.

const num = [1, 2, 3];

function sub(total, num) {
  return total - num;
}
console.log(num.reduce(sub));
