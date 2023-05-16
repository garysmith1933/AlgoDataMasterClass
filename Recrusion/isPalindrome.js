//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str){
  if (str.length === 1 || str.length === 0) return true
  
  const arr = [...str]
  
  if (arr[0] !== arr[arr.length-1]) return false
  
  else {
      arr.splice(0,1)
      arr.splice(-1,1)
      return isPalindrome(arr.join(''))
  }
}