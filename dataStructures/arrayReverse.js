/**
 * arrayReverse: reverses un array by creating a new array
 *
 * @arr: parameter
 *
 * Return: reversed array
 */

function arrayReverse(arr){
    
    let arrayLength = arr.length - 1;
    let reversedArray = [];

    for (let i = arrayLength; i >= 0; i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
 }
console.log(arrayReverse(['a', 'b', 'c', 'd', 'e']));
