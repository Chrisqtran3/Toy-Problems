// function concatArrays (arrays) {
//   // Write your code here, and
//   // return your final answer.
  
//   var result = [];
  
//   for(var i = 0; i < arrays.length; i++) {
//     for(var j = 0; j < arrays[i].length; j++) {
//       result.push(arrays[i][j]);
//     }
//   }
  
//   return result;
// }


function concatArrays(arrays) {
  
  var result = [];
  if(!arrays.length) {
    return result;
  } else {
  result = result.concat(arrays[0]);
  }
  
  return result.concat(concatArrays(arrays.slice(1)));
  
  
}