// function concatStrings (strings) {
//   // Write your code here, and
//   // return your final answer.
  
//   var result = '';
  
//   strings.forEach(function(item) {
//     result += item;
//   })
  
//   return result;
// }


function concatStrings(strings) {
  var result = '';
  
  if(strings.length === 0) {
    return result;
  }
  
  return result += strings[0] + concatStrings(strings.slice(1));
  
}
