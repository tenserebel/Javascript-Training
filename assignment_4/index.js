// Question 1.
// What happens when you add a for loop/while loop/switch case block inside a
// function and use return instead of break? Do statements after the loop run?
// What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block?
// What impact does that have?

// we can't call a return statement outside of a function.
function forLoop() {
  for (let i = 1; i <= 5; i++) {
    return i;
  }
  // wouldn't be executed.
  return "Test";
}

console.log(forLoop());

// If we use return instead of break,
//then the function stops the execution and anything after the first return wouldn't be executed.

// we can use return function inside a loop to break the loop and return that particular value.
// For example, we can want to find a prime number, we can run a for loop and break the loop with return when we find that number.

function ifReturn() {
  let a = 5;
  if (a === 5) {
    return true;
  } else {
    return false;
  }
  // wouldn't be executed.
  return "New";
}

console.log(ifReturn());

// Question 2.

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}
function test(callback) {
  callback();
}

// 1)
console.log(test(callbackFunc));

// 2)
console.log(test(callbackFunc()));

// 3)
// Using arrow function also works properly.
console.log(test(() => callbackFunc()));

// 4)
// This returns a error (TypeError: callback is not a function) because we don't want to execute the function at a certain point instead
// we are passing it as pass by reference to our function.

// 5)
// This would console.log the statement but would return undefined as we have not returned anything in our test function.
