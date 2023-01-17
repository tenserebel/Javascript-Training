// Q1)

let originalObj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

let newObj = {
  ...originalObj,
  address: {
    ...originalObj.address,
    details: ["5", originalObj.address.details.slice(1)],
  },
};

console.log(newObj);
console.log(originalObj);

// Q2)

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

// creating a function which would return flat objects from the object.

function filterObj(inpObj) {
  checkArray = Object.entries(inpObj);
  res_array = {};
  for (let i = 0; i < Object.keys(inpObj).length; i++) {
    if (typeof checkArray[i][1] != typeof {}) {
      res_array[checkArray[i][0]] = checkArray[i][1];
    }
  }
  return res_array;
}

console.log(filterObj(obj));
