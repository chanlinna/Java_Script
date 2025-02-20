// THE CONTEXT
// In the provided code, there's a function named findAverage that calculates the average of numbers in an array.
// The findAverage function takes an array of numbers as a parameter.

// THE PROBLEM
// There's a bug in the implementation of the findAverage function that causes it to produce incorrect results ( it displays NaN)

// YOUR JOB
// Your task is to identify and fix the bug in the findAverage function to ensure that it correctly calculates the average of numbers in the array.

// TIPS
// You should use the DEBUGGER and execute step by step the function iterations.
function findAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

let scores = [85, 90, 75, 95, 80];
let averageScore = findAverage(scores);
console.log("Average score:", averageScore);
