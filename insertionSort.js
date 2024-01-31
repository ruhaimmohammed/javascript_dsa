const insertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numberToInsert;
    }
}

export default insertionSort;

// Big-O = O(n^2)