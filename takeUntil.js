const eqArrays = function(arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check elements of the arrays using every method instead of iterating with a for loop
  return arr1.every((element, index) => element === arr2[index]);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, expected1); // Should pass

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = ["I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, expected2); // Should pass

const data3 = [3, 6, 9, 12, 15];
const expected3 = [3, 6, 9, 12, 15]; 
const results3 = takeUntil(data3, x => x > 20);
assertArraysEqual(results3, expected3); // Should pass

const data4 = ["apple", "banana", "cherry", "date"];
const expected4 = ["apple", "banana", "cherry"];
const results4 = takeUntil(data4, x => x.length > 5);
assertArraysEqual(results4, expected4); // Should fail

const data5 = [1, 2, 3, 4, 5];
const expected5 = [];
const results5 = takeUntil(data5, x => x > 0);
assertArraysEqual(results5, expected5); // Should pass