function fib(target, sequence=[1,1]){
  // we put together an array of numbers in the sequence, to keep track of how many we have gone through.
   if (sequence.length === target) return sequence[sequence.length-1];
   
   // add new number to sequence
   const first = sequence[sequence.length-1];
   const second = sequence[sequence.length-2];
   const num = first + second;
   
   sequence.push(num);
   
   return fib(target, sequence);
  }