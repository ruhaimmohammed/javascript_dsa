// const isPrime = (n) => {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// export default isPrime;

// Big - O = O(n)

// #. Optimal solution 
const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  export default isPrime;

// Big - O = O(sqrt(n))
