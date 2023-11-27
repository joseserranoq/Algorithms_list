/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let c = 0 , d = 0;
    if (a.lenght === b.lenght) {
        for (let i in a){
           if(a[i] > b[i]){
                c += 1;
           }
           else if(a[i] < b[i]){
                d += 1;
           }
        }
    }
    return [c,d]
}

compareTriplets([1,2,3],[4,5,6])