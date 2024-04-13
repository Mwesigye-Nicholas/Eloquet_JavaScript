/**
 * isEven - checks for even number
 *
 * @N: parameter to be checked
 *
 * Return: true for even and false for odd
 */

let isEven = function(N){
    if (N === 0) return true;
    if (N <= 1) return false;

    if (N % 2 !== 0){
       N = N - 2 ;
    }
    else {
        return true;
    }    
    return isEven(N);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(0));
