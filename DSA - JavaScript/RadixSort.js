//Simple
function getMax(arr) {
    return Math.max(...arr);
}

function countingSortForRadix(arr, exp) {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    // Count occurrences of digits
    for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Change count[i] so that it contains actual position
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy to original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    const max = getMax(arr);

    // Do counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortForRadix(arr, exp);
    }

    return arr;
}

// Example
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

/*ES6 Version (Cleaner & Modern)
const countingSortForRadix = (arr, exp) => {
    const output = Array(arr.length).fill(0);
    const count = Array(10).fill(0);

    arr.forEach(num => count[Math.floor(num / exp) % 10]++);

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    output.forEach((num, i) => arr[i] = num);
};

const radixSort = (arr) => {
    const max = Math.max(...arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortForRadix(arr, exp);
    }

    return arr;
};

// Example
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
*/