const fibanocci = (n) => {
  const a = [1, 1];
  let b = 0;
  for (let i = 1; b < n; i++) {
    b = Number(a[i - 1]) + Number(a[i]);
    a.push(b);
  }
  console.log(a);
};

export default fibanocci;

// Big - O = O(n)