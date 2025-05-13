// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

function explode(x){
  // x contains 2 values( [a, b] )
  // if both values = numbers, score is sum
  // if only 1 value = number, score is value
  // else, 'Void!'
  let [a,b] = x
  
  if ( typeof a === 'number' && typeof b === 'number' ) return Array(a+b).fill(x)
  else if ( typeof a === 'number' && typeof b !== 'number' ) return Array(a).fill(x)
  else if ( typeof b === 'number' && typeof a !== 'number' ) return Array(b).fill(x)
  
  return 'Void!'
}