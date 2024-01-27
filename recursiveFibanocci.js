const recursiveFibanocci = (n) => {
    if(n < 2) {
        return n;
    }
    return recursiveFibanocci(n-1) + recursiveFibanocci(n-2);
};

export default recursiveFibanocci;