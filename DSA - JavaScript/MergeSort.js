//Simple
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// Example
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

/*ES6
const merge = (left, right) => {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

// Example
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
*/