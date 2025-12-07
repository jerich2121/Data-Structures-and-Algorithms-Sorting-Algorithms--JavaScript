//Binary Search (Iterative Version)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }

    return -1; // Target not found
}

// Example:
const numbers = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(numbers, 7));  // Output: 3
console.log(binarySearch(numbers, 4));  // Output: -1

/*Binary Search (Recursive Version)
const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return -1; // Base case: not found

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    return binarySearchRecursive(arr, target, left, mid - 1);
};

// Example:
const numbers = [1, 3, 5, 7, 9, 11];
console.log(binarySearchRecursive(numbers, 7)); // Output: 3
console.log(binarySearchRecursive(numbers, 4)); // Output: -1
*/

/*
📌 How Binary Search Works

1 Ensure the array is sorted.

2 Find the middle element.

3 If the middle element equals the target, return its index.

4 If the target is smaller, search the left half; if larger, search the right half.

5 Repeat until the target is found or the interval is empty.

Time Complexity: O(log n)

Space Complexity: O(1) iterative, O(log n) recursive

Only works on sorted arrays.
*/