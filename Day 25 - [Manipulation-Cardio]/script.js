// JavaScript Array and Object Mastery: Cloning and Referencing Techniques

// 1. Reverse an Array:
// -> write a function to return a new array in reverse order.
// function reverseArray(arr) {
//   return arr.slice().reverse();
// }
// let originalArray = reverseArray([6, 5, 4, 3, 2, 1, 0]);
// console.table(reverseArray(originalArray));
// console.table(originalArray);

// 2. Find the Maximum Value:
// -> Get the largest number in an array.
// function findMax(nums) {
//   return Math.max(...nums);
// }
// console.log(findMax([2, 0, 4, 2, 23, 10, 8]));

// 3. Remove Duplicates:
// -> Eliminate duplicates from an array
// function removeDuplicates(nums) {
//     return [...new Set(nums)];
// }
// let resOut = removeDuplicates([1,0,1,0,9,8,8,9,4,4,4,4,23,54,54,54,23,7,7]);
// console.table(resOut);

// 4. Count Occurrences of Each Element:
// -> Count occurrences and return as an object.
// function countOccurrences(nums) {
//   return nums.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});
// }
// let countRes = countOccurrences([
//   "Aashish", "Aashish", "Kashyap", "Ash", "Junaid", "Kashyap", "Tejas", "Tejas", "Kashyap", "Junaid", "Kashyap", "Tejas", "Kashyap",
// ]);
// console.table(countRes);

// 5. Flatten a Nested Array
// -> Flatten an array with nested arrays
// function flattenArray(nums) {
//   return nums.flat(Infinity);
// }
// let flatAns = flattenArray([
//   "one",
//   ["two", ["three", ["four", ["five", ["six", ["seven"]]]]]],
// ]);
// console.table(flatAns);

// 6. Check if a Word is a Palindrome:
// -> Verify if a string is a palindrome
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// function checkPalindromes(arr) {
//     return arr.map(word =>({word, isPalindrome: isPalindrome(word)}));
// }

// let words = ['radar', 'pine', 'neven', 'jeshsej','skill', 'raoar', 'manam', 'learn'];
// console.table(checkPalindromes(words));

// 7. Group People by Age:
// -> Organize people by age in an object.
// function groupByAge(dost) {
//   return dost.reduce((acc, bhai) => {
//     acc[bhai.age] = acc[bhai.age] || [];
//     acc[bhai.age].push(bhai.name);
//     return acc;
//   }, {});
// }
// const dostBhai = [
//   { name: "Aashish Bhai", age: 25 },
//   { name: "Junaid Bhai", age: 24 },
//   { name: "Kashyap Bhai", age: 24 },
//   { name: "Tejas Bhai", age: 24 },
//   { name: "Ash", age: 3 },
//   { name: "Anjaana Bhai", age: 25 },
// ];
// console.table(groupByAge(dostBhai));

// 8. Find All Pairs with a Given Sum
// -> Identify pairs in an array that sum up to a target value
// function findPairs(nums, targetSum) {
//   const pairs = [];
//   const seen = new Set();
//   for (let num of nums) {
//     const complement = targetSum - num;

//     if (seen.has(complement)) {pairs.push([Math.min(num, complement), Math.max(num, complement)]);}
//     seen.add(num);
//   }

//   const uniquePairs = Array.from(new Set(pairs.map(JSON.stringify)), JSON.parse);
//   return uniquePairs;
// }

// let numPairs = [2, 4, 5, 5, 2, 8, 6, 3, 9, 11, 6, 1];
// console.table(findPairs(numPairs, 7));

// 9. Convert Array of Objects to a Single Object:
// -> convert key-value pair objects into a single object.
function arrayToObject(arr) {
  return arr.reduce((acc, obj) => {
    const [key, value] = Object.entries(obj)[0];
    acc[key] = value;
    return acc;
  }, {});
}
const data = [{ name: "Kashyap" }, { umra: 24 }, { desh: "Bharat" }];
console.table(arrayToObject(data));
