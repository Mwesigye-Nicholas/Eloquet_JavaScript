function range (start, end){

    let createdArray = [];
    for (let i = start; i <= end; i++){
        createdArray.push(i);
    }
    return createdArray;
}
console.log(range(1, 10));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
