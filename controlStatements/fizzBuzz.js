/**
 * fizzBuzz - prints FizzBuzz for numbers 
 * divisible 3 and 5, and Fizz for numbers
 * divivble by 3 only and Buzz for numbers 
 * divisible by 5 only
 * numbers are between 1 to 100
 *
 * Returns: 0
 */

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
    return 0;
}
fizzBuzz();
