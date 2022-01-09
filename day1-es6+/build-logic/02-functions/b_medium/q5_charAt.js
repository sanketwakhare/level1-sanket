/*
Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c */

const charAt = (A, index) => {
    if (index >= 0 && index < A.length) {
        return A.charAt(index);
    }
}

// tests
console.log('neoGcamp -> char at index 4 -> ', charAt("neoGcamp", 4));