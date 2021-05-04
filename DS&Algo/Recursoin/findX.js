/*Use recursion to write a function that accepts a string and returns the first index
 that contains the character “x.” For example, the string, "abcdefghijklmnopqrstuvwxyz" has an
  “x” at index 23.
 To keep things simple, assume the string definitely has at least one “x.”*/

 function findX(str,char,firstInstance){
     if(str[0]==char){
         console.log("found");
         return firstInstance;
     }
     else{
        firstInstance++;
     findX(str.substring(1),char,firstInstance);
     }
 }