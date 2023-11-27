/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    
        let leftDiagonal = 0;
        let rightDiagonal = 0;
        let indexY = 0;
        for (let i = 0; i <= arr.length-1; i++) {
            if( arr[i + 1] === undefined || arr[i].length === arr[ i + 1].length){
                leftDiagonal += arr[i][indexY];
                rightDiagonal += arr[i][arr[i].length -1 - indexY];                
                indexY++;
            }
        }        return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDifference([[3],[11,2,4],[4,5,6],[10,8,-12]]))