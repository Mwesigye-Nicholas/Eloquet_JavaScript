function range (nums){
    
    let sum = 0;
    let numsLength = nums.length - 1;
    
    for (let i = 0; i <= numsLength; i++){
        sum += nums[i];
    }
    return sum;
}
    
console.log(range([
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10
]));
