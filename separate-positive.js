function separatePositive(nums) {
    // Initialize two pointers, start and end
    let start = 0;
    let end = nums.length - 1;
  
    // Continue until start and end pointers meet or cross
    while (start < end) {
      // If the element at start pointer is negative and the element at end pointer is positive
      if (nums[start] < 0 && nums[end] > 0) {
        // Swap the elements using ES5 syntax (temp variable)
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
  
        // Move both pointers towards the center
        start += 1;
        end -= 1;
      } else {
        // If the element at start pointer is positive, move start pointer to the right
        // If the element at end pointer is negative, move end pointer to the left
        if (nums[start] > 0) start += 1;
        else end -= 1;
      }
    }
  
    // Return the modified array with positive integers on the left and negative integers on the right
    return nums;
  }
  