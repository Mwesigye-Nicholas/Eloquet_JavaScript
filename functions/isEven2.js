/**
 * isEven1 - checks for un even number
 *
 * @n: parameter to be checked
 *
 * Return: true for even number and false for 
 * odd
 */

function isEven(n){
    if (n === 0) return true;
    else if (n === 1) return false;
    else if (n < 0) {
        n = n * -1
        return isEven(n);
    }
    else return isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-3));
