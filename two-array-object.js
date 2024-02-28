function twoArrayObject(keys, values) {
    // Using the reduce method to iterate over the keys array
    return keys.reduce((obj, cur, idx) => {
      // For each key, assign the corresponding value from the values array
      // If the index exceeds the length of the values array, assign null
      obj[cur] = idx < values.length ? values[idx] : null;
      return obj; // Return the updated object
    }, {}); // Initialize the accumulator as an empty object
  }
  