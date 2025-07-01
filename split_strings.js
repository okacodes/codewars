// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Cool split string stuff, right?

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let arr = []
  for (let i = 0; i < str.length; i += 2){
    arr.push(`${str[i] + (str[i+1] || '_')}`)
  }
  return arr
}