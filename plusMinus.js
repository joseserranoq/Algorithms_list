/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let posValues = 0, negValues = 0, zeroValue = 0
    arr.forEach(element => {
        if( element < 0 ){
            negValues += 1;
        }
        else if( element > 0 ){
            posValues += 1;
        }
        else{
            zeroValue += 1;
        }
    });
    posValues = posValues/arr.length 
    negValues = negValues/arr.length 
    zeroValue = zeroValue/arr.length
    console.log(posValues.toPrecision(6))
    console.log(negValues.toPrecision(6))
    console.log(zeroValue.toPrecision(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])