function constructNote(message, letters) {
    // Initialize frequency counters
    const messageFreq = {};
    const lettersFreq = {};
  
    // Populate frequency counters for message
    for (let char of message) {
      messageFreq[char] = (messageFreq[char] || 0) + 1;
    }
  
    // Populate frequency counters for letters
    for (let char of letters) {
      lettersFreq[char] = (lettersFreq[char] || 0) + 1;
    }
  
    // Check if each character in message can be formed by letters
    for (let char in messageFreq) {
      if (!(char in lettersFreq) || messageFreq[char] > lettersFreq[char]) {
        return false;
      }
    }
  
    return true;
  }
  