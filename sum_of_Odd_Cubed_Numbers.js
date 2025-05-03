// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let sum = 0;
  for(x of arr){
    if(typeof x !== 'number'){
      return undefined
    }
    typeof x === 'number' && x % 2 !== 0 ? sum += (x ** 3) : null
  }
  return sum
}