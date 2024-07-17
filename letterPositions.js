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

// This function takes a string and returns an object. The keys of the object are the characters that appear in the string, 
// and the values are arrays containing the positions where each character appears in the string.
const letterPositions = function(sentence) {
  // Convert the sentence to lowercase
  sentence = sentence.toLowerCase();
  const results = {};
  // Loop through our characters in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Ignore character if space
    if (char !== ' ') {
      // If character is already in the results object, push the index into the array
      // If it is, add it to the object with an array containing the current index
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

// Testing
const result = letterPositions('lighthouse in the house');
const expectedResult = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

// Loop through the keys in the expectedResult object to compare our results
for (const key in expectedResult) {
  assertArraysEqual(result[key], expectedResult[key]);
}
// Test for the letter 'e' in the word 'hello' at the second letter position in the string
assertArraysEqual(letterPositions("hello").e, [1]);