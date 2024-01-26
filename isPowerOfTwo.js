const isPowerOfTwoBitWise = (n) => {
    if (n < 1) {
        return false;
    }
    return (n & (n-1)) === 0;
}

export { isPowerOfTwoBitWise };

const isPowerOfTwo = (n) => {
    if  (n < 1) {
        return false; 
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n/2;
    }
    return true;
}

export default isPowerOfTwo;
//  Big-O = O(logn)