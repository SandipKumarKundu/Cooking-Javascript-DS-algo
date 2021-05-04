/*Use recursion to write a function that accepts an array of strings and returns
 the total number of characters across all the strings. For example, if the input array is 
["ab", "c", "def", "ghij"], the output should be 10 since there are 10 characters in total.*/

function totalNumberOfCharacters(arr,totalChars){
    let splitWords=arr[0].split("");
    splitWords.forEach(char=>totalChars[char]=1);
if(arr.length==1){
    return;
}
totalNumberOfCharacters(arr.splice(1),totalChars);
return Object.keys(totalChars).length;
}