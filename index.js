import factorial from './factorial.js';
import fibanocci from './fibanocci.js';
import isPrime from './isPrime.js';
import isPowerOfTwo, { isPowerOfTwoBitWise } from './isPowerOfTwo.js';
import recursiveFibanocci from './recursiveFibanocci.js';
import recursiveFactorial from './recursiveFactorial.js';
import linearSearch from './linearSearch.js';
import binarySearch from './binarySearch.js';
import recursiveBinarySearch from './recursiveBinarySearch.js';
import insertionSort from './insertionSort.js';
import quickSort from './quickSort.js';
import mergeSort from './mergeSort.js';
import cartesianProduct from './cartesianProduct.js';
import climbingStairCase from './climbingStairCase.js';
import towerOfHanoi from './towerOfHanoi.js';

// fibanocci(7);
// factorial(5);
// console.log(isPrime(5));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwoBitWise(8));
// console.log(recursiveFibanocci(50));
// console.log(recursiveFactorial(5)); // 120 
// console.log(linearSearch([0,2,4,5,3],5)); // 3
// console.log(linearSearch([0,2,4,5,3],50)); // -1
// console.log(binarySearch([-5, 2, 4, 6, 10], -5)); //0
// console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], -5)); //0
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); //4
// console.log(bubbleSort([-6, 2, -4, 10, 5])); // [-6, -4, 2, 5, 10]
// console.log(insertionSort([-6, 2, -4, 10, 5])); // [-6, -4, 2, 5, 10]
// console.log(quickSort([-10, 2, -5, 1, 5])); // [-10, -5, 1, 2, 5]
// console.log(mergeSort([-10, 2, -5, 1, 5])); // [-10, -5, 1, 2, 5]



// console.log(cartesianProduct([1, 2], [3, 4, 5])); //[[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]
// console.log(climbingStairCase(5)); // 8

towerOfHanoi(3, 'A', 'C', 'B');