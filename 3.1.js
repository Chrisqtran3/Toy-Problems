// function sum (numbers) {
//   // Write your code here, and
//   // return your final answer.
  
//   var sum = 0;
  
//   numbers.forEach(function(element) {
//     sum += element;
//   })
  
//   return sum;
// }

function sum(numbers) {
  var result = 0;
  
  if(numbers.length === 0) {
    return result;
  }
  
  return result += numbers[0] + sum(numbers.slice(1));
}

