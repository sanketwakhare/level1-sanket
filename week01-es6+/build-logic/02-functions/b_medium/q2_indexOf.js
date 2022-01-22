/*
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2*/

const indexOf = (A, ele) => {
    let index = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === ele) {
            index = i;
            break;
        }
    }
    console.log(A, `-> index of ${ele} ->`, index);
    return index;
}

// tests
indexOf([1, 6, 3, 5, 8, 9], 3);
indexOf([1, 6, 3, 5, 8, 9], 5);
indexOf([1, 6, 3, 5, 8, 9], 10);