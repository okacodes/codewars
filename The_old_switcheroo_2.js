// This is a follow up to my kata the old switcheroo.

// Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.

// 'abc'      --> '123'
// 'ABC'      --> '123'
// 'codewars' --> '315452311819'
// 'abc-#@5'  --> '123-#@5'

function encode(str) {
  // make a pseudo switch case because I'm lazy
  let changes = {
    'a':  '1',
    'b':  '2',
    'c':  '3',
    'd':  '4',
    'e':  '5',
    'f':  '6',
    'g':  '7',
    'h':  '8',
    'i':  '9',
    'j':  '10',
    'k':  '11',
    'l':  '12',
    'm':  '13',
    'n':  '14',
    'o':  '15',
    'p':  '16',
    'q':  '17',
    'r':  '18',
    's':  '19',
    't':  '20',
    'u':  '21',
    'v':  '22',
    'w':  '23',
    'x':  '24',
    'y':  '25',
    'z':  '26'
  }
  let newStr = ''
  
  // loop through the string
  for (x of str) {
    // check if x exists within changes
    if (x.toLowerCase() in changes) {
      // if x exists, convert it to its value in changes and concat to newStr
      newStr = newStr.concat(changes[x.toLowerCase()])
    } else {
      // if it doens't exist in changes, concat it onto the string as normal
      newStr = newStr.concat(x)
    }
  }
  return newStr
}