//Simple
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0];
    var left = [];
    var right = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

// Example usage:
var numbers = [5, 3, 8, 4, 2];
console.log(quicksort(numbers)); // [2,3,4,5,8]

/*ES6
const quicksort = arr => {
    if (arr.length <= 1) return arr;

    const [pivot, ...rest] = arr;
    const left = rest.filter(x => x < pivot);
    const right = rest.filter(x => x >= pivot);

    return [...quicksort(left), pivot, ...quicksort(right)];
};

// Example usage:
const numbers = [5, 3, 8, 4, 2];
console.log(quicksort(numbers)); // [2,3,4,5,8]
*/