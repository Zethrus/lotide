const eqArrays = function (arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check element of the arrays using every method instead of iterating with a for loop
  return arr1.every((element, index) => element === arr2[index]);
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

// Create our map function
function map(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Test case 1: Get first letter of each word
const result1 = map(words, (word) => word[0]);
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);

// Test case 2: Convert each word to upper case
const result2 = map(words, (word) => word.toUpperCase());
assertArraysEqual(result2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);

// Test case 3: Check our length of each word
const result3 = map(words, (word) => word.length);
assertArraysEqual(result3, [6, 7, 2, 5, 3]);

// console.log our result for testing
console.log(result1);
console.log(result2);
console.log(result3);