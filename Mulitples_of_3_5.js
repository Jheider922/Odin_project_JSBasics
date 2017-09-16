/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

var sum = 0;
var i = 0;
while(i < 1000) //i will be any integer below 1000 but greater than 0
{
  if(i%3===0 /*if any integer below 1000 divided by 3=0*/ || i%5===0 /*if any integer below 1000 divided by 5=0*/)
    {sum = sum + i;} /*Add any integer divide by 3 or 5 that equals 0 to the sum*/
  i++; //loop until i reaches 1000 
}
console.log(sum); //log the total sum of all integers divisable by 3 and 5

