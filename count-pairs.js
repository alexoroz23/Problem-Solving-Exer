function countPairs(arr, target) {
    // Initialize a frequency counter object
    const frequencyCounter = {};
  
    // Populate frequency counter for the array
    for (let num of arr) {
      frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }
  
    let count = 0; // Counter for pairs
  
    // Iterate through the array again
    for (let num of arr) {
      const complement = target - num;
  
      // If complement exists in frequency counter and is not the same as num
      if (frequencyCounter.hasOwnProperty(complement) && complement !== num) {
        count++;
      }
    }
  
    // Each pair is counted twice (once for each number in the pair)
    return count / 2;
  }
  