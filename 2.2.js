// function filterLength (length, array) {
//   var output = [];
  
//   for(var i = 0; i < array.length; i++) {
//     if(array[i].length >= length) {
//       output.push(array[i]);
//     }
//   }
  
//   return output;
// }


function filterLength(length, array) {
  var result = [];
  
  // Base case
  if(array.length === 0) {
    return result;
  }
  
  else if(array[0].length >= length) {
    result.push(array[0]);
  }
  
  return result.concat(filterLength(length, array.slice(1)));
  
}