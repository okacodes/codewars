// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let arr = []
  let split = str.split('')
  for(x of split){
    if(split.indexOf(x) % 2 === 0){
      let poo = split.join('').charAt(split.indexOf(x) + 1)
      poo === '' ? arr.push(`${x}_`) : arr.push(`${x}${poo}`)       
  }
 }
 return arr
}