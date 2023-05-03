let numberRow;
let symbolSpace = "";
let symbolStar = "*";

function square(numberRow) {
    for (let i = 1; i <= numberRow; i++) {
        for (let j = 1; j <= numberRow; j++) {
            symbolSpace += "*";
        }

        symbolSpace += "\n";
    }
    return symbolSpace;
}

function leftTriangle(numberRow) {

    for (let i = 1; i <= numberRow; i++) {
        for (let j = 1; j <= i; j++) {
            symbolSpace += '*'
        }
        symbolSpace += '\n'
    }
    return symbolSpace;
}

function rightTriangle(numberRow) {

    for (let i = 1; i <= numberRow; i++) {
        for (let j = 1; j <= numberRow - i; j++) {
            symbolSpace += " ";
        }
        // symbolSpace+='\n'

        for (let k = 0; k < i; k++) {
            symbolSpace += "*";
        }
        symbolSpace += "\n";
    }
    return symbolSpace;
}

function leftDownTriangle(numberRow) {

    for (let i = 0; i < numberRow; i++) {
        for (let j = 0; j < numberRow - i; j++) {
            symbolSpace += "*";
        }
        // symbolSpace+='\n'

        for (let k = 0; k < i; k++) {
            symbolSpace += " ";
        }
        symbolSpace += "\n";
    }
    return symbolSpace;
}

function hollowSquare(numberRow) {

    for (let i = 1; i <= numberRow; i++) {
        for (j = 1; j <= numberRow; j++) {
            if (i == 1 || i == numberRow || j == 1 || j == numberRow) {
                symbolSpace += "*";
            } else {
                symbolSpace += " ";
            }
        }
        symbolSpace += "\n";
    }
    return symbolSpace;
}

function pyramid(numberRow) {

    for (let i = 1; i <= numberRow; i++) {
        //1
        for (let j = 1; j <= numberRow - i; j++) {
            //4
            symbolSpace += " ";
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            symbolSpace += "*";
        }
        symbolSpace += "\n";
    }
    return symbolSpace
}

function reversedPyramid(numberRow) {

    for (let i = 0; i <= numberRow; i++) {
        //1
        for (let j = 0; j <= i; j++) {
            //4
            symbolSpace += " ";
        }
        for (let k = 0; k < 2 * (numberRow - i) - 1; k++) {
            symbolSpace += "*";

        }
        symbolSpace += "\n";
    }
    return symbolSpace;
}

function diamond(numberRow) {

    for (let i = 1; i <= numberRow; i++) {//1 2 3 4
        for (let j = 1; j <= numberRow - i; j++) {//i=1 j=54321
            symbolSpace += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            symbolSpace += "*";
        }
        symbolSpace += "\n";
    }

    for (let i = 1; i <= numberRow - 1; i++) {
        for (let j = 0; j < i; j++) {
            symbolSpace += " ";
        }
        for (let k = 0; k < 2 * (numberRow - i) - 1; k++) {
            symbolSpace += "*";
        }
        symbolSpace += "\n";
    }
    return symbolSpace;
}

console.log(square(5))
console.log(leftTriangle(5))
console.log(rightTriangle(5))
console.log(leftDownTriangle(5))
console.log(hollowSquare(5))
console.log(pyramid(5))
console.log(reversedPyramid(5))
console.log(diamond(5))