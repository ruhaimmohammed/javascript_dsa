import factorial from './factorial.js';
import fibanocci from './fibanocci.js';
import isPrime from './isPrime.js';
import isPowerOfTwo, { isPowerOfTwoBitWise } from './isPowerOfTwo.js';
import recursiveFibanocci from './recursiveFibanocci.js';
import recursiveFactorial from './recursiveFactorial.js';
import linearSearch from './linearSearch.js';

// fibanocci(7);
// factorial(5);
// console.log(isPrime(5));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwoBitWise(8));
// console.log(recursiveFibanocci(50));
// console.log(recursiveFactorial(5)); // 120 
console.log(linearSearch([0,2,4,5,3],5)); // 3
console.log(linearSearch([0,2,4,5,3],50)); // -1