// index.js

// Default export an object containing the `add` function
export default {
  add: (a, b) => {
    // Ensure both inputs are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must benumbers okay extra ");
    }
    return a + b;
  },
};
