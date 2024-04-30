const  countB = (string) => {
    let count = [];
    let stringLength = string.length - 1;

    if (string === '') return '';

    for (let i = 0; i <= stringLength; i++){
        if (string[i] === "B"){
            count.push(string[i]);
        }
    }
    return count.length;
}

console.log(countB("BooBmacBBaaaBB"))//-> 6
