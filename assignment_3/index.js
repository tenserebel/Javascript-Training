// Question 1.

let age = 17;

const age_func_if = (val_age) => {
  if (val_age <= 12) {
    console.log("Child");
  } else if (val_age >= 13 && val_age <= 18) {
    console.log("Teen");

    // We can also just use else.
  } else if (val_age > 18) {
    console.log("Adult");
  }
};

age_func_if(age);

// Question 2.
const age_func_switch = (val_age) => {
  switch (true) {
    case val_age <= 12:
      console.log("child");
      break;
    case val_age <= 18:
      console.log("teen");
      break;
    case val_age > 18:
      console.log("adult");
      break;
  }
};

age_func_switch(age);

// Question 3.

let arraySize = 25;
const fillArray = (size) => {
  const resArray = [];
  for (let i = 1; i <= size; i++) {
    resArray.push(i);
  }
  return resArray;
};

console.log(fillArray(arraySize));

// alternate method

let altArraySize = (size) => {
  return [...Array(size).keys()].map((x) => ++x);
};

console.log(altArraySize(arraySize));

// Question 4.

const fillArrayWhile = () => {
  const resArray = [];
  let i = 1;
  while (i <= 25) {
    resArray.push(i);
    i += 1;
  }
  return resArray;
};

console.log(fillArrayWhile(arraySize));

// Question 5.

// using break
const usingBreak = () => {
  for (let i = 1; i < 25; i++) {
    if (i == 5) {
      console.log("Found 5");
      break;
    } else {
      console.log(i);
    }
  }
};
usingBreak();

const usingReturn = () => {
  for (let i = 1; i < 25; i++) {
    if (i == 5) {
      return "Found 5";
    } else {
      return i;
    }
  }
};
console.log(usingBreak());
