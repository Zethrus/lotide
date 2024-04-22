const eqArrays = function(arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check element of the arrays using every method instead of iterating with a for loop
  return arr1.every((element, index) => element === arr2[index]);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  const length = arr.length;

  // Return empty array if the array has one or two elements
  if (length <= 2) {
    return [];
  }

  // Calculate middle index
  const middleIndex = Math.floor(length / 2);

  // Return single middle element for arrays with odd number of elements
  if (length % 2 !== 0) {
    return [arr[middleIndex]];
  } else {
    // Return two middle elements for arrays with even number of elements
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
};

// Testing
// Test for empty array
assertArraysEqual(middle([]), []);

// Test for arrays with one or two elements
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Test for arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Test for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);