
/*
Write a *getPrimes* function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis.
The generated prime numbers should be in an array.
If no prime number is obtainable for the input, return an empty array.
Your logic should be as efficient as possible (with minimal iterations).
Your code should also address edge cases (invalid input, negative input value, or zero as input).
*/
module.exports ={
getPrimes :function (val)
            {
              if(Number.isInteger(val) === false || val < 0 || val === 0) return "Invalid input, please only Positive Integers above zero are allowed";
              if(val > 2147483647) return "Please keep it 32 bit";
              pocketArray = [];
              while (val !== 0)
              {
                if(isPrime(val)){
                pocketArray.push(val)
                }
                val--;
              }
              return pocketArray.reverse();
            }

};
function isPrime(num)
{
  if (num === 2) return true;
  else if (num < 2 || num % 2 === 0) return false;
  
  for(j=3;j<num;j+=2)
  {
    if( num % j === 0) return false;
  }
  
  return true;
  
}