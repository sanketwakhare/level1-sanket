/**
 * Given a sentence, your functions should return the number of words in the sentence.
 * Example:
 * Input: noOfWords(We are neoGrammers) ––> Output: 3
 */
const countWords = (sentence) => {
    let ans = sentence.split(' ').length;
    console.log(`count of words -> ${ans}`);
}

// tests
countWords('We are neoGrammers');
countWords('Hello World!');