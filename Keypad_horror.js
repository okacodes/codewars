// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9 \n 4 5 6 \n 1 2 3 \n 0 \n

// Cell phone keypad's layout:
// 1 2 3\n 4 5 6\n 7 8 9\n 0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

function computerToPhone(numbers) {
  // Create an object. This objects represents the numbers on a phone's keypad as if they were on
  // the numpad of a keyboard.
  let convertNumpad = {
    0: 0,
    1: 7,
    2: 8,
    3: 9,
    4: 4,
    5: 5,
    6: 6,
    7: 1,
    8: 2,
    9: 3
  }
  
  // Return the string split into an array.
  // Map the array and use the object we created to convert each element in the array to its
  // corresponding number. After that, join the array's elements back into a string.
  return [...numbers].map((keys) => convertNumpad[keys]).join('')
}