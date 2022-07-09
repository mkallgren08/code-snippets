// Complete the function that accepts a string parameter, and reverses each word in 
// the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// My answer
const  reverseWords = (str) => {
  let res=[]
  str.split(' ').forEach((i)=>{
    res.push(i.split('').reverse().join(''))
  })
  return res.join(' ')
}

// Best rated function
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}