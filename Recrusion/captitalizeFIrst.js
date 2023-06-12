function capitalizeFirst (arr, idx=0) {
  if (!arr[idx]) return arr;
  arr[idx] = `${arr[idx].slice(0,1).toUpperCase()}${arr[idx].slice(1)}`;
  return capitalizeFirst(arr, idx+1)
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']