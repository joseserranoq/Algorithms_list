/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    let result = ar.reduce((a,b)=> a+b)
    return result;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
