function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
    let j=i-1;
    let min=i;
    let value=arr[i];
    while(j>=0 && arr[j]>arr[i]){
        min=j;
        j--;
    }
    if(min!=i){
        let prevValue=arr[min];
        for(let k=min;k<i;k++){
            nextValue=arr[k+1];
            arr[k+1]=prevValue;
            prevValue=nextValue;

        }
    arr[min]=value;
    }
    }
    return arr;
}
array = [4, 8, 7, 2, 11, 1, 3];
console.log(insertionSort(array))