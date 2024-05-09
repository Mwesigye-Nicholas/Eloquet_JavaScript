function range (start, end, step = start < end ? 1 : -1){
    let createdArray = []

    if (step > 0){
        for (let i = start; i <= end; i += step){
           createdArray.push(i);
        }
    } else {
        for(let i = start; i >= end; i += step){
            createdArray.push(i);
        }
    }
return createdArray;//.filter(item => item < end);
}
let result = range(5, 2, -1);
let arrayItem = range(1, 10);
console.log(result);
console.log(arrayItem);
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// -> [5, 4, 3, 2]
