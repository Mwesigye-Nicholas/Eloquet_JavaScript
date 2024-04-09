/**
 * odd_even - checks for odd and even number
 *
 * Return: 0
 */

const odd_even = (x) => {
     if (x < 0){
        x = (x * -1);
      }


    if (x % 2 === 0){
        console.log(x + " is un even number");
    }
    else if (x % 2 !== 0){
        console.log(x + " is not un even number");
    }
   return 0;
}
console.log(odd_even(-10));
