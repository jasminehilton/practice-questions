// In this exercise, you will be given an array of two or more numbers. You will then have to find the two largest numbers in that array, and add (sum) them together.

// Input
// const sumLargestNumbers = function(data) {
//   // Put your solution here
// };

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Expected Output
// 11
// 5
// 126

// Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.


function sumLargestNumbers(arr) {
  let first = 0
  let second = first
  for (let num of arr){
    if(num > first){
      second = first
      first = num
    }
  }
  return first + second
  // console.log(first + second)
}

// sumLargestNumbers([1, 10]);
// sumLargestNumbers([1, 2, 3]);
// sumLargestNumbers([10, 4, 34, 6, 92, 2])
