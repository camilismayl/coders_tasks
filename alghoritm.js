let searchInsert = function (numbers, target) {
    let right = numbers.length - 1;
    let left = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numbers[mid] == target) return mid;
        else if (numbers[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return left;
};

let canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; n > 0 && i < flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n == 0;
};

let sortSentence = function (sentence) {
    sentence = sentence.split(" ").sort((a, b) => {
        return a[a.length - 1] - b[b.length - 1]
    })
    return sentence.join(" ").replaceAll(/[0-9]/g, "")
};

let canBeIncreasing = function (numbers) {
    let count = 0;
    for (let i = 1; count <= 1 && i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) {
            count++;
            if (i > 1 && numbers[i] <= numbers[i - 2]) numbers[i] = numbers[i - 1];
        }
    }
    return count <= 1;
};

function sortArray(array) {
    let oddArr = [];
    let evenArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) evenArr.push(array[i]);
        else oddArr.push(array[i]);
    }

    oddArr.sort((a, b) => a - b);
    evenArr.sort((a, b) => a - b);
    return oddArr.concat(evenArr);
}

function withdraw(amount) {
    const atm = [5, 10, 20, 50, 100, 200, 500];
    let result = [];

    for (let i = atm.length - 1; i >= 0; i--) {
        while (atm[i] <= amount) {
            result.push(atm[i]);
            amount -= atm[i];
        }
    }
    return result;
}
console.log(searchInsert([1, 3, 5, 6], 9));
console.log(canPlaceFlowers([1, 0, 0, 1, 1], 1));
console.log(sortSentence('is2 sentence4 This1 a3'));
console.log(canBeIncreasing([1, 2, 10, 5, 7]));
console.log(sortArray([1, 2, 4, 26, 4, 7, 9, 13]));
console.log(withdraw(1106)); 
