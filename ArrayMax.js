function max (numbers) {
  
  var maxNum = numbers[0];
  for(var i = 1; i < numbers.length; i++) {
    if(numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  
  return maxNum;
}
