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

const flatten = function(arr) {
  let flattenedArray = [];

  // Iterate through each item in the array
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      Array.prototype.push.apply(flattenedArray, item);
    } else {
      // If the item is not an array, push it to the flattenedArray
      flattenedArray.push(item);
    }
  });

  return flattenedArray;
};

// Testing
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3], 4, [5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2], 3, [4], [5, 6]]), [1, 2, 3, 4, 5, 6]);
