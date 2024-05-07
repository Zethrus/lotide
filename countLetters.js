const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letterCount = {};
  // Loop through characters in the sentence
  for (const letter of sentence) {
    // Ignore if character is a space
    if (letter !== ' ') {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }
  return letterCount;
};

// Testing
const result = countLetters("lighthouse in the house");
const expectedResult = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1
};

// Check if output result matches the expected result
for (const letter in expectedResult) {
  assertEqual(result[letter], expectedResult[letter]);
}

const emptyResult = countLetters("");
assertEqual(Object.keys(emptyResult).length, 0); // Check empty string