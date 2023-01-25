function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == target) {
      return [arr[i], arr[i + 1]];
    }
  }

  return [];
}


console.log(twoSum([2, 7, 11, 15], 9))