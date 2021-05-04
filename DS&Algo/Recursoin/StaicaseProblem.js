/*Let’s say we have a staircase of N steps, and a person has the ability to climb 
one, two, or three steps at a time. How many different possible “paths” 
can someone take to reach the top? Write a function that will calculate this for N steps.*/
/*basecase 1=1,2=2,3=4*/
/*recursion step(n-1)+step(n-2)+step(n-3);*/
function possiblePaths(n,paths){
if(n==1){
    paths=1;
    return paths;
}
if(n==2){
    paths=2;
    return paths;
}
if(n==3){
    paths=4;
    return paths;
}
paths=possiblePaths(n-1)+possiblePaths(n-2)+possiblePaths(n-3);
return paths;
}