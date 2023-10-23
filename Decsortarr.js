/* 2. Sort Array In Descending Order   */

function decsortarr(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            
            const temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }

    return arr;
}

const inputArray = [5, 3, 8, 112, 1, 9];
const sortedArray = decsortarr(inputArray);
console.log(sortedArray); 
