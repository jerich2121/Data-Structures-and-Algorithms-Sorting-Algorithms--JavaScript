//Simple
function countingSort(arr) {
    if (arr.length === 0) return [];

    // Find the maximum value
    let max = Math.max(...arr);

    // Initialize count array
    let count = new Array(max + 1).fill(0);

    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Reconstruct sorted array
    let sortedIndex = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[sortedIndex] = i;
            sortedIndex++;
            count[i]--;
        }
    }

    return arr;
}

// Example
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));

/* ES6
const countingSort = (arr) => {
    if (arr.length === 0) return [];

    const max = Math.max(...arr);
    const count = Array(max + 1).fill(0);

    // Count occurrences
    arr.forEach(num => count[num]++);

    // Reconstruct sorted array
    let sortedIndex = 0;
    count.forEach((freq, num) => {
        while (freq > 0) {
            arr[sortedIndex++] = num;
            freq--;
        }
    });

    return arr;
};

// Example
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
*/