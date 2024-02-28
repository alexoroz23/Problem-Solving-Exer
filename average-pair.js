function averagePair(arr, target) {
    // Edge case: if array has less than 2 elements, return false
    if (arr.length < 2) {
      return false;
    }
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const average = (arr[left] + arr[right]) / 2;
  
      if (average === target) {
        return true;
      } else if (average < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return false; // If no pair found
  }