/**
 * countCharacter - counts the number of times
 * a character appears in the array
 *
 * @string: parameter
 *
 * @char: parameter
 *
 * Return: number of times a character appears in the string
 */



const countCharacter = (string, char) => {
   let count = 0;
   let stringLength = string.length - 1;

    for (let i = 0; i <= stringLength; i++){
        if (string[i] === char){
            count++;
        }
    }
    return count;
}


const  countA = countCharacter('BooBmacBBaaaBB', 'a');

console.log(countA);
//Expected output -> 4

const countB = countCharacter('BooBmacBBaaaBB', 'B');
console.log(countB);
//Expected outPUT -> 6
