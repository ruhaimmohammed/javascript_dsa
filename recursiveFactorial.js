const recursiveFactorial = (n) => {
    if(n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n-1);
}

export default recursiveFactorial;

// Big O = O(n)