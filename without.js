const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check element of the arrays using every method instead of iterating with a for loop
  return arr1.every((element, index) => element === arr2[index]);
};

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

// Testing
const words = ["hello", "world", "lighthouse"];
const result1 = without([1, 2, 3], [1]);
const result2 = without(["1", "2", "3"], [1, 2, "3"]);

assertArraysEqual(result1, [2, 3]); // => [2, 3]
assertArraysEqual(result2, ["1", "2"]); // => ["1", "2"]

// Ensure original array is not modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => ["hello", "world", "lighthouse"]