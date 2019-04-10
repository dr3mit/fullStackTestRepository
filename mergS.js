function mergeSort(arr){
    if (arr.length < 2){
        return arr;
    } else {
        let middle = Math.floor(arr.length/2);
        merge (arr.slice(0, middle), arr.slice(middle));
    }
}

function merge(arr0, arr1){
    let left = 0
    let right = 0;
    let retArr = [];
    while (left < arr0.length) && right < arr1.length){
        if (arr0[left] < arr1[right]){
            retArr.push(arr0[left]);
            left++;
        } else {
            retArr.push(arr1[right]);
            right++;
        }
    }
    return retArr;
}

a = [3,2,1,4,5,8];
console.log(mergeSort(a));