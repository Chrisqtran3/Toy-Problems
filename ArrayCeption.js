function arrayception (array) {
  var maxN = 0;
  
  //define a recursive function which keeps track of level and checks if a non-array value is present
  var checkArray = function(array,n) {
    for (var i = 0; i < array.length; i++) {
      //check if the element is a non empty array
      if (Array.isArray(array[i]) && array[i].length > 0) {
        //increment the level and call recursively
        checkArray(array[i],n+1);
      //check if the element is a non-array value
      } else if (!Array.isArray(array[i])) {
        //increment the current level and update the max level if necessary
        maxN = Math.max(n+1,maxN);
      }
    }
  };
  
  checkArray(array,0);
  return maxN;
}