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

function countBs(string){
    return countCharacter(string, 'a');
}

console.log(countBs('BooBmacBBaaaBB'));
//Expected output -> 4

console.log(countCharacter('BooBmacBBaaaBB', 'B'));
//Expected outPUT -> 6
