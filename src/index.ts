/**
 * Project Euler #6
 */

const sumOfSquares = (n: number) => 
    Array.from({ length: n + 1 })
        .map((_, idx) => Math.pow(idx, 2))
        .reduce((prev, curr) => prev + curr, 0);

const squareOfSum = (n: number) => 
    Math.pow(
        Array.from({ length: n + 1})
            .map((_, idx) => idx)
            .reduce((prev, curr) => prev + curr, 0)
        , 2
    );

console.log(squareOfSum(100) - sumOfSquares(100));