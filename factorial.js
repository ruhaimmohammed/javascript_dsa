const factorial = (n) => {
    let b = 1;
    for (let i = 1; i <= n; i++) {
        b = b * i
    }
    console.log(b);
};

export default factorial;
