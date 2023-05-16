// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
  if(str.length === 0) return '';
  const arr = str.split('');
  let sub = arr[arr.length-1];

  return `${sub}${reverse(arr.join(''))}`;
}