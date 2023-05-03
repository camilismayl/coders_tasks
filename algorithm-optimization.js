let array1 = [1, 3, 5, 5, 7]
let array2 = [5, 5, 8, 9]
let string1 = 'goog';
let string2 = 'endd'

function findIntersection(array1, array2) {
    let intersectionArray = [];
    let length1 = array1.length;
    let length2 = array2.length;

    if (length1 == 0 || length2 == 0) return;
    for (let i = 0; i < length1; i++) {
        for (let j = 0; j < length2; j++) {
            if (array1[i] === array2[j] && !intersectionArray.includes(array2[j])) intersectionArray.push(array2[j]);
        }
    }
    return intersectionArray;
}

function isPalindrome(string) {
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - i - 1]) return false;
    }
    return true;
}
console.log(isPalindrome('dsffdsd'))
function isPrime(number) {
    if (number === 1) return;
    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i == 0) return false;
    }
    return true;
}

function isPositive(number) {
    if (number > 0) return square(number);
    else return 0;
}

function square(number) {
    return number ** 2;
}

// function findNonRepeated(string) {
//     let array = string.split("");
//     console.log(array)
//     for (let i = 0; i < string.length; i++) {
//         let number = array.filter((item) => {
//             // console.log(string)
//             item == string[i]
//             console.log(item)

//         });
//         console.log(number.length)
//         console.log(string[i])
//         if (number.length == 1) return string[i];
//     }
//     return;
// }

// console.log(findIntersection(array1, array2));
// console.log(isPalindrome(string1));
// console.log(isPrime(7));
// console.log(isPositive(-5));
// console.log(findNonRepeated('ddsd'));

// function issPalindrome(str) {
//     const len = str.length;

//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(issPalindrome('fdgdf'));
// function findFirstNonRepeatedChars(str) {
//     const len = str.length;

//     for (let i = 0; i < len; i++) {
//         const char = str[i];
//         if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
//             return char;
//         }
//     }

//     return null;
// }
console.log(findNonRepeated('dfffda'));
function findNonRepeated(string) {
    let isRepeated = false;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (i !== j && string[i] === string[j]) {
                isRepeated = true;
                break;
            }
        }
        if (!isRepeated) return string[i];
    }
    return;
}