/**
 * printTriangle - print a triangle of hash
 *
 * @x: parameter
 *
 * Return: hash Triangle
 */

const hashTriangle = function(x){
    let hash = '';
    for (let i = 0; i <= x; i++){
        for (let j = 0; j <= i; j++){
            hash += '#';
        }
        hash += '\n';
    }
    return hash
};
console.log(hashTriangle(7));
