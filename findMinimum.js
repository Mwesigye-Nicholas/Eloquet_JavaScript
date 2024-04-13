/**
 * min - takes two parameters and finds the minimum
 *
 * @a: first parameter
 *
 * @b: second parameter
 *
 * Return: minimum parameter
 */

const min = (a, b) => {

    if (a < b){
        return `${a} is the minimum value`;
    }
    else if (b < a){
        return `${b} is the minimum value)`;
    }
}

let smallest = min(21, -2);
console.log(smallest);
