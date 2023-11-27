function simpleArraySum(ar) {
  // Write your code here
  let result = ar.reduce((a, b) => a + b);
  console.log(result);
  return result;
}

simpleArraySum([1, 2, 3]);