const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// Testing
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should pass
assertEqual(eqArrays([], []), true); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // should pass