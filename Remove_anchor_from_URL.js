// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// This was a cool one.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    return url.includes('#') ? url.split('').slice(0, url.indexOf('#')).join('') : url
  }