// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
// Examples

// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
// Yes I'm trying to fix it my things.:'(

function wordSearch(query, seq){
  // Turn query to lower-case
  const queryLower = query.toLowerCase()
  
  // Check array for string inclusion
  const contains = seq.filter((x) => {
    return x.toLowerCase().includes(queryLower)
  })
  
  // Return result
  return contains.length !== 0 ? contains : ['Empty']
}