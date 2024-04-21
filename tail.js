const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement our tail function
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  } else {
    return array.slice(1);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailResult = tail(words);

assertEqual(tailResult[0], "Lighthouse"); // Compare the first element of the tail array
assertEqual(tailResult[1], "Labs"); // Compare the second element of the tail array
assertEqual(tailResult.length, 2); // Ensure the length of the tail array is correct

// Check if the original array is not modified
assertEqual(words.length, 3);