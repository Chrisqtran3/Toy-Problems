function middle (numbers) {
  
  var len = numbers.length;

  if(len % 2 !== 0) {
  	var result = Math.floor(len/2);
  	return numbers[result]
  }
  
  else {
  	var firstNum = (len / 2) - 1;
  	var secondNum = len / 2;
  	var sum = numbers[firstNum] + numbers[secondNum];
  	var average = sum / 2;
  }
  
  return average;
}
