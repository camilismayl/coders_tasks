let array = [3, 6, 2, 5, 9, 1, 8, 7, 4];

function linearSearch(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) return i;
    }
    return -1;
}

function binarySearch(array, number) {
    array.sort();
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let average = Math.floor((start + end) / 2);
        if (number == array[average]) return average;
        else if (number < array[average]) end = average - 1;
        else start = average + 1;
    }
    return -1;
}

function bubbleSort(array) {
    do {
        isSwapped = false
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                array[i] = array[i] + array[i + 1];
                array[i + 1] = array[i] - array[i + 1];
                array[i] = array[i] - array[i + 1];
                isSwapped = true
            }
        }
    } while (isSwapped)
    return array
}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) minIndex = j
        }
        if (minIndex !== i) {
            array[i] = array[i] + array[minIndex];
            array[minIndex] = array[i] - array[minIndex];
            array[i] = array[i] - array[minIndex];
        }
    }
    return array
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        let j;
        for (j = i - 1; j >= 0 && current < array[j]; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = current
    }
    return array
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    let sortedArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) sortedArray.push(left.shift());
        else sortedArray.push(right.shift());
    }
    return [...sortedArray, ...left, ...right];
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) leftArr.push(arr[i]);
        else rightArr.push(arr[i]);
    }
    array = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    return array
}

console.log(linearSearch(array, 4))
console.log(binarySearch(array, 8))
console.log(bubbleSort(array))
console.log(selectionSort(array))
console.log(insertionSort(array))
console.log(mergeSort(array))
console.log(quickSort(array))
