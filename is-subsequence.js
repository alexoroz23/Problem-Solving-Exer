function isSubsequence(str1, str2) {
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2
  
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        // If characters match, move pointer for str1 forward
        i++;
      }
      // Move pointer for str2 forward regardless
      j++;
    }
  
    // If all characters in str1 are found in str2 in order, return true; otherwise, return false
    return i === str1.length;
  }
  