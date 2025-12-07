//Simple Bubble Sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example:
console.log(bubbleSort([5, 3, 8, 4, 2]));

// Optimized Bubble Sort
/*
function bubbleSortOptimized(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // ES6 swap
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Example:
console.log(bubbleSortOptimized([5, 3, 8, 4, 2]));
*/