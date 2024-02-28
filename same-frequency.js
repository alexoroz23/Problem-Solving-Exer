function sameFrequency(num1, num2) {
    // Convert numbers to strings
    let str1 = num1.toString();
    let str2 = num2.toString();
    
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) return false;
  
    // Initialize frequency counters for both numbers
    let count1 = {};
    let count2 = {};
  
    // Populate frequency counter for str1
    for (let i = 0; i < str1.length; i++) {
      count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    }
  
    // Populate frequency counter for str2
    for (let j = 0; j < str2.length; j++) {
      count2[str2[j]] = (count2[str2[j]] || 0) + 1;
    }
  
    // Check if frequencies of digits in str1 and str2 are equal
    for (let key in count1) {
      if (count1[key] !== count2[key]) return false;
    }
  
    // If all frequencies are equal, return true
    return true;
  }
  