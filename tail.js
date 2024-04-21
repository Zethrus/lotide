const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement our tail function
const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailResult = tail(words);

assertEqual(tailResult[0], "Lighthouse"); // Compare the first element of the tail array
assertEqual(tailResult[1], "Labs"); // Compare the second element of the tail array
assertEqual(tailResult.length, 2); // Ensure the length of the tail array is correct
assertEqual(tail(["test"]).length, 0);
assertEqual(tail([]).length, 0);

// Check the original array was modified
assertEqual(words.length, 3);