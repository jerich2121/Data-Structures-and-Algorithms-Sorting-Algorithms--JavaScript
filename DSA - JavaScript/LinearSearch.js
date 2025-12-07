//Simple
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

// Example:
const numbers = [10, 23, 45, 70, 11];
console.log(linearSearch(numbers, 45)); // Output: 2
console.log(linearSearch(numbers, 99)); // Output: -1

/*ES6
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
};

// Example:
const numbers = [10, 23, 45, 70, 11];
console.log(linearSearch(numbers, 45)); // Output: 2
console.log(linearSearch(numbers, 99)); // Output: -1
*/

/*
📌 How Linear Search Works

1. Start from the first element of the array.

2. Check each element one by one.

3. If the element matches the target, return its index.

4. If the end of the array is reached without a match, return -1.

Time Complexity: O(n)

Space Complexity: O(1)

Works on unsorted arrays as well.
*/