// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  // Return array
  // First element sum of positive nums, second element sum of negative nums
  // Disregard 0
  // for empy array, return []
  
  // Loop
  let count = 0
  let sum = 0
  if( input === null ){
    return []
  }
    for( x of input ) {
    if ( x > 0 ) {
      count += 1
    } else if ( x < 0 ) {
      sum += x
    }
  }
  let arr = []
  if( count > 0 && sum < 0 ) {
    arr.push(count)
    arr.push(sum)
  } else {
    return []
  }
  return arr
}