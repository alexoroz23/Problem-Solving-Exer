function pivotIndex(nums) {
    // Calculate the total sum of elements in the array
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    let leftSum = 0; // Cumulative sum of elements to the left of the current index
  
    // Iterate through the array to find the pivot index
    for (let i = 0; i < nums.length; i++) {
      // Check if leftSum is equal to (totalSum - nums[i]) / 2
      if (leftSum === (totalSum - nums[i]) / 2) {
        return i; // Return the pivot index if found
      }
      // Update leftSum
      leftSum += nums[i];
    }
  
    // If no pivot index is found, return -1
    return -1;
  }
  