var strStr = function (haystack, needle) {
    let index = haystack.indexOf(needle);
    if (index == -1) return -1;
    else return index;
};

var mySqrt = function (x) {
    for (i = 0; i <= x; i++) {
        if (i * i <= x && (i + 1) * (i + 1) > x) return i;
    }
};

var singleNumber = function (nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};

var isHappy = function (n) {
    let sum = 0;
    while (n > 0) {
        let e = n % 10;
        n = Math.floor(n / 10);
        sum += e * e;
    }
    if (sum === 1) return true;
    else if (sum > 1 && sum <= 4) return false;
    return isHappy(sum);
};
console.log(strStr("baba", "ba"));
console.log(mySqrt(8));
console.log(singleNumber([4, 3, 7, 3]));
console.log(isHappy(129));
