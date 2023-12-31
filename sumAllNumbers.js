/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 
1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
  //array sorting
  arr = arr.sort((a, b) => {
    return a - b;
  });
  // find min and max num in array
  let min = arr[0];
  let max = arr[1];
  // sum all numbers between min and max
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 2]));
