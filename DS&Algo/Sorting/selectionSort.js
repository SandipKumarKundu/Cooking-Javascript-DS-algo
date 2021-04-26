function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        min=i;
    for(let j=i+1;j<arr.length;j++){
    if(arr[j]<arr[min]){
        min=j;
    }
    }
    value=arr[i];
    arr[i]=arr[min];
    arr[min]=value;
    }
    return arr;
}
array = [4, 8, 7, 2, 11, 1, 3];
console.log(selectionSort(array))