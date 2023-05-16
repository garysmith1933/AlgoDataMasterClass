// Write a recursive function called someRecursive which accepts an array and a callback. 
//The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback){
  if(arr.length === 1 && callback(arr[0]) === false) return false;
  
  let first = arr[0];
  
  if (callback(first) === true) return true;
   
  else {
      return someRecursive(arr.slice(1),callback);
  }
  
}