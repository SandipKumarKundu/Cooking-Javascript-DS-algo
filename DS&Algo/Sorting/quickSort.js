/**
 * recursively Pertiosioning is called quickk sort
 * partision is a practice where we keep all the values lower to a Pivot on left and
 * all values greater to it on right
 */

/**
 * 
 * @param {*} left hold the startIndex of an Array/partition scope leftIndex
 * @param {*} right holds the end index or pivot calue
 * @param {*} arr actual array
 */
function partition(left,right,arr){
    let pivot= right;
    let pivotValue=arr[right];
    let leftValue=arr[left];
    right--;
    while(true){
        while(arr[left]<pivotValue)
            left++;
        while(arr[right]>pivotValue)
            right--;
        if(left>=right)
            break;
        else {
            leftValue=arr[left];
            arr[left]=arr[right];
            arr[right]=leftValue;
            left++;
        }
    }
    if(left<=pivot){
        leftValue=arr[left];
        arr[left]=pivotValue;
        arr[pivot]=leftValue;
        pivot=left;
    }
    return pivot;
}

function quickSort(left,right,arr){
if(left>=right)
    return;
let partisionIndex=partition(left,right,arr);
quickSort(left,partisionIndex-1,arr);
quickSort(partisionIndex+1,right,arr);
}