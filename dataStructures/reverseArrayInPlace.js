/**
 * reverseArrayInPlace - reverse un array without creating a new array
 * 
 * @arr: parameter
 *
 * Return: reversed array
 */

function reverseArrayInPlace(arr){
    let arrLength = arr.length - 1;

    for (let i = 0; i <= Math.floor(arrLength / 2); i++){
        let temp = arr[i];
        arr[i] = arr[arrLength - i];
        arr[arrLength - i] = temp;
    }
    return arr;
}
console.log(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e', 'f']));
