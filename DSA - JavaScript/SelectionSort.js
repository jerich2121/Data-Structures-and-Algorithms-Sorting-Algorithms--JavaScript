//Simple Version
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        // Find the index of the smallest element in the remaining array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap if a smaller element was found
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example:
console.log(selectionSort([64, 25, 12, 22, 11]));

/* ES6 Version (Cleaner Swap)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example:
console.log(selectionSort([64, 25, 12, 22, 11]));
*/